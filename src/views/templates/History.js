import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function History({ habits, completions }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const createCards = (fetchedCompletions, fetchedHabits) => {
      return fetchedCompletions.map((completion) => {
        const habit = fetchedHabits.find((habit) => habit.habit_id === completion.habit_id);
        return <Card key={completion.completion_id} data={{ ...completion, ...habit }} showButton={false} />;
      });
    };

    const fetchData = async () => {
      const [fetchedCompletions, fetchedHabits] = await Promise.all([completions, habits]);
      setCards(createCards(fetchedCompletions, fetchedHabits));
    };

    fetchData();
  }, [habits, completions]);

  return (
    <main>
      <div id="container">{cards}</div>
    </main>
  );
}
