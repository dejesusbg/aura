import React from "react";
import Button from "./Button";

export default function Card({ data, createCompletion, showButton = true }) {
  const { habit_id, name, description, points } = data;

  const handleEdit = () => (window.location.href = `/edit?id=${habit_id}`);
  const handleClick = () => createCompletion(habit_id);

  const pointsText = `${points > 0 ? "+" : ""}${points}`;

  return (
    <div id={habit_id} className="au-card">
      <div className="au-main-card" onClick={handleEdit}>
        <span className="au-text-m">{name}</span>
        {description && <span className="au-text-p">{description}</span>}
      </div>
      {showButton && <Button text={pointsText} onClick={handleClick} />}
      <Button className="icon" text="edit" onClick={handleEdit} />
    </div>
  );
}
