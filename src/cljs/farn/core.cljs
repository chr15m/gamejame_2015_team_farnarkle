(ns farn.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [farn.gfx :as gfx]
            [dommy.core :as dommy :refer-macros [sel1]]
))

(def grass-green 0x357564)

(defonce app-state (atom nil))

(def world (gfx/init :background grass-green
                     :expand true
                     :engine :canvas
                     :canvas (sel1 :#game)))
