(ns voice.sampler.database
  (:require [aws.sdk.s3 :as s3]
            [clojure.edn :as edn]
            [clojure.data.codec.base64 :as b64])
  (:import [org.apache.log4j.Logger]
           java.util.logging.LogManager)
  (:use korma.db
        korma.core))


;;Utilities
(defn parse-number
  "Reads a number from a string. Returns nil if not a number."
  [s]
  (if (integer? s)
    s
    (if (re-find #"^-?\d+\.?\d*$" s)
      (read-string s))))

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
(defentity blobs)


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

;;;;END   PostgreSQL


;;;;BEGIN S3 STUFF

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
  (try
    (with-open [w (java.io.FileOutputStream. path)]
      (.write w content))
    true
    (catch Exception e false)))

(defn write-to-s3 [key content]
  (try
    (s3/put-object s3-creds s3-bucket key content)
    (catch Exception e false)))

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
    (if (= true
           (case blob-storage
             ;; Insert into datastore
             :fs (write-to-file (str fs-blob-path key) blob)
             :s3 (write-to-s3 key blob)))
      ;; If successfully saved, this could mean 1 of 2 things. It was a new save or a file was overwritten
      ;; If there isn't already a blob entry for this key, then insert it
      (if (= 0 (count (select blobs (where {:data_store_key key})))) 
        (do
          (insert blobs
                  (values
                   {:sample_set      (parse-number sample-id)
                    :blob_id         (parse-number blob-index)
                    :username        username
                    :data_store_key  key
                    :data_store_type (name blob-storage)}))
          ;; Finally if all goes well with the insert, return true
          true)
        ;; Or if there was no insert then also return true
        true)
      ;; The only time we want to return false is if the blob storage fails 
      false)))

(defn get-all-sample-set-blobs-metadata [username sample-set-id]
  (select blobs
   (where
    {:username    username
     :sample_set  (parse-number sample-set-id)})))

(defn get-all-sample-set-blobs [username sample-set-id]
  (map
   (fn [b]
     (assoc b :blob
             (get-blob
              (b :username)
              (b :sample_set)
              (b :blob_id)
              (keyword (b :data_store_type)))))
   (get-all-sample-set-blobs-metadata username sample-set-id)))

(defn get-blob [username sample-id blob-index data-store-type]
  (let [key (gen-blob-key username sample-id blob-index)]
    (case data-store-type 
      :fs (read-file (str fs-blob-path key))
      :s3 (s3/get-object s3-creds s3-bucket key))))


