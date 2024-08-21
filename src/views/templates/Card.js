import { createElement, createFragment } from "../Render";
import Button from "./Button";

/** @jsx createElement */
/** @jsxFrag createFragment */

function CardDrag() {
  return <div class="au-drag-card"></div>;
}

function Card(props) {
  const dragElement = <CardDrag />;

  const cardElement = (
    <div class="au-card">
      {dragElement}
      <div class="au-main-card">{props.text}</div>
    </div>
  );

  $(cardElement).draggable({ handle: dragElement, containment: "html" });

  return cardElement;
}

export default Card;
