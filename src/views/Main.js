import React, { useEffect, useState } from "react";
import parseFrequency from "lib/parseFrequency";

import HabitCard from "components/habitCard";
import Header from "components/header";
import Footer from "components/footer";

function Container({ getAllHabits, updateStreak, updateBalance }) {
  const [habits, setHabits] = useState([]);

  const fetchHabits = async () => {
    const fetchedHabits = await getAllHabits();
    setHabits(fetchedHabits);
  };

  const handleRemoveCard = async (habitId, points) => {
    await updateStreak(habitId);
    updateBalance(points);

    const card = document.getElementById(habitId);
    if (card) {
      card.classList.add("au-card-remove");
      setTimeout(fetchHabits, 1000);
    }
  };

  useEffect(() => {
    fetchHabits();
  }, [getAllHabits]);

  const filteredHabits = habits.filter(parseFrequency);
  const cards = filteredHabits.map((habit) => (
    <HabitCard key={habit.habitId} data={habit} onRemove={handleRemoveCard} />
  ));

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

export default function Main({ controllers }) {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      const fetchedData = await controllers.getAllHabits();
      const totalPoints = fetchedData.reduce((sum, habit) => sum + habit.points * habit.streak, 0);
      setBalance(totalPoints);
    };

    fetchBalance();
  }, [controllers]);

  controllers.updateBalance = (increment) => setBalance((prev) => prev + increment);

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
