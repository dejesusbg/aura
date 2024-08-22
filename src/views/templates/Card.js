import { createElement, createFragment } from "../Render";
import Button from "./Button";

/** @jsx createElement */
/** @jsxFrag createFragment */

function CardDrag() {
  return <div class="au-drag-card"></div>;
}

function Card(props) {
  if (props) {
    const dragElement = <CardDrag />;

    const cardElement = (
      <div class="au-card">
        {dragElement}
        <div class="au-main-card">
          <span class="au-text-m">{props.data.title}</span>
          <span class="au-text-xs">{props.data.body}</span>
        </div>
      </div>
    );

    $(cardElement).draggable({ handle: dragElement, containment: "body" });

    return cardElement;
  }
}

export default Card;
