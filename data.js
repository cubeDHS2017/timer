
let request = indexedDB.open("myDatabase", 1);


request.onupgradeneeded = function(event) {
  let db = event.target.result;
  let objectStore = db.createObjectStore("myObjectStore", { keyPath: "id" });
  objectStore.createIndex("nameIndex", "name", { unique: false });
};

request.onsuccess = function(event) {
  let db = event.target.result;
  console.log("nice")
  // Database opened successfully
};

request.onerror = function(event) {
  // Error occurred while opening the database
};



let objectStore = transaction.objectStore("myObjectStore");

let transaction = db.transaction("myObjectStore", "readwrite");

let data = { id: 1, name: "John Doe", age: 25 };

