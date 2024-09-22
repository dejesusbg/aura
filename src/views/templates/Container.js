import React, { useEffect, useState } from "react";
import parseFrequency from "../../lib/parseFrequency";
import Card from "./Card";

export default function Container({ habits }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const updateCards = async () => {
      const fetchedData = await habits;
      const filteredCards = fetchedData.filter(parseFrequency).map((item) => <Card key={item.habit_id} data={item} />);
      setCards(filteredCards);
    };

    updateCards();
  }, [habits]);

  return <main>{cards}</main>;
}
