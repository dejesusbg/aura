import MainModel from "../models/MainModel";
import MainView from "../views/MainView";

class MainController {
  constructor(db) {
    this.db = db;
    this.model = new MainModel();
    this.view = new MainView(this.model.getData(db), () => this.model.getData(db));
  }

  init() {
    this.view.render();
  }
}

export default MainController;
