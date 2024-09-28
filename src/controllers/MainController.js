import MainModel from "../models/MainModel";
import App from "../App";

class MainController {
  constructor(db) {
    this.db = db;
    this.model = new MainModel();
    this.view = new App(this.model.getData(db));
  }

  init() {
    this.view.render();
  }
}

export default MainController;
