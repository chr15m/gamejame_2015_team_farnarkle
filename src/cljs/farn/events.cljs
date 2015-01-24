(ns farn.events
  (:require [cljs.core.async :refer [put! chan <! >! alts! timeout close!]])
  (:require-macros [cljs.core.async.macros :refer [go]])
)

;; global controls
(defonce ^:dynamic *debug-event-handlers* false)
(defonce ^:dynamic *devtools-passthrough* true)
(defonce ^:dynamic *target-fps* 60)
(defonce ^:dynamic *pixi-renderer* (atom nil))

;;
;; keyboard handler
;;
(def key-state (atom {}))

(defn ascii [c]
  (.charCodeAt c 0))

;; keycodes
(def key-codes
  (into
   (into {
          ;; lookup by code
          :backspace 8
          :tab 9
          :enter 13
          :shift 16
          :control 17
          :alt 18
          :pause 19
          :capslock 20
          :esc 27
          :space 32
          :pageup 33
          :pagedown 34
          :end 35
          :home 36
          :left 37
          :up 38
          :right 39
          :down 40
          :insert 45
          :delete 46
          :f1 112
          :f2 113
          :f3 114
          :f4 115
          :f5 116
          :f6 117
          :f7 118
          :f8 119
          :f9 120
          :f10 121
          :f11 122
          :f12 123
          :numlock 144
          :scrolllock 145
          :comma 188
          :. 190
          :/ 191
          :backtick 192
          :squareleft 219
          :backslash 220
          :squareright 221
          :quote 222
          }

         ;; lookup by keyword of char
         (for [c "0123456789abcdefghijklmnopqrstuvwxyz"]
           [(keyword (str c)) (- (ascii c) 32)]))

   ;; lookup by char
   (for [c "0123456789abcdefghijklmnopqrstuvwxyz"]
     [c (- (ascii c) 32)])))


(defn handle-keydown-event
  "the base event handler for key down events. Takes the keycode
  and sets that key in the key-state dictionary to true"
  [ev]
  (when *debug-event-handlers*
    (.log js/console ev))

  (swap! key-state (fn [old] (assoc old (.-keyCode ev) true)))

  ;; if debug, we should passthrough ctrl-shift keys for dev tools
  (if (and *devtools-passthrough* (.-ctrlKey ev) (.-shiftKey ev))
    ;; pass through keypress
    false

    ;; else prevent event propagation (cursor keys scroll body on mozilla)
    (.preventDefault ev)))


(defn handle-keyup-event
  "the basic event handler for key up events. Takes the keycode
  and removes it as a key from the key-state dictionary"
  [ev]
  (swap! key-state (fn [old] (dissoc old (.-keyCode ev))))

  ;; stop event propagation on mozilla
  (.preventDefault ev)

  true)


(defn install-key-handler
  "install the keyup and keydown event handlers"
  []
  (.addEventListener js/window "keydown" handle-keydown-event)
  (.addEventListener js/window "keyup" handle-keyup-event))

(defn is-pressed?
  "returns true if the key is pressently down"
  [code]
  (@key-state (key-codes code)))

;;
;; Animation handler
;;
(defn request-animation-frame
  "cross browser requestAnimationFrame callback installer"
  [callback]
  (cond
   (.-requestAnimationFrame js/window)
   (.requestAnimationFrame js/window callback)

   (.-webkitRequestAnimationFrame js/window)
   (.webkitRequestAnimationFrame js/window callback)

   (.-mozRequestAnimationFrame js/window)
   (.mozRequestAnimationFrame js/window callback)

   (.-oRequestAnimationFrame js/window)
   (.oRequestAnimationFrame js/window callback)

   (.-msRequestAnimationFrame js/window)
   (.msRequestAnimationFrame js/window callback)

   :else
   (.setTimeout js/window callback (/ 1000 *target-fps*))))


(defn next-frame
  "returns a single use channel which closes on next frame callback.
  pulling from it waits exactly one frame. eg (<! (next-frame))"
  []
  (let [c (chan)]
    (request-animation-frame #(close! c))
    c))



;;
;; Event Channels
;; --------------
;; For each type of game event you can generate a new channel that will
;; be passed a message each time that callback is fired
;;


;;
;; Resize Channel
;; --------------
;; resize channels receive [width height]
;;
(def *resize-chans* (atom #{}))

(defn new-resize-chan []
  (let [c (chan)]
    (swap! *resize-chans* conj c)
    c))

(defn del-resize-chan [c]
  (swap! *resize-chans* disj c))

(defn clear-resize-chans! []
  (swap! *resize-chans* #{}))

(defn resize-event-chan-handler [ev]
  (let [size [(.-innerWidth js/window) (.-innerHeight js/window)]]
    (doseq [c @*resize-chans*] (put! c size))))

(defn install-resize-handler
  "install the resize callback to resize the main canvas renderer"
  []
  (.addEventListener js/window "resize" resize-event-chan-handler))


;;
;; Frame Channel
;; -------------
;; frame channel receives a true every frame paint
;;
(def *frame-chans* (atom #{}))

(defn new-frame-chan []
  (let [c (chan)]
    (swap! *frame-chans* conj c)
    c))

(defn del-frame-chan! [c]
  (swap! *frame-chans* disj c))

(defn clear-frame-chans! []
  (swap! *frame-chans* #{}))

(defn frame-event-chan-handler [ev]
  (request-animation-frame frame-event-chan-handler)
  (doseq [c @*frame-chans*] (put! c true)))

(defn install-frame-handler
  "install the frame callback to send frame chan messages"
  []
  (request-animation-frame frame-event-chan-handler))


;; install all the event channel handlers
(install-key-handler)
(install-frame-handler)
(install-resize-handler)
