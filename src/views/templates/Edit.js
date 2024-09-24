import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import InputField from "./InputField";

const weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

function getFrequencies(days) {
  return weekdays.map((day, index) => (days.includes(day) ? index : null)).join("");
}

export default function Edit({ createHabit, updateHabit, getHabit }) {
  const [card, setCard] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (id) {
      setCard({ id });
    } else {
      window.location.href = "/";
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const days = Array.from(e.target.days.selectedOptions).map((option) => option.value);
    const name = e.target.name.value;
    const description = e.target.description.value;
    const frequency = getFrequencies(days);
    const points = parseInt(e.target.points.value);

    if (card.id === "new") {
      createHabit(name, description, points, frequency);
    } else {
      updateHabit(card.id, { name, description, points, frequency });
    }

    window.location.href = "/";
  };

  if (!card) return null;

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <InputField id="name" label="" required={true} />
        <InputField id="points" label="" type="number" required={true} />
        <InputField id="description" label="" type="textarea" options={{ rows: 1 }} />

        <div id="weekly-days">
          <InputField
            id="days"
            type="select"
            label="select days to repeat:"
            values={weekdays}
            options={{ multiple: true, size: 7 }}
          />
        </div>

        <div className="au-form-button">
          <Button className="text" type="submit" text="save habit" />
        </div>
      </form>
    </main>
  );
}
