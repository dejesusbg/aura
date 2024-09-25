import React, { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

import Header from "./templates/Header";
import Container from "./templates/Container";
import Edit from "./templates/Edit";
import History from "./templates/History";
import Settings from "./templates/Settings";
import Home from "./templates/Home";
import Footer from "./templates/Footer";

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
    const theme =
      localStorage.getItem("theme") ||
      (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    document.body.className = theme;
    localStorage.setItem("theme", theme);

    colorScheme("#ff8d02", "#537f56");
  }

  getViews() {
    const controllers = this.data.controllers;
    const path = this.path;

    if (path === "/") {
      return <MainLayout controllers={controllers} />;
    }

    const viewMap = {
      "/edit": <Edit {...controllers} />,
      "/history": <History {...controllers} />,
      "/settings": <Settings {...controllers} />,
      "/home": <Home />,
      default: <></>,
    };

    return (
      <>
        <Header />
        <main>{viewMap[this.path] || viewMap.default}</main>
        <Footer />
      </>
    );
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
      <main>
        <Container {...controllers} />
      </main>
      <Footer />
    </>
  );
}

export default MainView;
