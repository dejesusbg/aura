import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "components/button";
import "./habitCard.css";

export default function HabitCard({ data, onRemove }) {
  const navigate = useNavigate();

  const { habitId, name, description, points, streak } = data;
  const handleEdit = () => navigate(`/edit/${habitId}`);
  const handleRemove = () => onRemove(habitId, points);
  const pointsText = `${points > 0 ? "+" : ""}${points}`;

  const shouldShowPointsButton = typeof onRemove === "function";

  return (
    <div id={habitId} className="au-card">
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
