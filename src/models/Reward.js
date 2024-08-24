class Reward {
  constructor(reward_id, name, description, points_required, created_at = new Date(), updated_at = new Date()) {
    this.reward_id = reward_id;
    this.name = name;
    this.description = description;
    this.points_required = points_required;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  static save(db, reward) {
    const transaction = db.transaction(["rewards"], "readwrite");
    const store = transaction.objectStore("rewards");

    return new Promise((resolve, reject) => {
      const request = store.put(reward);
      request.onsuccess = () => resolve(reward);
      request.onerror = (e) => reject(e);
    });
  }

  static getById(db, reward_id) {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(["rewards"], "readonly");
      const store = transaction.objectStore("rewards");
      const request = store.get(reward_id);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject("Reward not found");
    });
  }

  static delete(db, reward_id) {
    const transaction = db.transaction(["rewards"], "readwrite");
    const store = transaction.objectStore("rewards");
    
    return new Promise((resolve, reject) => {
      const request = store.delete(reward_id);
      request.onsuccess = () => resolve(true);
      request.onerror = () => reject("Could not delete reward");
    });
  }

  static getAll(db) {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(["rewards"], "readonly");
      const store = transaction.objectStore("rewards");
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject("Could not fetch rewards");
    });
  }
}

export default Reward;
