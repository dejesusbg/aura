import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function Card({ data, removeCard }) {
  const navigate = useNavigate();

  const { habit_id, name, description, points, streak } = data;
  const handleEdit = () => navigate(`/edit/${habit_id}`);
  const handleRemove = () => removeCard(habit_id, points);
  const pointsText = `${points > 0 ? "+" : ""}${points}`;

  const shouldShowPointsButton = typeof removeCard === "function";

  return (
    <div id={habit_id} className="au-card">
      <div className="au-main-card">
        <span className="au-text-m">{name}</span>
        {description && <span className="au-text-p">{description}</span>}
        <span className="au-text-xs">{streak} completions</span>
      </div>
      {shouldShowPointsButton && <Button text={pointsText} onClick={handleRemove} />}
      <Button className="icon" text="edit" onClick={handleEdit} />
    </div>
  );
}
