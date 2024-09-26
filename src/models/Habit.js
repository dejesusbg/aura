class Habit {
  constructor(habit_id, name, description, points, frequency) {
    this.habit_id = habit_id;
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

  static async getById(db, habit_id) {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction("habits", "readonly");
      const store = transaction.objectStore("habits");
      const request = store.get(habit_id);

      request.onsuccess = () => resolve(request.result);
      request.onerror = (e) => reject(e);
    });
  }

  static async delete(db, habit_id) {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction("habits", "readwrite");
      const store = transaction.objectStore("habits");
      const request = store.delete(habit_id);

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
