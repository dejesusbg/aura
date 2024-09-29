import React from "react";
import Theme from "lib/themeManager";

import Header from "components/header";
import Footer from "components/footer";

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
    habits.map((habit) => deleteHabit(habit.habitId));
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
