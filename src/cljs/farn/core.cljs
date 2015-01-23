(ns farn.core
  (:require
            [farn.gfx :as gfx]
            [farn.font :as font]
            [farn.sprite :as sprite]
            [farn.events :as events]
            [farn.utils :refer [log]]
            [cljs.core.async :refer [put! chan <! >! alts! timeout close!]]

            [dommy.core :as dommy :refer-macros [sel1]])
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
)

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
                     :engine :canvas
                     :canvas (sel1 :#game)))
(def main-stage (:world world))
(def ui-stage (:ui world))

(events/clear-frame-chans!)
(let [c (events/new-frame-chan)]
  (go
    (while true
      (<! c)
      (.render (:renderer world) (:stage world))
      )))

(go
  (let [loader
        (load ui-stage
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
               ]
              :full-colour 0x306020
              :highlight 0x80ff80
              :lowlight 0x103010
              :empty-colour 0x000000
              :debug-delay 0.1
              :fade-in 0.2
              :fade-out 2)]
    (log "pulling")
    (<! loader)
    (log "pulled")
    (<! (timeout 2000))
    (let [
          lobster-big (font/make-tiled-font "Lobster" 400 40)
          title-text (font/font-make-batch lobster-big "Alien Forest Explorer" )
          guy (gfx/make-sprite (js/PIXI.Texture.fromImage "img/sprites/pink-stand-1.png"))
          trees (for [i (range 50)]
                  (js/PIXI.Texture.fromImage (str "img/sprites/static-tree-" i ".png")))
          tufts (for [i (range 3)]
                  (js/PIXI.Texture.fromImage (str "img/sprites/static-tuft-" i ".png")))

          depth-compare (fn [a b]
                          ;(log "comp" (.-position.y a) (.-position.y b))
                          (cond
                           (< (.-position.y a) (.-position.y b)) -1
                           (< (.-position.y b) (.-position.y a)) 1
                           :default 0))]
                                        ;(.addChild ui-stage (:sprite title-text))
      (<! (timeout 1000))
      (log "adding")
      (doto guy
        (sprite/set-scale! 0.5))
      (.addChild main-stage guy)

      (doseq [t-num (range 100)]
        (let [tree (gfx/make-sprite (rand-nth trees))
              width (.-width tree)
              height (.-height tree)]
          (log "!" tree)
          (doto tree
            (sprite/set-scale! 0.5)
            (sprite/set-pivot! (/ width 2) height)
            (sprite/set-pos!
             ;;0 0
              (- (rand 1000) 500)
              (- (rand 1000) 500)
             ))
          (.addChild main-stage tree)))

      (doseq [t-num (range 100)]
        (let [tufts (gfx/make-sprite (rand-nth tufts))
              width (.-width tufts)
              height (.-height tufts)
              ]
          (log "!" tufts)
          (doto tufts
            (sprite/set-scale! 0.5)
            (sprite/set-pivot! (/ width 2) height)
            (sprite/set-pos! (- (rand 1000) 500) (- (rand 1000) 500)))
          (.addChild main-stage tufts)))

      (.sort (.-children main-stage) depth-compare)

      (loop []
        (let [d-theta 0.01
              xc (Math/cos d-theta)
              yc (Math/sin d-theta)]
          ;; (log xc yc)
          (doseq [i (range 200)]
            (let [sp (aget (.-children main-stage) i)]
              (sprite/set-pos!
               sp
               (-
                (* xc (.-position.x sp))
                (* yc (.-position.y sp)))
               (+
                (* yc (.-position.x sp))
                (* xc (.-position.y sp))))
              ))
          )
        (.sort (.-children main-stage) depth-compare)
        (<! (events/next-frame))
        (recur))

                                        ;(.removeChild ui-stage (:sprite title-text))
      )))

;; (def lobster-big (font/make-tiled-font "Lobster" 400 40))

;; (def title-text (font/font-make-batch lobster-big "Alien Forest Explorer" ))



(defn main []
  (log "main!!" (:stage world) title-text)
  ;; (.addChild (:stage world) (:sprite title-text))
  ;; (doto (:sprite title-text)
  ;;   (sprite/set-pos! 0 0))
)
