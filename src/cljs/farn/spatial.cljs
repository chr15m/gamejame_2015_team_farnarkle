(ns farn.spatial
  (:require [dommy.core :as dommy :refer-macros [sel1]]
            [cljs.core.async :refer [put! chan <! >! alts! timeout]]
            [farn.utils :refer [log ends-with? url-keyword rand-between]])
  (:require-macros [cljs.core.async.macros :refer [go]])
)

(defn make-random-map
  "make a massive crappy map. obj-keys is a list of texture keywords.
  number is how many will be spread out across the map
  max/mins are extents
  "
  [obj-keys number minx maxx miny maxy]
  (doall (for [i (range number)]
           {:pos [(rand-between minx maxx)
                  (rand-between miny maxy)]
            :type (rand-nth obj-keys)})))

(defn hash-locations
  "return a spatially hashed tree of all the sprites in collection, based apon :pos key"
  [collection cell-size]
  (loop [output {}
         [h & t] collection]
    (let [[x y] (:pos h)
          xh (int (/ x cell-size))
          yh (int (/ y cell-size))
          key [xh yh]]
      (if (empty? t)
        output
        (if (contains? output key)
          (recur (assoc output key (conj (output key) h)) t)
          (recur (assoc output key [h]) t))
        ))))

(defn cell? [[x y] cell-size]
  [(int (/ x cell-size)) (int (/ y cell-size))]
)
