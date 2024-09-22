import React from "react";
import Button from "./Button";

export default function Card({ data }) {
  const { id, name, description } = data;

  const handleEdit = () => {
    window.location.href = `/edit?id=${id}`;
  };

  return (
    <div id={id} className="au-card">
      <div className="au-main-card" onClick={handleEdit} role="button">
        <span className="au-text-m">{name}</span>
        {description && <span className="au-text-xs">{description}</span>}
      </div>
      <Button className="icon" text="done" />
    </div>
  );
}
