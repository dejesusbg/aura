import HabitController from "./HabitController";
import App from "App";

class MainController {
  constructor(db) {
    const methods = ["createHabit", "getHabit", "updateStreak", "updateHabit", "deleteHabit", "getAllHabits"];

    this.controllers = Object.fromEntries(methods.map((method) => [method, HabitController[method].bind(null, db)]));
    this.view = new App(this.controllers);
  }

  init() {
    this.view.render();
  }
}

export default MainController;
