(ns farn.query-string (:require 
                        [goog.Uri :as uri]
                        [clojure.string :refer [blank? join split]]
                        ))

; http://crossclj.info/ns/cljs-http/0.1.24/cljs-http.client.cljs.html#_parse-url

(defn parse-query-params
  "Parse `s` as query params and return a hash map."
  [s]
  (if-not (blank? s)
    (reduce
     #(let [[k v] (split %2 #"=")]
        (assoc %1
          (keyword k) v))
     {} (split (str s) #"&"))))
 
(defn parse-url
  "Parse `url` into a hash map."
  [url]
  (if-not (blank? url)
    (let [uri (uri/parse url)
          query-data (.getQueryData uri)]
      {:scheme (keyword (.getScheme uri))
       :server-name (.getDomain uri)
       ; :server-port (if-pos (.getPort uri))
       :uri (.getPath uri)
       :query-string (if-not (.isEmpty query-data)
                       (str query-data))
       :query-params (if-not (.isEmpty query-data)
                       (parse-query-params (str query-data)))})))

