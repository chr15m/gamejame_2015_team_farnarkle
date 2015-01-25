(ns farn.rex
  (:require
    [farn.gfx :as gfx]
    [farn.font :as font]
    [farn.sprite :as sprite]
    [farn.events :as events]
    [cljs.core.async :refer [put! chan <! >! alts! timeout close! go]]
    )
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  )

;; rex stuff
(def word-exit-speed 2)
(def word-entry-speed 1.6)
(def rex-phrases ["What do we do now?"
                  "I'm sick of asking!"
                  "Who knows!"
                  "Maybe theres an alien baby lost in these woods..."
                  "I can hear that baby crying!"
                  "Why don't you go find the source of that sobbing?"
                  "Is there anything else to do on this planet?"
                  "These human brains are puny... but tasty!"
                  "Scenario brothers galaxy woohoo!"
                  "Nee mee nee mee nee."
                  "If a tree falls in a forest, and no alien is there to hear it..."
                  "What was I when I wasn't what I am? What will I be when I'm not?"
                  "What is the sound of one baby crying? hint, hint..."
                  "These plants are very perculiar. Our leader will be pleased!"
                  "Try and make contact with the flowers"
                  "Ramma Lamma Ding Dong!"
                  "The hive mind is calling me home."
                  "Once the baby is recovered, this planet can be purged"

                  ])

(defn launch-rex [ui-stage]
  (let [rex-talks
            (doall (for [tex-name [:brown-talk-noblink-1
                                   :brown-talk-noblink-2
                                   :brown-talk-noblink-3
                                   ]]
                     (gfx/get-texture tex-name)
                     ))
            rex-does-nothing
            (doall (for [tex-name [:brown-stand-1
                                   ;:brown-stand-2
                                   ;:brown-stand-3
                                   ]]
                     (gfx/get-texture tex-name)
                     ))
            rex (sprite/make-sprite (rand-nth rex-does-nothing))
            ]
        (sprite/set-anchor! rex 0.5 0)
        (.addChild ui-stage rex)

        ;; rex lives in the corner
        (go
          (let [rc (events/new-resize-chan)]
            (while true
              (let [w (.-innerWidth js/window)
                    h (.-innerHeight js/window)
                    hw (/ w 2)
                    hh (/ h 2)]
                (sprite/set-pos! rex (- hw 100) (- hh 80))
                (<! rc)))))

        ;; rex has a life of his own
        (go
          (while true
            (.setTexture rex (rand-nth rex-does-nothing))
            (<! (timeout 10000))

            ;; text scroll out
            (go
              (let [
                    phrases rex-phrases
                    phrase (rand-nth phrases)
                    phrase-spr (font/make-text "400 24pt Varela Round"
                                     phrase
                                     :weight 400 :fill "#ffffff"
                                     ;:dropShadow true
                                     ;:dropShadowColor "#000000"
                                     :stroke "#000000"
                                     :strokeThickness 1
                                     )
                    w (.-innerWidth js/window)
                    h (.-innerHeight js/window)
                    hw (/ w 2)
                    hh (/ h 2)
                    ]
                (sprite/set-pos! phrase-spr 0 10000)
                (.addChild ui-stage phrase-spr)
                (loop [i 0]
                  (<! (events/next-frame))
                  (sprite/set-pos! phrase-spr (js/Math.pow (- 50 i) word-entry-speed) (- hh 30))
                  (when (< i 50)
                    (recur (inc i))
                    )
                  )
                ;; pause
                (<! (timeout 3000))

                ;; exit quickly
                (loop [i 0]
                  (<! (events/next-frame))
                  (sprite/set-pos! phrase-spr (- (js/Math.pow i word-exit-speed)) (- hh 30))
                  (when (< i 50)
                    (recur (inc i))
                    )
                  )
                (.removeChild ui-stage phrase-spr)))

            ;; mouth animation
            (loop [i 50]
              (<! (timeout 60))
              (.setTexture rex (rand-nth rex-talks))
              (when (pos? i)
                (recur (dec i)))
              )))

        )
  )
