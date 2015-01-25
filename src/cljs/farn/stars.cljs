(ns farn.stars
  (:require
    [farn.gfx :as gfx]
    [farn.font :as font]
    [farn.sprite :as sprite]
    [farn.events :as events]
    [cljs.core.async :refer [put! chan <! >! alts! timeout close! go]]
    )
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  )
