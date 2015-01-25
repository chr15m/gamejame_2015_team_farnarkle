(ns farn.map (
              :require [cljs.core.async :refer [put! chan <! >! alts! timeout close!]]
              ))

; seed is 23 here
; TODO: check store for seed and generate a new one if none
(defn perlin-map-generator []
  (let [c (chan)]
    (js/map 23 1000 1000 (fn [t] (put! c t)))
    c))
