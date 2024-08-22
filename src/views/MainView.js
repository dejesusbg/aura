import { createElement, createFragment } from "./Render";

import Header from "./templates/Header";
import Container from "./templates/Container";
import Footer from "./templates/Footer";

/** @jsx createElement */
/** @jsxFrag createFragment */

class MainView {
  constructor(data) {
    this.data = data;
  }

  renderHeader() {
    const appHeader = <Header balance={this.data.balance} />;
    return appHeader;
  }

  renderContainer() {
    const appContainer = <Container data={this.data.notes} />;
    return appContainer;
  }

  renderFooter() {
    const appFooter = <Footer container={this.container} />;
    return appFooter;
  }

  render() {
    const body = $("body");

    this.header = this.renderHeader();
    this.container = this.renderContainer();
    this.footer = this.renderFooter();

    body.prepend(this.header, this.container, this.footer);
  }
}

export default MainView;
