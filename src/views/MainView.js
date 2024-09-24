import React, { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

import Header from "./templates/Header";
import Container from "./templates/Container";
import Footer from "./templates/Footer";
import Edit from "./templates/Edit";
import History from "./templates/History";

class MainView {
  constructor(data, getData) {
    this.data = data;
    this.getData = getData;

    this.path = window.location.pathname;
    this.root = null;
  }

  render() {
    this.setTheme();
    const views = this.getViews();

    const app = document.createElement("div");
    app.id = "app";

    if (document.getElementById("app")) {
      document.getElementById("app").replaceWith(app);
    } else {
      document.body.prepend(app);
    }

    this.root = createRoot(app);
    this.root.render(<StrictMode>{views}</StrictMode>);
  }

  setTheme() {
    colorScheme("#ff8d02", "#537f56");
    this.applyTheme();
  }

  applyTheme() {
    const theme = localStorage.getItem("theme");

    if (theme) {
      document.body.classList.add(theme);
      document.body.classList.remove(theme === "dark" ? "light" : "dark");
    } else {
      const isDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.body.classList.add(isDarkMode ? "dark" : "light");
    }

    localStorage.setItem("theme", document.body.classList[0]);
  }

  getViews() {
    const controllers = this.data.controllers;

    const viewMap = {
      "/": <MainLayout controllers={controllers} />,
      "/edit": <EditLayout controllers={controllers} />,
      "/history": <HistoryLayout controllers={controllers} />,
    };

    return viewMap[this.path] || viewMap.default;
  }
}

function MainLayout({ controllers }) {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      const fetchedData = await controllers.getAllHabits();
      const totalPoints = fetchedData.reduce((sum, habit) => sum + habit.points * habit.streak, 0);
      setBalance(totalPoints);
    };

    fetchBalance();
  }, [controllers]);

  controllers.updateBalance = (increment) => {
    setBalance((prev) => prev + increment);
  };

  return (
    <>
      <Header balance={balance} />
      <Container {...controllers} />
      <Footer />
    </>
  );
}

function EditLayout({ controllers }) {
  return (
    <>
      <Header />
      <Edit {...controllers} />
      <Footer />
    </>
  );
}

function HistoryLayout({ controllers }) {
  return (
    <>
      <Header />
      <History {...controllers} />
      <Footer />
    </>
  );
}

function SettingsLayout({ controllers }) {
  return (
    <>
      <Header />
      <Settings {...controllers} />
      <Footer />
    </>
  );
}

function HomeLayout() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default MainView;
