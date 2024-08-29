import { createElement, createFragment } from "../Render";

/** @jsx createElement */
/** @jsxFrag createFragment */

function Button(props) {
  if (props) {
    var { type, className, text, onClick, href } = props;
    type = type || "button";

    const btnClass = `au-button-${className}`;
    const txtClass = className === "icon" ? "material-symbols-rounded" : "au-text-button";

    href && (onClick = () => (window.location.href = href));

    return (
      <button class={btnClass} type={type} onClick={onClick}>
        <span class={txtClass}>{text}</span>
      </button>
    );
  }
}

export default Button;
