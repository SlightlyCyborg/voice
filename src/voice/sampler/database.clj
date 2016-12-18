(ns voice.sampler.database
  (:use korma.db
        korma.core))

(def db-pass (clojure.string/trim (slurp "secrets/dbpass.txt")))

(defdb db
  (postgres {:db "voice"
             :user "slightlycyborg"
             :password db-pass
             :host "127.0.0.1"
             :port 5432}))


(defentity users)
(defentity models)
(defentity samples)
(defentity credits)


