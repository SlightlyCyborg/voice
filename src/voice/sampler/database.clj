(ns voice.sampler.database
  (:use korma.db
        korma.core))

(def db-pass (clojure.string/trim (slurp "secrets/dbpass.txt")))

(def db-user (clojure.string/trim (slurp "secrets/dbuser.txt")))

(defdb db
  (postgres {:db "voice"
             :user db-user
             :password db-pass
             :host "127.0.0.1"
             :port 5432}))

(defentity users)
(defentity models)
(defentity samples)
(defentity credits)


(select users
        (where {:id 0}))


(def salt "lets-hack")

(defn salt-n-hash [pass]
  (-> pass
      (str salt)
      (org.apache.commons.codec.digest.DigestUtils/sha256Hex))) 

(defn create-user [username password email]
  (insert users
          (values {:username username
                   :hashed_pass  (salt-n-hash password)
                   :email email})))


(defn authenticated? [username password]
  (select users
          (where {:username username
                   :hashed_pass (salt-n-hash password)})))


















