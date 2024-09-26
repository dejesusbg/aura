import HabitController from "../controllers/mdbHabit";

class MainModel {
  constructor() {
    this.data = null;
  }

  getData(db) {
    const methods = ["createHabit", "getHabit", "updateStreak", "updateHabit", "deleteHabit", "getAllHabits"];

    this.data = {
      controllers: Object.fromEntries(methods.map((method) => [method, HabitController[method].bind(null, db)])),
    };

    return this.data;
  }
}

export default MainModel;
