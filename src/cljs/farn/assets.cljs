(ns farn.assets)

(defn to-keys [which]
  (vec (map (fn [s] (keyword (nth (.split (.replace s ".png" "") "/") 2))) which)))

(defn make-range [prefix r]
  (vec (map (fn [i] (keyword (str prefix i))) (range 1 (+ r 1)))))

(defn floor-sprites []
    (to-keys (filter (fn [a] (not (= -1 (.indexOf a "-floor-")))) farn.assets/=assets=)))

(def =assets-sprites-static= 
  [
  "img/sprites/static-bush-1.png"
  "img/sprites/static-cactus-1.png"
  "img/sprites/static-cactus-2.png"
  "img/sprites/static-cactus-3.png"
  "img/sprites/static-floor-path-big.png"
  "img/sprites/static-floor-path-medium.png"
  "img/sprites/static-floor-path-small.png"
  "img/sprites/static-floor-sand-big.png"
  "img/sprites/static-floor-sand-medium.png"
  "img/sprites/static-floor-sand-small.png"
  "img/sprites/static-floor-water-big.png"
  "img/sprites/static-floor-water-medium.png"
  "img/sprites/static-floor-water-small.png"
  "img/sprites/static-flower-1.png"
  "img/sprites/static-flower-2.png"
  "img/sprites/static-flower-3.png"
  "img/sprites/static-flower-4.png"
  "img/sprites/static-flower-5.png"
  "img/sprites/static-lump-1.png"
  "img/sprites/static-lump-2.png"
  "img/sprites/static-lump-3.png"
  "img/sprites/static-rock-1.png"
  "img/sprites/static-schroom-1.png"
  "img/sprites/static-schroom-2.png"
  "img/sprites/static-schroom-3.png"
  "img/sprites/static-giant-schroom-1.png"
  "img/sprites/static-giant-schroom-2.png"
  "img/sprites/static-giant-shrub-1.png"
  "img/sprites/static-tree-10.png"
  "img/sprites/static-tree-11.png"
  "img/sprites/static-tree-12.png"
  "img/sprites/static-tree-13.png"
  "img/sprites/static-tree-14.png"
  "img/sprites/static-tree-15.png"
  "img/sprites/static-tree-16.png"
  "img/sprites/static-tree-17.png"
  "img/sprites/static-tree-18.png"
  "img/sprites/static-tree-19.png"
  "img/sprites/static-tree-1.png"
  "img/sprites/static-tree-20.png"
  "img/sprites/static-tree-2.png"
  "img/sprites/static-tree-3.png"
  "img/sprites/static-tree-4.png"
  "img/sprites/static-tree-5.png"
  "img/sprites/static-tree-6.png"
  "img/sprites/static-tree-7.png"
  "img/sprites/static-tree-8.png"
  "img/sprites/static-tree-9.png"
  "img/sprites/static-tuft-1.png"
  "img/sprites/static-tuft-2.png"
  "img/sprites/static-tuft-3.png"
])

(def =assets-sprites-bits= 
  [
  "img/sprites/shadow-1.png"
   ]
  )

(def =assets-sprites-components= 
  [
  "img/sprites/component-tree-shrub-brown-1.png"
  "img/sprites/component-tree-shrub-brown-2.png"
  "img/sprites/component-tree-shrub-brown-3.png"
  "img/sprites/component-tree-shrub-brown-4.png"
  "img/sprites/component-tree-shrub-dark-1.png"
  "img/sprites/component-tree-shrub-dark-2.png"
  "img/sprites/component-tree-shrub-dark-3.png"
  "img/sprites/component-tree-shrub-dark-4.png"
  "img/sprites/component-tree-shrub-light-1.png"
  "img/sprites/component-tree-shrub-light-2.png"
  "img/sprites/component-tree-shrub-light-3.png"
  "img/sprites/component-tree-shrub-light-4.png"
  "img/sprites/component-tree-trunk-1.png"
  "img/sprites/component-tree-trunk-2.png"   
   ]
  )
(def =assets-sprites-baby= 
  [
  "img/sprites/baby-float-1.png"
   ]
  )

(def =assets-sprites-pink=
  [
  "img/sprites/pink-crouch-4.png"
  "img/sprites/pink-stand-1.png"
  "img/sprites/pink-stand-2.png"
  "img/sprites/pink-stand-3.png"
  "img/sprites/pink-stand-4.png"
  "img/sprites/pink-walk-1.png"
  "img/sprites/pink-walk-2.png"
   ]
  )

(def =assets-sprites-brown=
     [
  "img/sprites/brown-stand-1.png"
  "img/sprites/brown-stand-2.png"
  "img/sprites/brown-talk-blink-1.png"
  "img/sprites/brown-talk-blink-2.png"
  "img/sprites/brown-talk-blink-3.png"
  "img/sprites/brown-talk-noblink-1.png"
  "img/sprites/brown-talk-noblink-2.png"
  "img/sprites/brown-talk-noblink-3.png"
      ]
     )
(def =assets-fonts= ["http://fonts.gstatic.com/s/lobster/v12/cycBf3mfbGkh66G5NhszPQ.woff2"
   "http://fonts.gstatic.com/s/varelaround/v6/APH4jr0uSos5wiut5cpjrugdm0LZdjqr5-oayXSOefg.woff2"
   "http://fonts.gstatic.com/s/shadowsintolighttwo/v4/gDxHeefcXIo-lOuZFCn2xbIfIbZrEcH2WW587lG91II.woff2"])

(def =assets=
  (vec (concat =assets-fonts= =assets-sprites-static= =assets-sprites-baby= =assets-sprites-pink= =assets-sprites-brown= =assets-sprites-bits= )))
