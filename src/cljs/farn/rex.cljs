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

(def rex-opener "What do we do now?")

(def rex-chatter [
                  "Theres an alien baby lost in these woods..."
                  "I can hear that baby crying!"
                  "Why don't you go find the source of that sobbing?"
                  "These human brains are puny... but tasty!"
                  "Scenario brothers galaxy woohoo!"
                  "Nee mee nee mee nee."
                  "If a tree falls in a forest, and no alien is there to hear it..."
                  "What was I when I wasn't what I am? What will I be when I'm not?"
                  "What is the sound of one baby crying? hint, hint..."
                  "These plants are very perculiar. Our leader will be pleased!"
                  "Try and make first contact with the mushrooms"
                  "The hive mind is calling me home."
                  "Once the baby is recovered, this planet can be purged"
                  ])

;; [minval maxval chatty-probability choices]
(def rex-getting-close
  [
   [8000 20000 0.5 ["Cold..."
                 "You're so far off the mark"
                 "Maybe go for a bound and see what you can find"
                 "The baby is out there somewhere"
                 ]]

   [5000 8000 0.4 ["Now you are warming up!"
               "Warmer..."
               "I think you are on the right track"]]

   [2000 5000 0.3 ["I can sense an alien presence near where you are!"
               "I think the baby is closer"
               "OK you're getting hot now"
               "Hotter..."]]

   [1000 2000 0.2 ["Hot!"
               "I sense you are very close!"
               "...almost there..."
               "I think you're really close now!"
               ]]

   [100 1000 0.1 ["There it is!"
              "Quick! Save the baby!"
              "You've found it!"]]

   [-1 100 0 ["Well done! You found our missing infant!"
           "I think someone's getting a medal!"
           "Just wait until The Great Blurg hears of your success!"
           "It's times like these I'm proud to call you my friend!"
           "Is there anything else to do on this planet... while were here?"
           "The great council has sent their warmest thanks!"]]])

(defn square [n]
  (* n n))

(defn get-rex-phrase []
  (let [[bx by] @farn.core/baby-position
        [x y] @farn.core/last-player-position
        distance (Math/sqrt
                  (+
                   (square (- bx x))
                   (square (- by y))))]
    (loop [[[bot top chat-prob choices] & t] rex-getting-close]
      (if (< bot distance top)
        ;; work out what to say
        (if (< (rand) chat-prob)
          (rand-nth rex-chatter)
          (rand-nth choices))

        ;;recurse if theres more left
        (if-not (empty? t)
          (recur t)

          ;; rex wants to help but you are completely outside all ranges
          "How on earth did you get out there?"
          )))))

(defn say [rex rex-talks ui-stage phrase]
  ;; test scroll out
  (go
    (go
      (let [
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
        ))

)

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
          (.setTexture rex (rand-nth rex-does-nothing))
          (<! (timeout 2000))
          (<! (say rex rex-talks ui-stage rex-opener))
          (while true
            (.setTexture rex (rand-nth rex-does-nothing))
            (<! (timeout 5000))

            (<! (say rex rex-talks ui-stage (get-rex-phrase)))))))
