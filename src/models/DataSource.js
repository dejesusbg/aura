class DataSource {
  constructor() {
    if (!DataSource.instance) {
      this.db = null;
      this.dbPromise = this.openDB();
      DataSource.instance = this;
    }

    return DataSource.instance;
  }

  openDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("AuraDB", 1);

      request.onerror = (event) => {
        console.error("Database error:", event.target.error);
        reject(event.target.error);
      };

      request.onsuccess = (event) => {
        this.db = event.target.result;
        console.log("Database opened successfully");
        resolve(this.db);
      };

      request.onupgradeneeded = (event) => {
        const db = event.target.result;

        if (!db.objectStoreNames.contains("habits")) {
          db.createObjectStore("habits", { keyPath: "habit_id" });
        }
      };
    });
  }

  getDBInstance() {
    return this.dbPromise;
  }
}

const instance = new DataSource();

export default instance;
