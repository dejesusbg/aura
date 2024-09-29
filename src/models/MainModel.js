class MainModel {
  constructor() {
    if (!MainModel.instance) {
      this.dbPromise = this.initDB();
      MainModel.instance = this;
    }
    return MainModel.instance;
  }

  async initDB() {
    const request = indexedDB.open("AuraDB", 1);

    return new Promise((resolve, reject) => {
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
          db.createObjectStore("habits", { keyPath: "habitId" });
        }
      };
    });
  }

  getDBInstance() {
    return this.dbPromise;
  }
}

const instance = new MainModel();
export default instance;
