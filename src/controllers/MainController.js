import MainModel from "../models/MainModel.js";
import MainView from "../views/MainView.js";

class MainController {
  constructor() {
    this.model = new MainModel();
    this.view = new MainView(this.model.getData());
  }

  init() {
    this.view.render();
  }
}

export default MainController;
