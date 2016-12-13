(ns voice.sampler.server
  (:use org.httpkit.server
        [compojure.handler :only [site]])
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.middleware.content-type :refer [wrap-content-type]]
            [voice.sampler.templates.dashboard :as dashboard-page]
            [voice.sampler.templates.login :as login-page]
            [voice.sampler.templates.payment :as payment-page]
            [voice.sampler.templates.sampler :as sampler-page]))


(defn dashboard [req]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (dashboard-page/render req {:samples-completed 2 :samples-total 10})})

(defn sampler [req]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (sampler-page/render req {:points-complete 0 :points-total 20})})

(defroutes all-routes
  (GET "/" [] dashboard)
  (GET "/sampler" [] sampler)
  (route/not-found {:status 401}))

(def app
  (-> (site #'all-routes)
      (wrap-resource "public")))

(defonce server (atom nil))

(defn stop-server []
  (when-not (nil? @server)
    (@server :timeout 100)
    (reset! server nil)))

(defn -main [& args]
  (reset! server (run-server app {:port 6969})))









