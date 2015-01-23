(ns farn.gfx
  (:require [dommy.core :as dommy :refer-macros [sel1]]
            [cljs.core.async :refer [put! chan <! >! alts! timeout]]
            [farn.events :as events]
            [farn.utils :refer [log]])
  (:require-macros [cljs.core.async.macros :refer [go]])
)


(defn init
  "Initialise the canvas element. Pass in optional keys

  :background    background colour (default 0x000000)
  :expand        if true makes the canvas take the entire window
  :engine        can be :webgl :canvas or :auto (default :auto)

  and either:

  :canvas        a DOM element to use as the canvas

  or:

  :x             x position for the new canvas
  :y             y position for the new canvas
  :width         width of new canvas
  :height        height of new canvas
  "
  [& {:keys [background expand x y width height canvas engine]
      :or {expand false
           x 0
           y 0
           width 800
           height 600
           engine :auto}}]
  (let [stage (js/PIXI.Stage. (or background 0x000000))
        fswidth (.-innerWidth js/window)
        fsheight (.-innerHeight js/window)

        ;; arguments for renderer
        wid (if expand fswidth width)
        hig (if expand fsheight height)
        opts #js {"view" canvas
                   "transparent" false
                   "antialias" true
                   }
        ;; make the renderer
        rend (case engine
               :webgl (js/PIXI.WebGLRenderer. wid hig opts)
               :canvas (js/PIXI.CanvasRenderer. wid hig opts)
               :auto (js/PIXI.autoDetectRenderer. wid hig opts)
               (js/PIXI.autoDetectRenderer. wid hig opts))

        generated-canvas (.-view rend)
        world (js/PIXI.DisplayObjectContainer.)
        ui (js/PIXI.DisplayObjectContainer.)]

    (when-not canvas
      ;; custom canvas was generated
      (do
        (dommy/set-style! generated-canvas
                          :top (if expand 0 x)
                          :left (if expand 0 y)
                          :position "absolute")
        (dommy/append! (sel1 :body) generated-canvas)))

    ;; our centered world is added to the default stage
    (.addChild stage world)

    ;; then the UI container is added
    (.addChild stage ui)

    ;; start with world centered
    (set! (.-position.x world) (/ fswidth 2))
    (set! (.-position.y world) (/ fsheight 2))

    ;; center ui
    (set! (.-position.x ui) (/ fswidth 2))
    (set! (.-position.y ui) (/ fsheight 2))

    ;; if we are fullscreen, on resize we must resize our canvas
    ;; and recenter our world
    (let [c (events/new-resize-chan)]
      (go (while true
            (let [[width height] (<! c)]
              (log width height)

              ;; resize the canvas
              (.resize rend width height)

              ;; recenter our world
              (set! (.-position.x world) (/ width 2))
              (set! (.-position.y world) (/ height 2))

              ;; recenter the ui
              (set! (.-position.x ui) (/ width 2))
              (set! (.-position.y ui) (/ height 2))

              ;; always render after resize
              (.render rend stage)))))



    ;; do our first render
    (.render rend stage)

    ;; return the canvas, stage and renderer
    {:stage stage
     :renderer rend
     :canvas (or canvas generated-canvas)
     :world world
     :ui ui
     }))


(defn progress-texture
  "Draws an empty box that can serve as a default progress bar for preloading images"
  [fraction {:keys [empty-colour full-colour
                    border-colour border-width draw-border
                    width height
                    highlight highlight-offset highlight-width
                    lowlight lowlight-offset lowlight-width]
             :or {empty-colour 0x000000
                  full-colour 0x808080
                  border-colour 0xffffff
                  border-width 2
                  draw-border false
                  width 600
                  height 40
                  highlight-offset 0
                  highlight-width 1
                  lowlight-offset 0
                  lowlight-width 1
                  }
             :as options}]
  (let [box (js/PIXI.Graphics.)]
    (doto box
      (.beginFill empty-colour)
      (.lineStyle 0 border-colour)
      (.drawRect 0 0 width height)
      (.lineStyle 0 border-colour)
      (.beginFill full-colour)
      (.drawRect border-width border-width (* (if (< fraction 1) fraction 1) (- width border-width border-width)) (- height border-width border-width ))
      .endFill)

    (let [bw (* (if (< fraction 1) fraction 1) width)
          x1 (+ border-width highlight-offset)
          x2 (- bw highlight-offset)
          y1 (+ border-width lowlight-offset)
          y2 (- height border-width lowlight-offset)]
      (when (> bw 0)
        (when highlight
          (doto box
              (.lineStyle highlight-width highlight)
              (.moveTo x1 y2)
              (.lineTo x1 y1)
              (.lineTo x2 y1)))
        (when lowlight
          (doto box
            (.lineStyle lowlight-width lowlight)
            (.moveTo x1 y2)
            (.lineTo x2 y2)
            (.lineTo x2 y1)))))

    (when draw-border
      (doto box
        (.lineStyle border-width border-colour)
        (.drawRect 0 0 width height)))

    (.generateTexture box false)))

(defn make-point
  "Make a PIXI Point from x and y"
  [x y]
  (js/PIXI.Point. x y))

(defn make-sprite
  "construct a sprite by its texture. optionally pass in other things"
  [texture & {:keys [x y xhandle yhandle]
              :or {x 0 y 0 xhandle 0.5 yhandle 0.5}}]
  (let [s (js/PIXI.Sprite. texture)]
    (set! (.-anchor s) (make-point xhandle yhandle))
    (set! (.-x s) x)
    (set! (.-y s) y)
    s))

(defn add-prog-bar [stage options]
  (let [s (make-sprite (progress-texture 0 options))]
    (set! (.-alpha s) 0)
    (.addChild stage s)
    s))


(defn load-urls
  "loads each url in the passed in list as an image. Updates the progress
as it goes with
  a percentage and a thumbnail. Once complete, displays all the images
fullsize."
  [urls progress-bar & options]
  (let [options (into {} options)]
    (let [finished (chan)                         ;; make our channel to
          num-urls (count urls)                   ;; how many urls
          images (doall                           ;; start loading all the urls
                  (map (fn [src]
                         (let [i (js/Image.)]
                           (set! (.-onload i) #(put! finished i))
                           (set! (.-onerror i) #(put! finished i))
                           (set! (.-onabort i) #(js/alert "abort"))
                           (set! (.-src i) src)
                           i))
                       urls))
          ]
      (go
        (loop [i 1]
          (let [img (<! finished)]     ;; a new image has finished loading
            (when (:debug-delay options)
              (<! (timeout (* (:debug-delay options) 1000)))) ;; artificial random delay (up to 1 ec)

            ;; update progress bar and add image
            (.setTexture progress-bar
                         (progress-texture (/ i num-urls) options))

            ;; more images?
            (when (< i num-urls)
              (recur (inc i)))))))))



(defn fadeout [spr & {:keys [duration start end]
                      :or {duration 1 start nil end 0}}]
  (let [start (if (nil? start) (.-alpha spr) start)
        ticks (* 60 duration)]
    (go
      (loop [i ticks]
        (<! (events/next-frame))
        (set! (.-alpha spr) (+ end (* (- start end) (/ i ticks))))
        (when (pos? i) (recur (dec i)))))))

(defn fadein [spr & {:keys [duration start end]
                      :or {duration 1 start 0 end 1}}]
  (let [ticks (* 60 duration)]
    (go
      (loop [i ticks]
        (<! (events/next-frame))
        (set! (.-alpha spr) (+ start (* (- end start) (/ (- ticks i) ticks))))
        (when (pos? i) (recur (dec i)))))))

(defn sub-texture [texture [x y] [w h]]
  (js/PIXI.Texture. texture (js/PIXI.Rectangle. x y w h))
)
