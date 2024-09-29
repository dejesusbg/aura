import React from "react";
import Theme from "lib/themeManager";

<<<<<<<< HEAD:src/Settings.js
import Header from "components/header";
import Footer from "components/footer";
========
import Header from "../components/Header";
import Footer from "../components/Footer";
import Theme from "../lib/themeManager";
>>>>>>>> da1584fcb4bbcf0f174eff5143ff8f9cc567ef26:src/pages/Settings.js

function SingleSetting({ icon, name, description, onClick }) {
  return (
    <div className="au-card" onClick={onClick}>
      <span className="material-symbols-rounded">{icon}</span>
      <div className="au-main-card">
        <span className="au-text-m">{name}</span>
        {description && <span className="au-text-p">{description}</span>}
      </div>
    </div>
  );
}

function Container({ getAllHabits, deleteHabit }) {
  const handleClickTheme = Theme.toggle;

  const handleClickDelete = async () => {
    const habits = await getAllHabits();
    habits.map((habit) => deleteHabit(habit.habit_id));
  };

  return (
    <div id="settings">
      <SingleSetting
        icon="dark_mode"
        name="change theme"
        description="turn on or off dark mode"
        onClick={handleClickTheme}
      />
      <SingleSetting
        icon="delete"
        name="delete all habits"
        description="this action cannot be undone"
        onClick={handleClickDelete}
      />
    </div>
  );
}

export default function Settings({ controllers }) {
  return (
    <>
      <Header />
      <main>
        <Container {...controllers} />
      </main>
      <Footer />
    </>
  );
}
