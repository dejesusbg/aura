import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import InputField from "./InputField";

const frequencies = ["once", "daily", "weekly", "monthly"];
const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

function getFrequencies(frequency, days) {
  if (frequency === "weekly") {
    return frequency + days.map((day, index) => (days.includes(day) ? index : null)).join("");
  }
  return frequency;
}

export default function Edit({ createHabit, updateHabit, getHabit }) {
  const [card, setCard] = useState(null);
  const weeklyDaysRef = useRef();

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
    const frequency = getFrequencies(e.target.frequency.value, days);
    const points = parseInt(e.target.points.value);

    if (card.id === "new") {
      createHabit(name, description, points, frequency);
    } else {
      updateHabit(card.id, { name, description, points, frequency });
    }

    window.location.href = "/";
  };

  const handleFrequencyChange = (e) => {
    if (e.target.value === "weekly") {
      weeklyDaysRef.current.style.display = "block";
    } else {
      weeklyDaysRef.current.style.display = "none";
    }
  };

  if (!card) return null;

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <InputField id="name" required={true} />
        <InputField id="description" type="textarea" options={{ rows: 1 }} required={true} />
        <InputField id="points" type="number" required={true} />
        <InputField id="frequency" type="select" values={frequencies} onChange={handleFrequencyChange} />

        <div ref={weeklyDaysRef} style={{ display: "none" }}>
          <InputField
            id="days"
            type="select"
            label="select days:"
            values={days}
            options={{ multiple: true, size: 1 }}
          />
        </div>

        <div className="au-form-button">
          <Button className="text" type="submit" text="save habit" />
        </div>
      </form>
    </main>
  );
}
