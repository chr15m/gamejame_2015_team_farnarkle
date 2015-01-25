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

;; WET as shit https://en.wikipedia.org/wiki/Don%27t_repeat_yourself#DRY_vs_WET_solutions
(defn  polar-object-coords
  [obj-pos]
  (let [
        [player-x player-y] @farn.core/last-player-position

        [rhx rhy] @farn.core/last-player-rh

        ;; absolute tree location
        [ox oy] obj-pos

        ;; vector from player to tree
        p->t [(- ox player-x) (- oy player-y)]
        [p->t-x p->t-y] p->t

        ;; rotate this p->t
        [rx ry] [
                 (+ (* rhx p->t-y) (* rhy p->t-x))
                 (- (* rhx p->t-x) (* rhy p->t-y))
                 ]

        ;; now add to the the player loc
        fx (+ rx player-x)
        fy (+ (/ ry farn.core/isometric-factor) player-y)
        ]
    [fx fy])
    )

;; a star that bounces away from you
(defn make [stage tex shadowtex x y]
  (let [star (sprite/make-sprite tex)
        shadow (sprite/make-sprite shadowtex)
        theta (* (rand) 2 Math/PI)
        exit-speed 3
        direction [
             (* exit-speed (Math/cos theta))
             (* exit-speed (Math/sin theta))
             ]
        [dx dy] direction]
    (sprite/set-pos! star x y)
    (sprite/set-pos! shadow x y)
    (sprite/set-scale! star 0.7)
    (go
      (.addChild stage shadow)
      (.addChild stage star)
      (loop [frame 1
             star-x x
             star-y y
             ]
        (<! (events/next-frame))
        (let [zpos (Math/abs (* 0.3
                              (* (- 400 frame)
                                 (Math/sin (/ frame 10))
                                 )

                              ))]
          (let [[spx spy] (polar-object-coords [star-x star-y])]
            (sprite/set-pos! star spx spy)
            (sprite/set-pos! shadow spx spy))
          (sprite/set-pivot! star 0 (+ 5 zpos))
          (when (< frame 400)
            (recur (inc frame) (+ star-x dx) (+ star-y dy)))))
      (.removeChild stage shadow)
      (.removeChild stage star))))
