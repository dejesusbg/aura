import { createElement, createFragment } from "../Render";

/** @jsx createElement */
/** @jsxFrag createFragment */

function Button(props) {
  if (props) {
    const buttonClass = "au-button-" + props.type,
      textClass = props.type == "icon" ? "material-symbols-rounded" : "au-text-button";

    return (
      <button class={buttonClass} type="button" onClick={props.onClick}>
        <span class={textClass}>{props.text}</span>
      </button>
    );
  }
}

export default Button;
