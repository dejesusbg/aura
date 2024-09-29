import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { daysToFrequencies, frequenciesToDays } from "lib/parseFrequency";

import Button from "components/button";
import InputField from "components/inputField";
import Header from "components/header";
import Footer from "components/footer";
import "styles/edit.css";

const weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

function Form({ createHabit, updateHabit, getHabit }) {
  const navigate = useNavigate();

  const [habitData, setHabitData] = useState({
    name: "",
    description: "",
    points: 0,
    frequency: [],
  });

  const params = useParams();
  const habitId = params.id;

  if (!habitId) navigate("/");

  useEffect(() => {
    if (habitId !== "new") {
      const fetchHabit = async () => {
        const habit = await getHabit(habitId);

        if (habit) {
          const frequency = frequenciesToDays(habit.frequency);
          setHabitData({ ...habit, frequency });
        }
      };

      fetchHabit();
    }
  }, [getHabit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, description } = habitData;
    const points = parseInt(habitData.points);
    const frequency = daysToFrequencies(e.target.frequency);

    if (habitId === "new") {
      await createHabit(name, description, points, frequency);
    } else {
      await updateHabit(habitId, { name, description, points, frequency });
    }

    navigate("/");
  };

  const handleChange = (e) => {
    const { id, value, tagName } = e.target;

    let newValue = value;
    if (tagName === "SELECT") {
      newValue = Array.from(e.target.selectedOptions, (option) => option.value);
    }

    setHabitData({ ...habitData, [id]: newValue });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField id="name" defaultValue={habitData.name} onChange={handleChange} required={true} />
      <InputField id="points" defaultValue={habitData.points} type="number" onChange={handleChange} required={true} />

      <InputField
        id="description"
        defaultValue={habitData.description}
        type="textarea"
        options={{ rows: 1 }}
        onChange={handleChange}
      />

      <div id="weekly-days">
        <InputField
          id="frequency"
          defaultValue={habitData.frequency}
          type="select"
          label="select days to repeat (optional)"
          values={weekdays}
          options={{ multiple: true, size: 7 }}
          onChange={handleChange}
        />
      </div>

      <div className="au-form-button">
        <Button className="text" type="submit" text="save habit" />
      </div>
    </form>
  );
}

export default function Edit({ controllers }) {
  return (
    <>
      <Header />
      <main>
        <Form {...controllers} />
      </main>
      <Footer />
    </>
  );
}
