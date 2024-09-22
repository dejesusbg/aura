import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import HabitController from "../controllers/mdbHabit";
import CompletionController from "../controllers/mdbCompletion";

import Header from "./templates/Header";
import Container from "./templates/Container";
import Footer from "./templates/Footer";
import Edit from "./templates/Edit";
import History from "./templates/History";

class MainView {
  constructor(db, data) {
    this.db = db;
    this.data = data;
    this.path = window.location.pathname;
  }

  render() {
    this.setTheme();

    const views = this.getViews();

    const app = document.createElement("div");
    app.id = "app";

    document.body.prepend(app);

    const root = createRoot(app);
    root.render(<StrictMode>{views}</StrictMode>);
  }

  setTheme() {
    colorScheme("#ffb938", "#537f56");
    toggleDarkMode();
  }

  getViews() {
    const controllers = {
      createHabit: HabitController.createHabit.bind(null, this.db),
      updateHabit: HabitController.updateHabit.bind(null, this.db),
      getHabit: HabitController.getHabit.bind(null, this.db),
      createCompletion: CompletionController.createCompletion.bind(null, this.db),
    };

    const viewMap = {
      "/": (
        <>
          <Header completions={this.data.completions} />
          <Container habits={this.data.habits} {...controllers} />
          <Footer />
        </>
      ),

      "/edit": (
        <>
          <Header />
          <Edit {...controllers} />
          <Footer />
        </>
      ),

      "/history": (
        <>
          <Header />
          <History completions={this.data.completions} habits={this.data.habits} />
          <Footer />
        </>
      ),

      default: (
        <>
          <Header />
          <Footer />
        </>
      ),
    };

    return viewMap[this.path] || viewMap.default;
  }
}

export default MainView;
