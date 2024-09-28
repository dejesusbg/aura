import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Theme from "./lib/themeManager";

import Main from "./pages/Main";
import Edit from "./pages/Edit";
import History from "./pages/History";
import Settings from "./pages/Settings";
import Home from "./pages/Home";

class App {
  constructor(data) {
    this.data = data;
    this.root = null;
  }

  render() {
    this.setTheme();

    const app = document.createElement("div");
    document.body.prepend(app);

    this.root = createRoot(app);
    this.root.render(
      <StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<Main controllers={this.data.controllers} />} />
            <Route path="/edit/:id" element={<Edit controllers={this.data.controllers} />} />
            <Route path="/history" element={<History controllers={this.data.controllers} />} />
            <Route path="/settings" element={<Settings controllers={this.data.controllers} />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<>404 not found</>} />
          </Routes>
        </Router>
      </StrictMode>
    );
  }

  setTheme() {
    Theme.set("#ff8d02", "#537f56");
  }
}

export default App;
