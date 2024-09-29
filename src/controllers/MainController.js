<<<<<<< HEAD
import HabitController from "./HabitController";
import App from "App";

class MainController {
  constructor(db) {
    const methods = ["createHabit", "getHabit", "updateStreak", "updateHabit", "deleteHabit", "getAllHabits"];

    this.controllers = Object.fromEntries(methods.map((method) => [method, HabitController[method].bind(null, db)]));
    this.view = new App(this.controllers);
=======
import MainModel from "../models/MainModel";
import App from "../App";

class MainController {
  constructor(db) {
    this.db = db;
    this.model = new MainModel();
    this.view = new App(this.model.getData(db));
>>>>>>> da1584fcb4bbcf0f174eff5143ff8f9cc567ef26
  }

  init() {
    this.view.render();
  }
}

export default MainController;
