(ns farn.map (
              :require [cljs.core.async :refer [put! chan <! >! alts! timeout close!]]
              ))

(defn perlin-map-generator []
  (let [c (chan)]
    (js/map 23 2000 2000 (fn [t] (put! c t)))
    c))
