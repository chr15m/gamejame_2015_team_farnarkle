(ns farn.utils
  (:require [farn.events :as events]
            [cljs.core.async :refer [put! chan <! >! alts! timeout close!]]
            [dommy.core :refer-macros [sel1]]
            [clojure.browser.repl :as repl])
  (:require-macros [cljs.core.async.macros :refer [go]]))

;;
;; No host methods (static or not) can be used with partial as-is because partial only works with Clojure functions.
;; What you really want is to use clojure.contrib.import-static to easily wrap those static methods:
;;
;; - Chas Emerick
;;
(defn log
  ([a1]
   (.log js/console a1))
  ([a1 a2]
   (.log js/console a1 a2))
  ([a1 a2 a3]
   (.log js/console a1 a2 a3))
  ([a1 a2 a3 a4]
   (.log js/console a1 a2 a3 a4)))


(defn rand-between
  "return a random integer between low and high inclusive"
  [low high]
  (let [size (Math/abs (- high low))]
    (int (+ low (* size (rand))))))

(defn ends-with? [str end]
  (let [len (.-length str)
        end-len (.-length end)
        pos (.indexOf str end)]
    (= (+ pos end-len) len))
)

(defn url-keyword [url]
  (-> url
      (.split "/")
      last
      (.split ".")
      first
      keyword))
