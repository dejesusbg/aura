class HabitCompletion {
  constructor(completion_id, habit_id, date = new Date(), points_earned) {
    this.completion_id = completion_id;
    this.habit_id = habit_id;
    this.date = date;
    this.points_earned = points_earned;
  }

  static save(db, completion) {
    const transaction = db.transaction(["completions"], "readwrite");
    const store = transaction.objectStore("completions");

    return new Promise((resolve, reject) => {
      const request = store.put(completion);
      request.onsuccess = () => resolve(completion);
      request.onerror = (e) => reject(e);
    });
  }

  static getById(db, completion_id) {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(["completions"], "readonly");
      const store = transaction.objectStore("completions");
      const request = store.get(completion_id);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject("Completion not found");
    });
  }

  static delete(db, completion_id) {
    const transaction = db.transaction(["completions"], "readwrite");
    const store = transaction.objectStore("completions");
    
    return new Promise((resolve, reject) => {
      const request = store.delete(completion_id);
      request.onsuccess = () => resolve(true);
      request.onerror = () => reject("Could not delete completion");
    });
  }

  static getAll(db) {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(["completions"], "readonly");
      const store = transaction.objectStore("completions");
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject("Could not fetch completions");
    });
  }
}

export default HabitCompletion;
