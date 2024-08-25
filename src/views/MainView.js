import { createElement, createFragment } from "./Render";

import HabitController from "../controllers/mdbHabit";
import HabitCompletionController from "../controllers/mdbHabitCompletion";
import RewardController from "../controllers/mdbReward";
import RedemptionController from "../controllers/mdbRedemption";

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
  }

  renderHeader() {
    const addCompletion = (...args) => {
      HabitCompletionController.createCompletion(this.db, ...args);
    };

    const appHeader = <Header data={this.data} addCompletion={addCompletion} />;
    return appHeader;
  }

  renderSimpleHeader() {
    const name = this.path.replace("/", "");

    const appSimpleHeader = <SimpleHeader name={name} />;
    return appSimpleHeader;
  }

  renderContainer() {
    const isDefault = this.path == "/";

    const data = isDefault ? this.data.habits : this.data.rewards;

    const appContainer = <Container data={data} />;
    return appContainer;
  }

  renderFooter() {
    const isDefault = this.path == "/";

    const addCard = (...args) => {
      isDefault ? HabitController.createHabit(this.db, ...args) : RewardController.createReward(this.db, ...args);
    };

    const appFooter = <Footer container={this.container} addCard={addCard} />;
    return appFooter;
  }

  renderEdit() {
    const appEdit = <Edit />;
    return appEdit;
  }

  renderSettings() {}
  renderHistory() {}
  renderHome() {}

  render(db) {
    const location = window.location.pathname;

    let thisView = [];

    switch (location) {
      case "/":
      case "/rewards":
        this.header = this.renderHeader();
        this.container = this.renderContainer();

        thisView.push(this.header, this.container);
        break;

      case "/edit":
        this.header = this.renderSimpleHeader();
        this.edit = this.renderEdit();

        thisView.push(this.header, this.edit);
        break;

      case "/settings":
        this.header = this.renderSimpleHeader();
        this.settings = this.renderSettings();

        thisView.push(this.header, this.settings);
        break;

      case "/history":
        this.header = this.renderSimpleHeader();
        this.history = this.renderHistory();

        thisView.push(this.header, this.history);
        break;

      case "/home":
        this.header = this.renderSimpleHeader();
        this.home = this.renderHome();

        thisView.push(this.header, this.home);
        break;
    }

    this.footer = this.renderFooter();
    thisView.push(this.footer);

    const body = $("body");
    body.prepend(...thisView);
  }
}

export default MainView;
