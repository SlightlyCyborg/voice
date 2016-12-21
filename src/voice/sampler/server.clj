(ns voice.sampler.server
  (:use org.httpkit.server
        [compojure.handler :only [site]]
        [korma.core :only [select where]])
  (:require [compojure.core :refer :all]
            [korma.core :as korma]
            [compojure.route :as route]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.middleware.session :refer [wrap-session]]
            [ring.middleware.content-type :refer [wrap-content-type]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.keyword-params :refer [wrap-keyword-params]]
            [ring.util.response :as res-util]
            [voice.sampler.templates.dashboard :as dashboard-page]
            [voice.sampler.templates.login :as login-page]
            [voice.sampler.templates.payment :as payment-page]
            [voice.sampler.templates.sampler :as sampler-page]
            [voice.sampler.templates.register :as register-page]
            [voice.sampler.templates.test-model :as test-model-page]
            [voice.sampler.script :as script]
            [voice.sampler.database :as db]))

(defn auth-failed [req]
  {:status 401}
  {:body "Authentication Error"})

(defn authenticate [handler]
  (fn [req]
    (if (-> req (get :session) (get :user-id nil))
      (handler req)
      (auth-failed req))))

(defn dashboard [req]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (dashboard-page/render req {:samples-completed 2 :samples-total 10})})


(defn sampler [req]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (sampler-page/render req {:points-complete 0 :points-total 20})})

(defn login-get [req]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (login-page/render req)
   :session {:user-id nil}})

(defn login-post [{session :session params :params}]
  (if-let [user-id (db/authenticated? (params :username) (params :password))]
    (-> (res-util/redirect "/")
        (assoc :session (assoc session :user-id user-id)))))

(defn logout [req]
  (->
   (res-util/redirect "/login")
   (assoc :session
          (assoc
           (req :session)
           :user-id
           nil))))

(defn register-get [req]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (register-page/render req)})

(defn register-post [{params :params}]
  (if (< 0
         (count
          (select db/users (where (or
                                   {:username (params :username)}
                                   {:email (params :email)})))))
    ;;FAIL
    {:status 200
     :headers {"Content-TYpe" "text/html"}
     :body "<h1>Username or Email taken</h1><a href=\"register\">Register Again</a>"}

    ;;SUCCESS
    (db/create-user (params :username)
                    (params :password)
                    (params :email))))

(defn payment [req]
 {:status 200
   :headers {"Content-Type" "text/html"}
   :body (payment-page/render req)})

(defn test-model [req]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (test-model-page/render req)})

(defroutes all-routes
  (GET "/" [] (authenticate dashboard))
  (GET "/sampler" [] (authenticate sampler))
  (GET "/login" [] login-get)
  (POST "/login" [] login-post)
  (GET "/logout" [] logout)
  (GET "/register" [] register-get)
  (POST "/register" [] register-post)
  (GET "/payment" [] (authenticate payment))
  (GET "/test-model" [] (authenticate test-model))
  (GET "/sample-script" [] script/http-get)
  (route/not-found {:status 401}))

(def app
  (-> (site #'all-routes)
      (wrap-resource "public")
      (wrap-keyword-params)
      (wrap-params)
      (wrap-session)))

(defonce server (atom nil))

(defn stop-server []
  (when-not (nil? @server)
    (@server :timeout 100)
    (reset! server nil)))

(defn -main [& args]
  (reset! server (run-server app {:port 6969})))









