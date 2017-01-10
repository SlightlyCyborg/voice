(ns voice.sampler.database
  ;(:require [aws.sdk.s3 :as s3])
  (:use korma.db
        korma.core))

(def db-pass (clojure.string/trim (slurp "secrets/dbpass.txt")))
(def db-user (clojure.string/trim (slurp "secrets/dbuser.txt")))

;;(s3/put-object s3-creds s3-bucket "123key" "foobar")

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



;;;; S3 STUFF

(def s3-creds {:access-key (clojure.string/trim (slurp "secrets/s3-access-key.txt"))
               :secret-key (clojure.string/trim (slurp "secrets/s3-secret-key.txt"))})

(def s3-bucket "eden-cybernetics-voice")


(defn gen-blob-key [username sample-id blob-index]
  (str username "-" sample-id "-" blob-index))

(defn save-blob [blob username sample-id blob-index]
  (let [key (gen-blob-key username sample-id blob-index)]
    ;(s3/put-object s3-creds s3-bucket key blob)
    ))


(defn get-blob [username sample-id blob-index]
  ;(s3/get-object s3-creds s3-bucket (gen-blob-key username sample-id blob-index))
  )




















