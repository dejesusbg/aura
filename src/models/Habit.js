class Habit {
  constructor(habit_id, name, description, frequency, points) {
    this.habit_id = habit_id;
    this.name = name;
    this.description = description;
    this.frequency = frequency;
    this.points = points;
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  static async save(db, habit) {
    const transaction = db.transaction("habits", "readwrite");
    const store = transaction.objectStore("habits");

    return new Promise((resolve, reject) => {
      const request = store.put(habit);
      request.onsuccess = () => resolve(habit);
      request.onerror = (e) => reject(e);
    });
  }

  static async getById(db, habit_id) {
    const transaction = db.transaction("habits", "readonly");
    const store = transaction.objectStore("habits");

    return new Promise((resolve, reject) => {
      const request = store.get(habit_id);
      request.onsuccess = () => resolve(request.result);
      request.onerror = (e) => reject(e);
    });
  }

  static async delete(db, habit_id) {
    const transaction = db.transaction("habits", "readwrite");
    const store = transaction.objectStore("habits");

    return new Promise((resolve, reject) => {
      const request = store.delete(habit_id);
      request.onsuccess = () => resolve(true);
      request.onerror = (e) => reject(e);
    });
  }

  static async getAll(db) {
    const transaction = db.transaction("habits", "readonly");
    const store = transaction.objectStore("habits");
    
    return new Promise((resolve, reject) => {
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = (e) => reject(e);
    });
  }
}

export default Habit;
