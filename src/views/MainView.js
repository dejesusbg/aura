import { createElement, createFragment } from "./Render";

import HabitController from "../controllers/mdbHabit";
import CompletionController from "../controllers/mdbCompletion";

import Header from "./templates/Header";
import Container from "./templates/Container";
import Footer from "./templates/Footer";
import Edit from "./templates/Edit";
import SimpleHeader from "./templates/SimpleHeader";

/** @jsx createElement */
/** @jsxFrag createFragment */

class MainView {
  constructor(db, data) {
    this.db = db;
    this.data = data;
    this.path = window.location.pathname;
    this.view = [];
    this.default = this.path == "/";
  }

  renderHeader() {
    const removeCard = (...args) => CompletionController.createCompletion(this.db, ...args);

    const appHeader = <Header data={this.data} removeCard={removeCard} />;
    this.view.push(appHeader);
  }

  renderSimpleHeader() {
    const appHeader = <SimpleHeader />;
    this.view.push(appHeader);
  }

  renderContainer() {
    const appContainer = <Container data={this.data.habits} />;
    this.view.push(appContainer);
  }

  renderFooter() {
    const appFooter = <Footer />;
    this.view.push(appFooter);
  }

  renderEdit() {
    const addCard = (...args) => HabitController.createHabit(this.db, ...args);
    const getCard = (...args) => HabitController.getHabit(this.db, ...args);
    const setCard = (...args) => HabitController.updateHabit(this.db, ...args);

    const appEdit = <Edit addCard={addCard} setCard={setCard} getCard={getCard} />;
    this.view.push(appEdit);
  }

  renderSettings() {}
  renderHistory() {}
  renderHome() {}

  render() {
    switch (this.path) {
      case "/":
        this.renderHeader();
        this.renderContainer();
        break;

      case "/edit":
        this.renderSimpleHeader();
        this.renderEdit();
        break;

      case "/settings":
        this.renderSimpleHeader();
        this.renderSettings();
        break;

      case "/history":
        this.renderSimpleHeader();
        this.renderHistory();
        break;

      case "/home":
        this.renderSimpleHeader();
        this.renderHome();
        break;
    }

    this.renderFooter();

    const body = $("body");
    body.prepend(...this.view);
  }
}

export default MainView;
