(ns farn.core
  (:require
            [farn.gfx :as gfx]
            [farn.font :as font]
            [farn.sprite :as sprite]
            [farn.spatial :as spatial]
            [farn.events :as events]
            [farn.store :as store]
            [farn.stars :as stars]
            [farn.sound :as sound]
            [farn.map :as perlin-map]
            [farn.assets :as assets]
            [farn.rex :as rex]
            [farn.query-string :as query-string]
            [farn.utils :refer [log rand-between ends-with? limit]]
            [cljs.core.async :refer [put! chan <! >! alts! timeout close!]]
            [dommy.core :as dommy :refer-macros [sel1]])
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
)

(enable-console-print!)

(def url (query-string/parse-url (.-href (.-location js/document))))

(println "url-parsed:" url)

;; background
(def grass-green 0x357564)
(def isometric-factor 3)
(def cell-size 500)

;; player settings
(def player-max-speed 20)
(def player-acceleration 0.6)
(def player-drag 0.95)
(def player-turn-speed 0.03)
(def player-bound-height 30)
(def player-bound-length 30)

;; this atom is so other go blocks can read the players last position
(def last-player-position (atom [0 0]))
(def last-player-rh (atom [0 0]))

;; pickups
(def pickup-bounce-height 5)
(def pickup-bounce-speed 0.1)
(def pickup-vertical-offset 25)
(def max-pickups 100)
(def pickup-cull-distance 4000)
(def pickup-cull-distance-squared (* pickup-cull-distance pickup-cull-distance))
(def pickup-spread 3000) ;; how far the spawner spreads the pickups out around you
(def pickup-exclusion-zone 500) ;; how far within this zone it wont spawn (the players area)

(defonce fonts
  [
   (font/install-google-font-stylesheet! "http://fonts.googleapis.com/css?family=Lobster")
   (font/install-google-font-stylesheet! "http://fonts.googleapis.com/css?family=Varela+Round")
   (font/install-google-font-stylesheet! "http://fonts.googleapis.com/css?family=Shadows+Into+Light+Two")])

;; player animation is an atom cause I'm lazy
(def player-animation (atom :standing))

;; players star pickup count
(def player-stars (atom 0))

;; all the stars on the game atm
(def pickup-store (atom #{}))

(defn game-completed [main-stage star-tex shadow-tex x y polar-object-coords cells game-space depth-compare]
  (go
    (while true
      (loop [theta 0 frame-num 0]
        (let [calc-theta (+ theta Math/PI)

              ;; his heading unit vector
              hx (Math/cos calc-theta)
              hy (Math/sin calc-theta)

              ;; the reverse heading vector
              rhx (Math/cos (- (* 2 Math/PI) calc-theta))
              rhy (Math/sin (- (* 2 Math/PI) calc-theta))]
          (reset! last-player-rh [rhx rhy])
          (.sort (.-children main-stage) depth-compare)
          (<! (events/next-frame))

          ;; set the static world sprites to the correct orientation (rotate trees)
          (doseq [cell cells]
            (doseq [obj (game-space cell)]
              ;(println "->" obj)
              (let [[x y] (polar-object-coords (:pos obj) (:sprite obj)
                                       x y
                                       rhx rhy)]
                (sprite/set-pos! (:sprite obj) x y))
              ))

          ;;
          ;; PICKUPS
          ;;
          (doseq [pickup @pickup-store]
            (let [[x y] (polar-object-coords (:pos pickup)
                                             (:sprite pickup)
                                             x y
                                             rhx rhy)]
              (sprite/set-pos! (:sprite pickup) x y)
              (sprite/set-pos! (:shadow pickup) x y)

              ;; oscillate pickup
              (sprite/set-pivot!
               (:sprite pickup) 0
               (+ pickup-vertical-offset
                  (* pickup-bounce-height
                     (+ 1 (Math/sin
                           (* frame-num pickup-bounce-speed))))))
              )))
        (recur (+ theta 0.03) (inc frame-num)))))

  (go
    (while true
      (doseq [a (range 10)]
        (doseq [i (range 10)]
          (stars/make main-stage star-tex shadow-tex x y))
        (<! (timeout 430)))
      (<! (timeout 3000))
      (doseq [i (range 100)]
        (stars/make main-stage star-tex shadow-tex x y)
        (<! (timeout 100)))
      (<! (timeout 3000))

)
  ))

(defn load [s urls & {:keys [fade-in fade-out]
                      :or {fade-in 0.5 fade-out 0.5}
                      :as options}]
  (let [c (chan)
        b (gfx/add-prog-bar s options)]
    (go
      ;; fade in
      (<! (gfx/fadein b :duration fade-in))

      ;; show load progress
      (log "load" (str options))
      (<! (apply (partial gfx/load-urls urls b) options))

      ;; load is done. return message
      (>! c true)

      ;; delay a tiny bit
      (<! (timeout 300))

      ;; fadeout
      (<! (gfx/fadeout b :duration fade-out))

      ;; remove progress bar sprite
      (.removeChild s b)

      (close! c))
    c))


(def world (gfx/init :background grass-green
                     :expand true
                     :engine :auto
                     :canvas (sel1 :#game)))
(def main-stage (:world world))
(def ui-stage (:ui world))

;; render every frame
(go
  (while true
    (<! (events/next-frame))
    (.render (:renderer world) (:stage world))))

(defn make-sprite [tex & {:keys [anchor-x anchor-y] :or {anchor-x 0.5 anchor-y 1}}]
  (let [s (gfx/make-sprite tex)]
    (sprite/set-anchor! s anchor-x anchor-y)
    s))

(if (:test (:query-params url))
  (do
    ; visit a URL with ?test=1 or &test=1 in there somewhere
    (println "Testing code goes here!")
    (when (= (:test (:query-params url)) "perlin")
      (println "we perlin!"))
      (let [c (perlin-map/perlin-map-generator)]
        (go
          (let [t  (<! c)]
            (println "Perlin map done:" (.-length t))
            )
          )
        )
      ; (js/map 23 1000 1000 (fn [t] (println "Perlin map done!" t)))
  )

; main live code goes here
(go
  ; kick off the music
  (go
      (println "pre sound lel")
    (let [music-track (<! (sound/load-sound "music/bu-ogre-of-a-simplex.ogg"))]
      (println "we has sound lel")
      (.log js/console music-track)
      (sound/play-sound music-track 0.9 true)
      )
    )
  ; kick off the assets loader
  (let [loader
        (load ui-stage assets/=assets=
              :full-colour 0x306020
              :highlight 0x80ff80
              :lowlight 0x103010
              :empty-colour 0x000000
              ;; :debug-delay 0.1
              :fade-in 0.2
              :fade-out 2)
        perlin-channel (perlin-map/perlin-map-generator)]
    (log "pulling")
    (<! loader)
    (log "pulled")
    (let [
          lobster-big (font/make-tiled-font "Lobster" 400 48)
          varela (font/make-tiled-font "Varela Round" 400 24)
          wait (<! (timeout 1000))
          _ (log "perlin channel - start")
          tilemap (<! perlin-channel)
          _ (log "perlin channel - done")
          ;title-text (font/font-make-batch lobster-big "Alien Forest Explorer")
          title-text (font/make-text "400 48pt Lobster"
                                     "Alien Forest Explorer"
                                     :weight 400 :fill "#7FCACD"
                                     :dropShadow true
                                     :dropShadowColor "#333333")

          tex (gfx/get-texture :pink-stand-4)
          player (sprite/make-sprite tex)
          shadow-tex (gfx/get-texture :shadow-1)
          player-shadow (sprite/make-sprite shadow-tex  :anchor-x 0.5 :anchor-y 0.5)

          player-standing-texs (doall (for [type [:pink-stand-1 :pink-stand-2
                                                  :pink-stand-3 :pink-stand-4]]
                                        (gfx/get-texture type)
                                        ))
          player-standing-sway [0 -4 0 4]

          player-walking-texs [(gfx/get-texture :pink-walk-1)
                               (gfx/get-texture :pink-walk-2)]

          star-tex (gfx/get-texture :pickup-star-1)
          player-stars-icon (sprite/make-sprite star-tex)
          player-stars-text (font/make-text "400 20pt Varela Round"
                                            (str @player-stars)
                                            :weight 400
                                            :fill "#ffffff"
                                            :dropShadow true
                                            :dropShadowColor "#000000")

          pickup-textures [:pickup-star-1 :pickup-mushroom-1]

          floor-objects [:static-floor-path-big
                         :static-floor-path-medium
                         :static-floor-path-small
                         :static-floor-sand-big
                         :static-floor-sand-medium
                         :static-floor-sand-small
                         :static-floor-water-big
                         :static-floor-water-medium
                         :static-floor-water-small
                         ]

          ;; things that we can hit
          obstacle-types [:static-tree-1 :static-tree-2 :static-tree-3 :static-tree-4 :static-tree-5 :static-tree-6 :static-tree-7 :static-tree-8 :static-tree-9 :static-tree-10 :static-tree-11 :static-tree-12 :static-tree-13 :static-tree-14 :static-tree-15 :static-tree-16 :static-tree-17 :static-tree-18 :static-tree-19 :static-tree-20 :static-castle-1
                          ;:static-rock-1
                          :static-giant-schroom-1
                          :static-giant-schroom-2
                          :static-cactus-1
                          :static-cactus-2
                          :static-cactus-3
                           ]

          trees (for [i (range 10)]
                  (gfx/get-texture (keyword (str "static-tree-" (inc i)))))
          tufts (for [i (range 3)]
                  (gfx/get-texture (keyword (str "static-tuft-" (inc i)))))

          make-pickup
          (fn [[x y] spread & [force-type force-exclusion-zone]]
            (let [exclusion-zone (if force-exclusion-zone force-exclusion-zone pickup-exclusion-zone)
                  pickup-type (if force-type force-type (rand-nth pickup-textures))
                  s (sprite/make-sprite (gfx/get-texture pickup-type))
                  shadow (sprite/make-sprite shadow-tex :anchor-x 0.5 :anchor-y 0.5)

                  ;; offscreen
                  _ (sprite/set-pos! s 50000 10000)
                  _ (sprite/set-pos! shadow 50000 10000)

                  xoff (if (< (rand) 0.5)
                         (rand-between (- spread) (- exclusion-zone))
                         (rand-between exclusion-zone spread)
                         )
                  yoff (if (< (rand) 0.5)
                         (rand-between (- spread) (- exclusion-zone))
                         (rand-between exclusion-zone spread)
                         )
                  ]
              (println pickup-type (+ x xoff) (+ y yoff))
              {:sprite s
               :pos [(+ x xoff)
                     (+ y yoff)]
               :shadow shadow
               :scale 0.7
               :type pickup-type}))

          pickup-sfx (loop [sounds [] [h & t] (range 1 10)]
                       (if-not (nil? h)
                         (recur
                          (conj sounds (<! (sound/load-sound (str "sfx/pickup-" h ".ogg"))))
                          t
                          )
                         sounds
                         ))

          hit-sfx (loop [sounds [] [h & t] (range 1 4)]
                       (if-not (nil? h)
                         (recur
                          (conj sounds (<! (sound/load-sound (str "sfx/boom-" h ".ogg"))))
                          t
                          )
                         sounds
                         ))


          depth-compare (fn [a b]
                          ;(log "comp" (.-position.y a) (.-position.y b))
                          (cond
                           (and (.-floortile a) (.-floortile b))
                           (- (.-texture.width a) (.-texture.width b))

                           (.-floortile a) -1
                           (.-floortile b) 1
                           (< (.-position.y a) (.-position.y b)) -1
                           (< (.-position.y b) (.-position.y a)) 1
                           :default 0))

          polar-object-coords
          (fn [obj-pos obj-sprite player-x player-y rhx rhy]
            (let [
                  ;; absolute tree location
                  [ox oy] obj-pos

                  ;; vector from player to tree
                  p->t [(- ox player-x) (- oy player-y)]
                  [p->t-x p->t-y] p->t

                  ;; rotate this p->t
                  [rx ry] [
                           (+ (* rhx p->t-y) (* rhy p->t-x))
                           (- (* rhx p->t-x) (* rhy p->t-y))
                           ]

                  ;; now add to the the player loc
                  fx (+ rx player-x)
                  fy (+ (/ ry isometric-factor) player-y)
                  ]
              [fx fy])
            )

          ;; function that sees if two positions are really close
          close? (fn [[x1 y1] [x2 y2] threshold]
                   (let [dx (- x1 x2)
                         dy (- y1 y2)
                         d-squared (+ (* dx dx) (* dy dy))]
                     (< d-squared threshold)))

          game-map (spatial/make-map-from-tilemap
                        tilemap
                        {
                         ; water
                         0 [:static-floor-water-big :static-floor-water-medium :static-floor-water-small]
                         ; road
                         1 [:static-floor-path-big :static-floor-path-medium :static-floor-path-small]
                         ; "sand"
                         2 (vec (concat
                                  [:static-rock-1]
                                  [:static-lump-2]
                                  [:static-floor-sand-big :static-floor-sand-medium :static-floor-sand-small]
                                  (assets/make-range "static-cactus-" 3)
                                  ))
                         ; trees
                         3 (vec (concat
                                  (assets/make-range "static-tree-" 20)
                                  (assets/make-range "static-tree-" 20)
                                  (assets/make-range "static-tree-" 20)
                                  (assets/make-range "static-tree-" 20)
                                  (assets/make-range "static-tree-" 20)
                                  (assets/make-range "static-tree-" 20)
                                  (assets/make-range "static-tree-" 20)
                                  (assets/make-range "static-tree-" 20)
                                  (assets/make-range "static-tree-" 20)
                                  (assets/make-range "static-tree-" 20)
                                  (assets/make-range "static-tree-" 20)
                                  (assets/make-range "static-tree-" 20)
                                  (assets/make-range "static-tree-" 20)
                                  (assets/make-range "static-tree-" 20)
                                  (assets/make-range "static-tree-" 20)
                                  (assets/make-range "static-tree-" 20)
                                  (assets/make-range "static-tree-" 20)
                                  (assets/make-range "static-tree-" 20)
                                  (assets/make-range "static-tree-" 20)
                                  (assets/make-range "static-tree-" 20)
                                  (assets/make-range "static-tree-" 20)
                                  (assets/make-range "static-tree-" 20)
                                  (assets/make-range "static-tree-" 20)
                                  (assets/make-range "static-tree-" 20)
                                  (assets/make-range "static-tree-" 20)
                                  (assets/make-range "static-tree-" 20)
                                  (assets/make-range "static-tree-" 20)
                                  (assets/make-range "static-giant-schroom-" 2)
                                  (assets/make-range "static-giant-schroom-" 2)
                                  (assets/make-range "static-giant-schroom-" 2)
                                  [:static-castle-1]
                                  ))
                         ; grass
                         4 (vec (concat
                                  ;(assets/make-range "static-tuft-" 3)
                                  [:static-schrub-1]
                                  [:static-lump-1 :static-lump-3]
                                  (assets/make-range "static-schroom-" 3)
                                  (assets/make-range "static-flower-" 3)
                                  (assets/make-range "static-flower-" 3)
                                  (assets/make-range "static-flower-" 3)
                                  (assets/make-range "static-flower-" 3)
                                  (assets/make-range "static-flower-" 3)
                                  (assets/make-range "static-flower-" 3)
                                  ))
                        }
                        30000 -10000 10000 -10000 10000)

          game-sprites (doall (for [obj game-map]
                                (let [type (:type obj)
                                      sprite (make-sprite (gfx/get-texture type))]
                                  (when (some #(= type %) floor-objects)
                                    (set! (.-floortile sprite) true)
                                    (sprite/set-anchor! sprite 0.5 0.5))
                                  (assoc obj
                                    :sprite sprite
                                    :scale 0.5
                                    ))))

          game-space (spatial/hash-locations game-sprites cell-size)

          player-pos [0 0]

          add-cell! (fn [id]
                     (doseq [obj (game-space id)]
                       ;(log "adding" (str obj))
                       (sprite/set-scale! (:sprite obj) (:scale obj))

                       ;; add them way off so they don't pop
                       ;; TODO: fix this
                       (sprite/set-pos! (:sprite obj) 100000 100000)

                       (.addChild main-stage (:sprite obj))))

          remove-cell! (fn [id]
                         (doseq [obj (game-space id)]
                           ;(log "removing" (str obj))
                           (.removeChild main-stage (:sprite obj)))
                         )
]

      ; (println "game-map" game-map)

      ;; title text
      (.addChild ui-stage title-text)

      ;; keep title positioned at top
      (go
        (let [rc (events/new-resize-chan)]
          (while true
            (let [w (.-innerWidth js/window)
                  h (.-innerHeight js/window)
                  hw (/ w 2)
                  hh (/ h 2)]
              (sprite/set-pos! title-text 0 (+ (- hh) 100))
              (<! rc)
              )
            )
          )
        )

      ;; fade the title
      (go
        (<! (timeout 1000))
        (<! (gfx/fadeout title-text :duration 1))
        (.removeChild ui-stage title-text)
        )

      ;; player star count text
      (sprite/set-anchor! player-stars-icon 0 0)
      (sprite/set-scale! player-stars-icon 0.7)
      (sprite/set-anchor! player-stars-text 0 0)
      (.addChild ui-stage player-stars-icon)
      (.addChild ui-stage player-stars-text)
      (go
        (let [rc (events/new-resize-chan)]
          (while true
            (let [w (.-innerWidth js/window)
                  h (.-innerHeight js/window)
                  hw (/ w 2)
                  hh (/ h 2)]
              (sprite/set-pos! player-stars-icon (+ (- hw) 5) (+ (- hh) 5))
              (sprite/set-pos! player-stars-text (+ (- hw) 45) (+ (- hh) 5))
              (<! rc)
              )
            )
          )
        )

      ;; add a watcher that updates the count
      (add-watch player-stars :add
                 (fn [key ref old new]
                   (.setText player-stars-text (str new))
                   ))

      ;; the little chatterbox guy
      (rex/launch-rex ui-stage)

      ;; go block that watches the player. it regularly adds stars just off screen
      ;; and culls stars that get too far away
      (go
        ;; add an alien baby!
        (let [pickup (make-pickup [0 0] 10000 :pickup-baby-1 2000)]
              (swap! pickup-store conj pickup)
              (sprite/set-scale! (:sprite pickup)  (:scale pickup))
              (.addChild main-stage (:sprite pickup))
              (.addChild main-stage (:shadow pickup))
          )
        ;; also add the rest of the things
        (while true
          (<! (timeout 333))

          ;; add a pickup if theres not too many
          (when (< (count @pickup-store) max-pickups)
            (let [pickup (make-pickup @last-player-position pickup-spread)]
              (swap! pickup-store conj pickup)
              (sprite/set-scale! (:sprite pickup)  (:scale pickup))
              (.addChild main-stage (:sprite pickup))
              (.addChild main-stage (:shadow pickup))
              ))))

      ;; cull go block
      (let [cull-distance? (fn [pickup]
                             (when
                                 (not (close? @last-player-position
                                              (:pos pickup)
                                              pickup-cull-distance-squared))
                               pickup
                               ))]
        (go
          (while true
            (<! (timeout 250))

            ;; remove some remote pickups
            (when-let [pickup (some cull-distance? @pickup-store)]
              (.removeChild main-stage (:sprite pickup))
              (.removeChild main-stage (:shadow pickup))
              (log "REMOVING" (str pickup))
              (swap! pickup-store disj pickup)
              )
            )))

      (<! (timeout 1000))
      (log "adding player")
      (doto player
        (sprite/set-scale! 0.5))
      (.addChild main-stage player)
      (.addChild main-stage player-shadow)

      ;; handle the player animation
      (go
        (while true
          (case @player-animation
            :standing
            (do
              (while (= @player-animation :standing)
                (loop [i 0]
                  (<! (timeout (rand-between 300 600)))
                  (.setTexture player (nth player-standing-texs i))
                  (sprite/set-pivot! player (player-standing-sway i) 0)
                  (when (= @player-animation :standing)
                    (recur (mod (inc i) 4))))))

            :running
            (do
              (while (= @player-animation :running)
                (.setTexture player (player-walking-texs 0))
                (loop [i 0]
                  (<! (events/next-frame))
                  (sprite/set-pivot!
                   player -1
                   (* player-bound-height (Math/sin (* Math/PI (/ i player-bound-length)))))
                  (when (< i player-bound-length)
                    (recur (inc i))))

                (when (= @player-animation :running)
                  (.setTexture player (player-walking-texs 1))
                  (loop [i 0]
                    (<! (events/next-frame))
                    (sprite/set-pivot!
                     player 1
                     (* player-bound-height (Math/sin (* Math/PI (/ i player-bound-length)))))
                    (when (< i player-bound-length)
                      (recur (inc i))))))))))

      (add-cell! (spatial/which-cell player-pos cell-size))

      (.sort (.-children main-stage) depth-compare)

      (loop [frame-num 0
             pos [0 0]
             speed 0
             theta 0
             d-theta 0
             cells #{[0 0]}
             sprite-count 0
             player-hit 0
             ]
        (when (not= sprite-count (.-children.length main-stage))
          (log "SPRITE COUNT:" (.-children.length main-stage)))

        (let [[x y] pos
              calc-theta (+ theta Math/PI)

              ;; his heading unit vector
              hx (Math/cos calc-theta)
              hy (Math/sin calc-theta)

              ;; the reverse heading vector
              rhx (Math/cos (- (* 2 Math/PI) calc-theta))
              rhy (Math/sin (- (* 2 Math/PI) calc-theta))

              vx (* speed hx)
              vy (* speed hy)

              ;; save the old sprite count before killing the number
              old-sprite-count (.-children.length main-stage)

              ;; what cell is player in
              player-cell (spatial/which-cell pos cell-size)
              [player-cell-x player-cell-y] player-cell

              ;; we need surrounding cells too
              player-and-surrounds (for [dx [-2 -1 0 1 2]
                                         dy [-2 -1 0 1 2]]
                                     [(+ dx player-cell-x) (+ dy player-cell-y)])

              ;; a function to take a cell coord and if its not added, add it
              ;; returns the new set with added cells
              process-add-cell (fn [test-cell cells]
                                 (if-not (some #(= % test-cell) cells)
                                   (do
                                     (add-cell! test-cell)
                                     (conj cells test-cell)
                                     )
                                   cells))

              ;; if the present cell isn't in cells, lets load it in
              new-cells (loop [done cells
                               [h & t] player-and-surrounds]
                          (if (nil? h)
                            done
                            (recur (process-add-cell h done) t)
                            )
                          )

              ;; remove cells that are too far away from player
              cull-cells
              (filter #(not (nil? %))
                      (for [c cells]
                        (let [[cx cy] c
                              dx (Math/abs (- cx player-cell-x))
                              dy (Math/abs (- cy player-cell-y))
                              d-squared (+ (* dx dx) (* dy dy))
                              ]
                          (if (> d-squared 25)
                            c
                            nil))))

              post-remove-cells (loop [[h & t] cull-cells
                                  final-cells new-cells]
                             (if-not (nil? h)
                               (do
                                 ;; remove the cell
                                 (remove-cell! h)
                                 (recur t (disj final-cells h)))

                               ;; exit. return the new cell list
                               final-cells
                               ))

              ;; has player hit a pickup
              _ (doseq [pickup @pickup-store]
                  (if (sprite/overlap? player (:sprite pickup))
                    (if (= (:type pickup) :pickup-baby-1)
                      (do
                        (.removeChild main-stage (:sprite pickup))
                        (.removeChild main-stage (:shadow pickup))
                        (reset! player-animation :standing)
                        (let [[bx by] pos]
                          (<! (game-completed main-stage star-tex shadow-tex bx by
                                              polar-object-coords post-remove-cells
                                              game-space depth-compare))
                        )
                        )
                      ;(js/alert "BABY PIKCUP")
                    ;; picked up
                    (do
                      (sound/play-sound (rand-nth pickup-sfx) 0.4)
                      (.removeChild main-stage (:sprite pickup))
                      (.removeChild main-stage (:shadow pickup))
                      (swap! player-stars inc)
                      (swap! pickup-store disj pickup)
                      nil))))

              player-hit? (let [check-cell (game-space player-cell)
                         obstacle? (fn [obj] (some #(= (:type obj) %) obstacle-types))
                         hit-things (filter obstacle? check-cell)
                         hit-player? #(close? pos (:pos %) 500)
                         ] (some hit-player? hit-things))

              ;_ (log "?" player-hit?)

              new-player-hit (if (and (= 0 player-hit) player-hit?)
                               ;; how many frames we "bounce" for
                               (do
                                 (sound/play-sound (rand-nth hit-sfx) 0.5)

                                 (let [stars-to-spawn (min 30 @player-stars)
                                       [x y] pos]
                                   (when (> stars-to-spawn 0)
                                     (loop [i stars-to-spawn]
                                       (stars/make main-stage star-tex shadow-tex x y)
                                       (when (> i 1)
                                         (recur (dec i)))
                                       )))
                                 (reset! player-stars 0)

                                 (* 30 (/ speed player-max-speed)))

                               ;; the old value
                               player-hit
                               )


              ;_ (log (str cull-cells))
                                        ;(log "pos" (str pos) "theta" theta)
]

          (sprite/set-pos! player pos)
          (sprite/set-pos! player-shadow pos)

          ;; set the static world sprites to the correct orientation (rotate trees)
          (doseq [cell cells]
            (doseq [obj (game-space cell)]
              ;(println "->" obj)
              (let [[x y] (polar-object-coords (:pos obj) (:sprite obj)
                                       x y
                                       rhx rhy)]
                (sprite/set-pos! (:sprite obj) x y))
              ))

          ;;
          ;; PICKUPS
          ;;
          (doseq [pickup @pickup-store]
            (let [[x y] (polar-object-coords (:pos pickup)
                                             (:sprite pickup)
                                             x y
                                             rhx rhy)]
              (sprite/set-pos! (:sprite pickup) x y)
              (sprite/set-pos! (:shadow pickup) x y)

              ;; oscillate pickup
              (sprite/set-pivot!
               (:sprite pickup) 0
               (+ pickup-vertical-offset
                  (* pickup-bounce-height
                     (+ 1 (Math/sin
                           (* frame-num pickup-bounce-speed))))))
              )
            )

          ;; check for collision only with objects in the players cell

            ;; (if player-hit?
            ;;   (do
            ;;     (sound/play-sound (rand-nth hit-sfx) 0.4)
            ;;     true)
            ;;   false)



          ;; (doseq [obj (game-space id)]
          ;;              ;(log "adding" (str obj))
          ;;              (sprite/set-scale! (:sprite obj) (:scale obj))

          ;;              ;; add them way off so they don't pop
          ;;              ;; TODO: fix this
          ;;              (sprite/set-pos! (:sprite obj) 100000 100000)

          ;;              (.addChild main-stage (:sprite obj)))



          ;; move cetnter of render to be on player
          (sprite/set-pivot! main-stage x y)

          ;; other go blocks need the players position
          (reset! last-player-position [x y])
          (reset! last-player-rh [rhx rhy])

          ;; switch the player animation
          (if (or (> (Math/abs vx) 2)
                  (> (Math/abs vy) 2)
                  (events/is-pressed? :up))
            (reset! player-animation :running)
            (reset! player-animation :standing))

          (.sort (.-children main-stage) depth-compare)
          (<! (events/next-frame))

          ;; (when (events/is-pressed? :s)
          ;;   (stars/make main-stage star-tex shadow-tex x y))

          (recur
           ;; new frame-num
           (inc frame-num)

           ;; new position
           (if (pos? player-hit)
             ;; player hit bounce movement
             [(+ x vx) (+ y vy)]

             ;; normal movement
             [(- x vx) (- y vy)])

           ;; (if (events/is-pressed? :down)
           ;;   [(+ x vx) (+ y vy)]
           ;;   (if (events/is-pressed? :up)
           ;;     [(- x vx) (- y vy)]
           ;;     [x y]))


           ;; new speed
           (cond
            ;; at end of bounce speed should be 0
            (< 0 new-player-hit 5) 0

            ;; if player-hit is positive up key has no effect
            ;(pos? new-player-hit) speed

            :default
            ;; normal speed update
            (if (events/is-pressed? :up)
              (min (+ speed player-acceleration) player-max-speed)
              (max (* speed player-drag) 0)))

           ;; new heading
           (+ theta d-theta)

           ;; next rate of change of theta
           (if (events/is-pressed? :left)
             (min (+ d-theta 0.01) player-turn-speed)
             (if (events/is-pressed? :right)
               (max (- d-theta 0.01) (- player-turn-speed))

               ;; no key pressed slow to 0
               (* 0.5 d-theta)))

           ;; pass through new cell list
           post-remove-cells

           ;; pass through sprite count
           old-sprite-count

           ;; player hit count down pass through
           (max 0 (dec new-player-hit))
           )))

                                        ;(.removeChild ui-stage (:sprite title-text))
      ))))


(defn main []

)
