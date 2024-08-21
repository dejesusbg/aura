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
    const appFooter = <Footer />;
    return appFooter;
  }

  render() {
    const body = $("body");
    body.prepend(this.renderHeader(), this.renderContainer(), this.renderFooter());
  }
}

export default MainView;
