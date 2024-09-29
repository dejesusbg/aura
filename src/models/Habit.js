class Habit {
  constructor(habitId, name, description, points, frequency) {
    this.habitId = habitId;
    this.name = name;
    this.description = description;
    this.points = points;
    this.frequency = frequency;
    this.streak = 0;
    this.created_at = new Date();
    this.updated_at = new Date();
    this.type = points >= 0 ? "habit" : "reward";
  }

  static async save(db, habit) {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction("habits", "readwrite");
      const store = transaction.objectStore("habits");
      const request = store.put(habit);

      request.onsuccess = () => resolve(habit);
      request.onerror = (e) => reject(e);
    });
  }

  static async getById(db, habitId) {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction("habits", "readonly");
      const store = transaction.objectStore("habits");
      const request = store.get(habitId);

      request.onsuccess = () => resolve(request.result);
      request.onerror = (e) => reject(e);
    });
  }

  static async delete(db, habitId) {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction("habits", "readwrite");
      const store = transaction.objectStore("habits");
      const request = store.delete(habitId);

      request.onsuccess = () => resolve(true);
      request.onerror = (e) => reject(e);
    });
  }

  static async getAll(db) {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction("habits", "readonly");
      const store = transaction.objectStore("habits");
      const request = store.getAll();

      request.onsuccess = () => resolve(request.result);
      request.onerror = (e) => reject(e);
    });
  }
}

export default Habit;
