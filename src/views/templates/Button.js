import { createElement, createFragment } from "../Render";

/** @jsx createElement */
/** @jsxFrag createFragment */

function Button(props) {
  if (props) {
    var { type, text, onClick, href } = props;

    const btnClass = `au-button-${type}`;
    const txtClass = type === "icon" ? "material-symbols-rounded" : "au-text-button";

    href && (onClick = () => (window.location.href = href));

    return (
      <button class={btnClass} type="button" onClick={onClick}>
        <span class={txtClass}>{text}</span>
      </button>
    );
  }
}

export default Button;
