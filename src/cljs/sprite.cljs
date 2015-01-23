(ns farn.sprite
  (:require [dommy.core :as dommy :refer-macros [sel1]]
            [cljs.core.async :refer [put! chan <! >! alts! timeout]]
            [farn.events :as events]
            [farn.gfx :as gfx]
            [farn.utils :refer [log]])
  (:require-macros [cljs.core.async.macros :refer [go]])
)

(defn set-pos! [sprite x y]
  (set! (.-position.x sprite) x)
  (set! (.-position.y sprite) y))

(defn set-anchor! [sprite x y]
  (set! (.-anchor sprite) (gfx/make-point x y)))

(defn set-pivot! [sprite x y]
  (set! (.-pivot.x sprite) x)
  (set! (.-pivot.y sprite) y))

(defn set-scale! [sprite s]
  (set! (.-scale sprite) (gfx/make-point s s)))

(defn set-rotation! [sprite r]
  (set! (.-rotation sprite) r))

(defn set-alpha! [sprite a]
  (set! (.-alpha sprite) a))

(defn set-x! [sprite x]
  (set! (.-position.x sprite) x))

(defn set-y! [sprite y]
  (set! (.-position.y sprite) y))

(defn get-x [sprite]
  (.-position.x sprite))

(defn get-y [sprite]
  (.-position.y sprite))

(defn get-pos [sprite]
  (.-position sprite))


;;
;; collision detection
;;
(defn edges-from-rect
  "pass in a PIXI Rectangle, and this returns the vector
  [left right top bottom] each one being a coordinate
  value"
  [r]
  [(.-x r) (+ (.-x r) (.-width r))
   (.-y r) (+ (.-y r) (.-height r))]
)

(defn rectangles-overlap?
  "given two rectangles. Do they overlap?"
  [r1 r2]
  (let [[l1 r1 t1 b1] (edges-from-rect r1)
        [l2 r2 t2 b2] (edges-from-rect r2)]
    (cond
     (< r1 l2) false
     (> l1 r2) false
     (< b1 t2) false
     (> t1 b2) false
     :default true)))

(defn overlap?
  "do the bounding boxes of the two sprites overlap?"
  [s1 s2]
  (rectangles-overlap? (.getBounds s1) (.getBounds s2)))
