import React from "react";
import Button from "./Button";

export default function Card({ data, removeCard, showButton = true }) {
  const { habit_id, name, description, points, streak } = data;

  const handleEdit = () => (window.location.href = `/edit?id=${habit_id}`);
  const handleClick = () => removeCard(habit_id, points);

  const pointsText = `${points > 0 ? "+" : ""}${points}`;

  return (
    <div id={habit_id} className="au-card">
      <div className="au-main-card">
        <span className="au-text-m">{name}</span>
        {description && <span className="au-text-p">{description}</span>}
        <span className="au-text-xs">{streak}</span>
      </div>
      {showButton && <Button text={pointsText} onClick={handleClick} />}
      <Button className="icon" text="edit" onClick={handleEdit} />
    </div>
  );
}
