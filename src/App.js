import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Theme from "lib/themeManager";

import Main from "views/Main";
import Edit from "views/Edit";
import History from "views/History";
import Settings from "views/Settings";
import Home from "views/Home";

class App {
  constructor(controllers) {
    this.controllers = controllers;
  }

  render() {
    Theme.set("#ff8d02", "#537f56");

    const app = document.createElement("div");
    document.body.prepend(app);
    
    this.root = createRoot(app);
    this.root.render(
      <StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<Main controllers={this.controllers} />} />
            <Route path="/edit/:id" element={<Edit controllers={this.controllers} />} />
            <Route path="/history" element={<History controllers={this.controllers} />} />
            <Route path="/settings" element={<Settings controllers={this.controllers} />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<>404 not found</>} />
          </Routes>
        </Router>
      </StrictMode>
    );
  }
}

export default App;
