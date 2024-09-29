import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

<<<<<<< HEAD
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
    
=======
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

>>>>>>> da1584fcb4bbcf0f174eff5143ff8f9cc567ef26
    this.root = createRoot(app);
    this.root.render(
      <StrictMode>
        <Router>
          <Routes>
<<<<<<< HEAD
            <Route path="/" element={<Main controllers={this.controllers} />} />
            <Route path="/edit/:id" element={<Edit controllers={this.controllers} />} />
            <Route path="/history" element={<History controllers={this.controllers} />} />
            <Route path="/settings" element={<Settings controllers={this.controllers} />} />
=======
            <Route path="/" element={<Main controllers={this.data.controllers} />} />
            <Route path="/edit/:id" element={<Edit controllers={this.data.controllers} />} />
            <Route path="/history" element={<History controllers={this.data.controllers} />} />
            <Route path="/settings" element={<Settings controllers={this.data.controllers} />} />
>>>>>>> da1584fcb4bbcf0f174eff5143ff8f9cc567ef26
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<>404 not found</>} />
          </Routes>
        </Router>
      </StrictMode>
    );
  }
<<<<<<< HEAD
=======

  setTheme() {
    Theme.set("#ff8d02", "#537f56");
  }
>>>>>>> da1584fcb4bbcf0f174eff5143ff8f9cc567ef26
}

export default App;
