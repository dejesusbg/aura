import React from "react";

export default function Button({ type = "button", className = "text", href, onClick, text }) {
  const btnClass = `au-button-${className}`;
  const txtClass = className === "icon" ? "material-symbols-rounded" : "au-text-button";

  onClick = href ? () => (window.location.href = href) : onClick;

  return (
    <button className={btnClass} type={type} onClick={onClick}>
      <span className={txtClass}>{text}</span>
    </button>
  );
}
