import React, { useEffect, useState } from "react";
import parseFrequency from "../../lib/parseFrequency";
import Card from "./Card";

export default function Container({ getAllHabits, updateStreak, updateBalance }) {
  const [cards, setCards] = useState([]);
  const [habits, setHabits] = useState([]);

  const fetchData = async () => {
    const fetchedData = await getAllHabits();
    setHabits(fetchedData);
  };

  const removeCard = (habit_id, points) => {
    updateStreak(habit_id).then(() => {
      const card = document.getElementById(habit_id);

      if (card) {
        card.classList.add("au-card-remove");
        updateBalance(points);

        setTimeout(() => {
          fetchData();
        }, 1000);
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, [getAllHabits]);

  useEffect(() => {
    const filteredCards = habits
      .filter(parseFrequency)
      .map((item) => <Card key={item.habit_id} data={item} removeCard={removeCard} />);

    setCards(filteredCards);
  }, [habits]);

  const dateOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  const date = new Intl.DateTimeFormat("en-UK", dateOptions).format(new Date());

  return (
    <main>
      <div id="container">
        <h4>{date}</h4>
        {cards}
      </div>
    </main>
  );
}
