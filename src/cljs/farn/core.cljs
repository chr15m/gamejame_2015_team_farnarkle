(ns farn.core
  (:require
            [farn.gfx :as gfx]
            [farn.font :as font]
            [farn.sprite :as sprite]
            [farn.spatial :as spatial]
            [farn.events :as events]
            [farn.store :as store]
            [farn.query-string :as query-string]
            [farn.utils :refer [log rand-between ends-with?]]
            [cljs.core.async :refer [put! chan <! >! alts! timeout close!]]
            [dommy.core :as dommy :refer-macros [sel1]])
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
)

(enable-console-print!)

(def url (query-string/parse-url (.-href (.-location js/document))))

(println "url-parsed:" url)

(def grass-green 0x357564)

(defonce fonts
  [
   (font/install-google-font-stylesheet! "http://fonts.googleapis.com/css?family=Lobster")
   (font/install-google-font-stylesheet! "http://fonts.googleapis.com/css?family=Varela+Round")
   (font/install-google-font-stylesheet! "http://fonts.googleapis.com/css?family=Shadows+Into+Light+Two")])

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

(def =assets=
  ["http://fonts.gstatic.com/s/lobster/v12/cycBf3mfbGkh66G5NhszPQ.woff2"
   "http://fonts.gstatic.com/s/varelaround/v6/APH4jr0uSos5wiut5cpjrugdm0LZdjqr5-oayXSOefg.woff2"
   "http://fonts.gstatic.com/s/shadowsintolighttwo/v4/gDxHeefcXIo-lOuZFCn2xbIfIbZrEcH2WW587lG91II.woff2"
   "img/sprites/pink-stand-1.png"
   "img/sprites/pink-stand-2.png"
   "img/sprites/pink-stand-3.png"
   "img/sprites/pink-stand-4.png"
   "img/sprites/static-tree-1.png"
   "img/sprites/static-tree-2.png"
   "img/sprites/static-tree-3.png"
   "img/sprites/static-tree-4.png"
   "img/sprites/static-tree-5.png"
   "img/sprites/static-tree-6.png"
   "img/sprites/static-tree-7.png"
   "img/sprites/static-tree-8.png"
   "img/sprites/static-tree-9.png"
   "img/sprites/static-tree-10.png"
   "img/sprites/static-tuft-1.png"
   "img/sprites/static-tuft-2.png"
   "img/sprites/static-tuft-3.png"
])


(defn make-sprite [tex]
  (let [s (gfx/make-sprite tex)]
    (sprite/set-anchor! s 0.5 1)
    s))

(def cell-size 300)

(if (:test (:query-params url)) 
  (do
    ; visit a URL with ?test=1 or &test=1 in there somewhere
    (println "Testing code goes here!")
    
  )

; main live code goes here
(go
  (let [loader
        (load ui-stage =assets=
              :full-colour 0x306020
              :highlight 0x80ff80
              :lowlight 0x103010
              :empty-colour 0x000000
              ;; :debug-delay 0.1
              :fade-in 0.2
              :fade-out 2)]
    (log "pulling")
    (<! loader)
    (log "pulled")
    (let [
          lobster-big (font/make-tiled-font "Lobster" 400 40)
          title-text (font/font-make-batch lobster-big "Alien Forest Explorer" )
          tex (gfx/get-texture :pink-stand-4)
          player (make-sprite tex)
          _ (log "GUY" player)
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

          game-map (spatial/make-random-map
                       [:static-tree-1
                        :static-tree-2
                        :static-tree-3
                        :static-tree-4
                        :static-tree-5
                        :static-tree-6
                        :static-tree-7
                        :static-tree-8
                        :static-tree-9
                        :static-tree-10
                        :static-tuft-1
                        :static-tuft-2
                        :static-tuft-3
                        ] 5000 -5000 5000 -5000 5000)

          game-sprites (doall (for [obj game-map]
                                (assoc obj
                                  :sprite (make-sprite (gfx/get-texture (:type obj)))
                                  :scale 0.5
                                  )))

          game-space (spatial/hash-locations game-sprites cell-size)

          player-pos [0 0]
]
                                        ;(.addChild ui-stage (:sprite title-text))
      (<! (timeout 1000))
      (log "adding")
      (log (str trees))
      (log (str tufts))
      (doto player
        (sprite/set-scale! 0.5))
      (.addChild main-stage player)

      ;; (doseq [t-num (range 50)]
      ;;   (let [tree (make-sprite (rand-nth trees))
      ;;         width (.-width tree)
      ;;         height (.-height tree)
      ;;         x (rand-between -500 500)
      ;;         y (rand-between -500 500)]
      ;;     (log "x,y" x y)
      ;;     (doto tree
      ;;       (sprite/set-scale! 0.5)
      ;;       (sprite/set-pos!
      ;;        ;;0 0
      ;;         x y
      ;;        ))
      ;;     (.addChild main-stage tree)))

      ;; (doseq [t-num (range 100)]
      ;;   (let [tufts (make-sprite (rand-nth tufts))
      ;;         width (.-width tufts)
      ;;         height (.-height tufts)
      ;;         x (rand-between -500 500)
      ;;         y (rand-between -500 500)
      ;;         ]
      ;;     (doto tufts
      ;;       (sprite/set-scale! 0.5)
      ;;       (sprite/set-pos! x y))
      ;;     (.addChild main-stage tufts)))


      (doseq [obj (game-space (spatial/cell? player-pos cell-size))]
        (log "adding" (str obj))
        (doto (:sprite obj)
          (sprite/set-pos! (:pos obj))
          (sprite/set-scale! (:scale obj))
          )
        (.addChild main-stage (:sprite obj))
        )

      (.sort (.-children main-stage) depth-compare)

      (log "PRELOOP")

      (loop [pos player-pos theta 0 ;(+ (/ Math/PI 2))
             ]
        (let [[x y] pos
              calc-theta (+ theta Math/PI)

              ;; his heading unit vector
              hx (Math/cos calc-theta)
              hy (Math/sin calc-theta)

              ;; the reverse heading vector
              rhx (Math/cos (- (* 2 Math/PI) calc-theta))
              rhy (Math/sin (- (* 2 Math/PI) calc-theta))

              speed 4

              vx (* speed hx)
              vy (* speed hy)
              ]
          ; (log "pos" (str pos) "theta" theta)
          (doto player
            (sprite/set-pos! pos))

          ;; (let [d-calc-theta (cond
          ;;                (events/is-pressed? :left)
          ;;                0.03

          ;;                (events/is-pressed? :right)
          ;;                -0.03

          ;;                :default
          ;;                0
          ;;                )
          ;;       xc (Math/cos d-calc-theta)
          ;;       yc (Math/sin d-calc-theta)]
          ;;   ;; (log xc yc)
          ;;   (doseq [i (range (.-children.length main-stage))]
          ;;     (let [sp (aget (.-children main-stage) i)]
          ;;       (sprite/set-pos!
          ;;        sp
          ;;        (-
          ;;         (* xc (.-position.x sp))
          ;;         (* yc (.-position.y sp)))
          ;;        (+
          ;;         (* yc (.-position.x sp))
          ;;         (* xc (.-position.y sp))))
          ;;       ))
          ;;   )

          ;; set the static world sprites to the correct orientation (rotate trees)
          (doseq [obj (game-space (spatial/cell? player-pos cell-size))]
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
                  fy (+ ry y)
                  ]
              (doto (:sprite obj)
                (sprite/set-pos!
                 fx fy
                 ))))

          ;; move cetnter of render to be on player
          (sprite/set-pivot! main-stage x y)

          (.sort (.-children main-stage) depth-compare)
          (<! (events/next-frame))
          (recur
           ;; new position
           (if (events/is-pressed? :down)
             [(+ x vx) (+ y vy)]
             (if (events/is-pressed? :up)
               [(- x vx) (- y vy)]
               [x y]))

           ;; new heading
           (if (events/is-pressed? :left)
             (+ theta 0.03)
             (if (events/is-pressed? :right)
               (- theta 0.03)
               theta)))))

                                        ;(.removeChild ui-stage (:sprite title-text))
      ))))

;; (def lobster-big (font/make-tiled-font "Lobster" 400 40))

;; (def title-text (font/font-make-batch lobster-big "Alien Forest Explorer" ))



(defn main []
  ;; (log "main!!" (:stage world) title-text)
  ;; (.addChild (:stage world) (:sprite title-text))
  ;; (doto (:sprite title-text)
  ;;   (sprite/set-pos! 0 0))
)
