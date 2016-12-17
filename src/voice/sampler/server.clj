(ns voice.sampler.server
  (:use org.httpkit.server
        [compojure.handler :only [site]])
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.middleware.content-type :refer [wrap-content-type]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.keyword-params :refer [wrap-keyword-params]]
            [voice.sampler.templates.dashboard :as dashboard-page]
            [voice.sampler.templates.login :as login-page]
            [voice.sampler.templates.payment :as payment-page]
            [voice.sampler.templates.sampler :as sampler-page]
            [voice.sampler.templates.register :as register-page]
            [voice.sampler.templates.test-model :as test-model-page]
            [voice.sampler.script :as script]))


(defn dashboard [req]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (dashboard-page/render req {:samples-completed 2 :samples-total 10})})


(defn sampler [req]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (sampler-page/render req {:points-complete 0 :points-total 20})})

(defn login [req]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (login-page/render req)})

(defn register [req]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (register-page/render req)})

(defn payment [req]
 {:status 200
   :headers {"Content-Type" "text/html"}
   :body (payment-page/render req)})

(defn test-model [req]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (test-model-page/render req)})

(defroutes all-routes
  (GET "/" [] dashboard)
  (GET "/sampler" [] sampler)
  (GET "/login" [] login)
  (GET "/register" [] register)
  (GET "/payment" [] payment)
  (GET "/test-model" [] test-model)
  (GET "/sample-script" [] script/http-get)
  (route/not-found {:status 401}))

(def app
  (-> (site #'all-routes)
      (wrap-resource "public")
      (wrap-keyword-params)
      (wrap-params)))

(defonce server (atom nil))

(defn stop-server []
  (when-not (nil? @server)
    (@server :timeout 100)
    (reset! server nil)))

(defn -main [& args]
  (reset! server (run-server app {:port 6969})))









