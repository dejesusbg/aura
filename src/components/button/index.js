import React from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

export default function Button({ className = "text", type = "button", text, onClick, href }) {
  const navigate = useNavigate();

  const handleClick = href ? () => navigate(href) : onClick;

  const btnClass = `au-button-${className}`;
  const txtClass = className === "icon" ? "material-symbols-rounded" : "au-text-button";

  return (
    <button className={btnClass} type={type} onClick={handleClick}>
      <span className={txtClass}>{text}</span>
    </button>
  );
}
