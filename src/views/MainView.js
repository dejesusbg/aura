import { createElement, createFragment } from "./Render";

import HabitController from "../controllers/mdbHabit";
import HabitCompletionController from "../controllers/mdbHabitCompletion";
import RewardController from "../controllers/mdbReward";
import RedemptionController from "../controllers/mdbRedemption";

import Header from "./templates/Header";
import Container from "./templates/Container";
import Footer from "./templates/Footer";

/** @jsx createElement */
/** @jsxFrag createFragment */

class MainView {
  constructor(data) {
    this.data = data;
    this.balance = 750;
  }

  renderHeader() {
    const appHeader = <Header balance={this.balance} />;
    return appHeader;
  }

  renderContainer() {
    const appContainer = <Container data={this.data.habits} />;
    return appContainer;
  }

  renderFooter() {
    const appFooter = <Footer container={this.container} />;
    return appFooter;
  }

  render(db) {
    const body = $("body");

    this.header = this.renderHeader();
    this.container = this.renderContainer();
    this.footer = this.renderFooter();

    body.prepend(this.header, this.container, this.footer);
  }
}

export default MainView;
