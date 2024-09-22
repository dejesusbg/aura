import React from "react";

export default function Button({ type = "button", className, href, handleClick, text }) {
  const btnClass = `au-button-${className}`;
  const txtClass = className === "icon" ? "material-symbols-rounded" : "au-text-button";

  handleClick = href ? () => (window.location.href = href) : handleClick;

  return (
    <button className={btnClass} type={type} onClick={handleClick}>
      <span className={txtClass}>{text}</span>
    </button>
  );
}
