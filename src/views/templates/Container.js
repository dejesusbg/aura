import React, { useEffect, useState } from "react";
import parseFrequency from "../../lib/parseFrequency";
import Card from "./Card";

export default function Container({ habits, createCompletion }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const updateCards = async () => {
      const fetchedData = await habits;
      const filteredCards = fetchedData.map((item) => (
        <Card key={item.habit_id} data={item} createCompletion={createCompletion} />
        // .filter(parseFrequency)
      ));
      setCards(filteredCards);
    };

    updateCards();
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
        {cards}
        {cards}
      </div>
    </main>
  );
}
