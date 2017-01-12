(ns voice.database-test
  (:require [clojure.test :refer :all]
            [voice.core :refer :all]
            [voice.sampler.database :as db])
  (:use korma.db
        korma.core))


(deftest fs-blob-read-and-write
  (testing "Reading from a blob using fs")
  (let [blob (byte-array (map byte "foobarbaz"))
        username "demo-user"
        sample-id 1
        blob-index 2]
    ;;config to use fs
    (db/set-blob-storage-type :fs)
    ;;save blob
    (db/save-blob blob username sample-id blob-index)
    ;;get blob and see if it is the right blob
    (is (java.util.Arrays/equals blob (db/get-blob username sample-id blob-index :fs)))
    ;;get database object that represents the blob location
    (let [db-blob-entry (select db/blobs
                                (where {:username username
                                        :sample_set sample-id
                                        :blob_id blob-index}))]
      (is (= 1 (count db-blob-entry)))
       (delete db/blobs (where {:id [in (map #(get % :id) db-blob-entry)]})))))




(run-tests)















