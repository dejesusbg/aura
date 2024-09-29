import MainController from "controllers/MainController";
import MainModel from "models/MainModel";

MainModel.getDBInstance().then((db) => {
  const app = new MainController(db);
  app.init();
});
