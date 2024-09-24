import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function History({ getAllHabits }) {
  const [cards, setCards] = useState([]);

  const habits = getAllHabits();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await habits;
      const cards = fetchedData.map((item) => <Card key={item.habit_id} data={item} showButton={false} />);
      setCards(cards);
    };

    fetchData();
  }, [habits]);

  return (
    <main>
      <div id="container">{cards}</div>
    </main>
  );
}
