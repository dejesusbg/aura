import React, { useEffect, useState } from "react";
import parseFrequency from "../../lib/parseFrequency";

import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Container({ getAllHabits, updateStreak, updateBalance }) {
  const [habits, setHabits] = useState([]);

  const fetchHabits = async () => {
    const fetchedHabits = await getAllHabits();
    setHabits(fetchedHabits);
  };

  const removeCard = async (habit_id, points) => {
    await updateStreak(habit_id);
    updateBalance(points);

    const card = document.getElementById(habit_id);
    if (card) {
      card.classList.add("au-card-remove");
      setTimeout(fetchHabits, 1000);
    }
  };

  useEffect(() => {
    fetchHabits();
  }, [getAllHabits]);

  const cards = habits
    .filter(parseFrequency)
    .map((item) => <Card key={item.habit_id} data={item} removeCard={removeCard} />);

  const formattedDate = new Intl.DateTimeFormat("en-UK", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date());

  return (
    <div id="main">
      <h4>{formattedDate}</h4>
      {cards}
    </div>
  );
}

export default function MainLayout(props) {
  const [balance, setBalance] = useState(0);
  const controllers = props.controllers;

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
