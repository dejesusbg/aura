class Redemption {
  constructor(redemption_id, reward_id, date = new Date(), points_spent) {
    this.redemption_id = redemption_id;
    this.reward_id = reward_id;
    this.date = date;
    this.points_spent = points_spent;
  }

  static save(db, redemption) {
    const transaction = db.transaction(["redemptions"], "readwrite");
    const store = transaction.objectStore("redemptions");

    return new Promise((resolve, reject) => {
      const request = store.put(redemption);
      request.onsuccess = () => resolve(redemption);
      request.onerror = (e) => reject(e);
    });
  }

  static getById(db, redemption_id) {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(["redemptions"], "readonly");
      const store = transaction.objectStore("redemptions");
      const request = store.get(redemption_id);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject("Redemption not found");
    });
  }

  static delete(db, redemption_id) {
    const transaction = db.transaction(["redemptions"], "readwrite");
    const store = transaction.objectStore("redemptions");

    return new Promise((resolve, reject) => {
      const request = store.delete(redemption_id);
      request.onsuccess = () => resolve(true);
      request.onerror = () => reject("Could not delete redemption");
    });
  }

  static getAll(db) {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(["redemptions"], "readonly");
      const store = transaction.objectStore("redemptions");
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject("Could not fetch redemptions");
    });
  }
}

export default Redemption;
