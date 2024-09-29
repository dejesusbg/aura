import React, { useEffect, useState } from "react";

import Card from "components/card";
import Header from "components/header";
import Footer from "components/footer";

function Container({ getAllHabits }) {
  const [cards, setCards] = useState([]);

  const habits = getAllHabits();

  useEffect(() => {

    const fetchData = async () => {
      const fetchedData = await habits;
      const cards = fetchedData.map((item) => <Card key={item.habit_id} data={item} />);
      setCards(cards);
    };

    fetchData();
  }, [habits]);

  return <div id="container">{cards}</div>;
}

export default function History({ controllers }) {
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
