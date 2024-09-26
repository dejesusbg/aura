import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./templates/Main";
import EditLayout from "./templates/Edit";
import HistoryLayout from "./templates/History";
import SettingsLayout from "./templates/Settings";
import HomeLayout from "./templates/Home";

class MainView {
  constructor(data) {
    this.data = data;
    this.root = null;
  }

  render() {
    this.setTheme();
    const app = document.createElement("div");
    app.id = "app";

    const existingApp = document.getElementById("app");
    if (existingApp) {
      existingApp.replaceWith(app);
    } else {
      document.body.prepend(app);
    }

    this.root = createRoot(app);
    this.root.render(
      <StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout controllers={this.data.controllers} />} />
            <Route path="/edit/:id" element={<EditLayout controllers={this.data.controllers} />} />
            <Route path="/history" element={<HistoryLayout controllers={this.data.controllers} />} />
            <Route path="/settings" element={<SettingsLayout controllers={this.data.controllers} />} />
            <Route path="/home" element={<HomeLayout />} />
            <Route path="*" element={<>404 not found</>} />
          </Routes>
        </Router>
      </StrictMode>
    );
  }

  setTheme() {
    const theme = localStorage.getItem("theme") || this.getPreferredTheme();
    document.body.className = theme;
    localStorage.setItem("theme", theme);
    colorScheme("#ff8d02", "#537f56");
  }

  getPreferredTheme() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
}

export default MainView;
