(ns voice.sampler.database
  (:require [aws.sdk.s3 :as s3]
            [clojure.edn :as edn])
  (:import [org.apache.log4j.Logger]
           java.util.logging.LogManager)
  (:use korma.db
        korma.core))

;;Import all config
(def config (edn/read-string (slurp "resources/config.edn")))

;;;BEGIN PostgreSQL
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

;;;END   PostgreSQL


;;;; S3 STUFF

(def s3-creds {:access-key (clojure.string/trim (slurp "secrets/s3-access-key.txt"))
               :secret-key (clojure.string/trim (slurp "secrets/s3-secret-key.txt"))})

(def s3-bucket "eden-cybernetics-voice")

;;BEGIN Config
(def fs-blob-path (get-in config [:blob :fs-blob-path]))
(def blob-storage-types (get-in config [:blob :available-storage-types]))
(def blob-storage (get-in config [:blob :use-storage-type]))
;;END   Config

(defn set-blob-storage-type [t]
  (if (contains? blob-storage-types t)
    (def blob-storage t)
    (throw (Exception. "Not a valid storage type"))))

(defn write-to-file [path content]
  (with-open [w (java.io.FileOutputStream. path)]
    (.write w content)))

(defn read-file [file-path]
  (with-open [reader (clojure.java.io/input-stream file-path)]
    (let [length (.length (clojure.java.io/file file-path))
          buffer (byte-array length)]
      (.read reader buffer 0 length)
      buffer)))

(defn gen-blob-key [username sample-id blob-index]
  (str username "-" sample-id "-" blob-index))

(defn save-blob [blob username sample-id blob-index]
  (let [key (gen-blob-key username sample-id blob-index)]
    (case blob-storage
      :fs (write-to-file (str fs-blob-path key) blob)
      :s3 (s3/put-object s3-creds s3-bucket key blob))))

(defn get-blob [username sample-id blob-index]
  (let [key (gen-blob-key username sample-id blob-index)]
    (case blob-storage
      :fs (read-file (str fs-blob-path key))
      :s3 (s3/get-object s3-creds s3-bucket key))))




















