(ns farn.core
  (:require
            [farn.gfx :as gfx]
            [farn.font :as font]
            [farn.sprite :as sprite]
            [farn.spatial :as spatial]
            [farn.events :as events]
            [farn.store :as store]
            [farn.map :as perlin-map]
            [farn.assets :as assets]
            [farn.rex :as rex]
            [farn.query-string :as query-string]
            [farn.utils :refer [log rand-between ends-with?]]
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

(defonce fonts
  [
   (font/install-google-font-stylesheet! "http://fonts.googleapis.com/css?family=Lobster")
   (font/install-google-font-stylesheet! "http://fonts.googleapis.com/css?family=Varela+Round")
   (font/install-google-font-stylesheet! "http://fonts.googleapis.com/css?family=Shadows+Into+Light+Two")])

;; player animation is an atom cause I'm lazy
(def player-animation (atom :standing))

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
          player-shadow (sprite/make-sprite (gfx/get-texture :shadow-1) :anchor-x 0.5 :anchor-y 0.5)

          player-standing-texs (doall (for [type [:pink-stand-1 :pink-stand-2
                                                  :pink-stand-3 :pink-stand-4]]
                                        (gfx/get-texture type)
                                        ))
          player-standing-sway [0 -4 0 4]

          player-walking-texs [(gfx/get-texture :pink-walk-1)
                               (gfx/get-texture :pink-walk-2)]

          trees (for [i (range 10)]
                  (gfx/get-texture (keyword (str "static-tree-" (inc i)))))
          tufts (for [i (range 3)]
                  (gfx/get-texture (keyword (str "static-tuft-" (inc i)))))

          depth-compare (fn [a b]
                          ;(log "comp" (.-position.y a) (.-position.y b))
                          (cond
                           (< (.-position.y a) (.-position.y b)) -1
                           (< (.-position.y b) (.-position.y a)) 1
                           :default 0))
          
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
                                  ;(assets/make-range "static-flower-" 3)
                                  ;(assets/make-range "static-schroom-" 2)
                                  ;(assets/make-range "static-tuft-" 3)
                                  ))
                         ; grass
                         4 (vec (concat 
                                  ;(assets/make-range "static-tuft-" 3)
                                  [:static-schrub-1]
                                  [:static-lump-1 :static-lump-3]
                                  (assets/make-range "static-schroom-" 2)
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
                                (assoc obj
                                  :sprite (sprite/make-sprite (gfx/get-texture (:type obj)))
                                  :scale 0.5
                                  )))

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

      ;; the little chatterbox guy
      (rex/launch-rex ui-stage)

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

      (loop [pos [0 0]
             speed 0
             theta 0
             cells #{[0 0]}
             sprite-count 0
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
              ;_ (log (str cull-cells))
                                        ;(log "pos" (str pos) "theta" theta)
]

          (sprite/set-pos! player pos)
          (sprite/set-pos! player-shadow pos)

          ;; set the static world sprites to the correct orientation (rotate trees)
          (doseq [cell cells]
            (doseq [obj (game-space cell)]
              ;(println "->" obj)
              (let [
                    ;; absolute tree location
                    [ox oy] (:pos obj)

                    ;; vector from player to tree
                    p->t [(- ox x) (- oy y)]
                    [p->t.x p->t.y] p->t

                    ;; rotate this p->t
                    [rx ry] [
                             (+ (* rhx p->t.y) (* rhy p->t.x))
                             (- (* rhx p->t.x) (* rhy p->t.y))
                             ]

                    ;; now add to the the player loc
                    fx (+ rx x)
                    fy (+ (/ ry isometric-factor) y)
                    ]
                (doto (:sprite obj)
                  (sprite/set-pos!
                   fx  fy
                   )))))

          ;; move cetnter of render to be on player
          (sprite/set-pivot! main-stage x y)

          ;; switch the player animation
          (if (or (> (Math/abs vx) 2)
                  (> (Math/abs vy) 2)
                  (events/is-pressed? :up))
            (reset! player-animation :running)
            (reset! player-animation :standing))

          (.sort (.-children main-stage) depth-compare)
          (<! (events/next-frame))
          (recur
           ;; new position
           [(- x vx) (- y vy)]

           ;; (if (events/is-pressed? :down)
           ;;   [(+ x vx) (+ y vy)]
           ;;   (if (events/is-pressed? :up)
           ;;     [(- x vx) (- y vy)]
           ;;     [x y]))

           ;; new speed
           (if (events/is-pressed? :up)
             (min (+ speed player-acceleration) player-max-speed)
             (max (* speed player-drag) 0))

           ;; new heading
           (if (events/is-pressed? :left)
             (+ theta player-turn-speed)
             (if (events/is-pressed? :right)
               (- theta player-turn-speed)
               theta))

           ;; pass through new cell list
           post-remove-cells

           ;; pass through sprite count
           old-sprite-count
           )))

                                        ;(.removeChild ui-stage (:sprite title-text))
      ))))


(defn main []

)

