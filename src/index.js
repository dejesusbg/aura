import MainController from "./controllers/MainController";

import dataSource from "./models/DataSource";

dataSource.getDBInstance().then((db) => {
  const app = new MainController(db);
  app.init();
});
