(ns farn.server
  (:require [clojure.java.io :as io]
            [farn.dev :refer [is-dev? inject-devmode-html browser-repl start-figwheel]]
            [compojure.core :refer [GET defroutes]]
            [compojure.route :refer [resources]]
            [compojure.handler :refer [api]]
            [net.cgrand.enlive-html :refer [deftemplate]]
            [ring.middleware.reload :as reload]
            [environ.core :refer [env]]
            [ring.adapter.jetty :refer [run-jetty]]
            [garden.core :refer [css]]))

(deftemplate page
  (io/resource "index.html") [] [:body] (if is-dev? inject-devmode-html identity))

(defroutes routes
  (resources "/")
  (resources "/react" {:root "react"})
  (GET "/*" req (page)))

(def http-handler
  (if is-dev?
    (reload/wrap-reload (api #'routes))
    (api routes)))

(defn run [& [port]]
  (defonce ^:private server
    (do
      (if is-dev? (start-figwheel))
      (let [port (Integer. (or port (env :port) 10555))]
        (print "Starting web server on port" port ".\n")
        (run-jetty http-handler {:port port
                          :join? false}))))
  server)

(defn -main [& [port]]
  (run port))

(defn dump-html []
  (println (apply str (page))))

(defn dump-css []
  (comment  (println (css [:.sprite
         {
          :position "absolute"
          :background-color "transparent"
          :background-repeat "no-repeat"
          :display "block"
          :height "64px"
          :width "64px"
          :background-position "0px 0"
          }]

        [(keyword "@font-face")
         {
          :font-family "vectorfuture"
          :src "url('/img/ui_space/Fonts/kenvector_future_thin.ttf')"
          }]

        [:body
         {
          :width "100%"
          :height "100%"
          :margin "0"
          :padding "0"
          :background-color "#000000"
          :border "none"

          ;; no scrollbars
          :overflow "hidden"}]

        [:#game-area
         {
          :position "absolute"
          :width "100%"
          :height "100%"
          :left "0"
          :top "0"}]

        [:#ui
         {
          :position "absolute"
          :left "50%"
          :top "50%"
          }]

        [:#status-bottom
         {:position "absolute"
          :width "100%"
          :height "20%"
          :font-size "24pt"
          :bottom "0"
          :opacity "0.8"
          :z-index 200}]

        [:#fps
         {:position "absolute"
          :right 0
          :top 0
          :padding-right 15
          :color "white"
          :z-index 200}]
         ))))
