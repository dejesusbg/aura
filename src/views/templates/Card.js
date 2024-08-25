import { createElement, createFragment } from "../Render";
import Button from "./Button";

/** @jsx createElement */
/** @jsxFrag createFragment */

function CardDrag() {
  return <div class="au-drag-card"></div>;
}

function Card(props) {
  if (props) {
    const isHabit = props.data.habit_id ? true : false;

    const id = (props.data.habit_id ?? props.data.reward_id) + "";
    const idName = isHabit ? "h" : "r";

    const dragElement = <CardDrag />;

    const cardElement = (
      <div id={id} class="au-card">
        {dragElement}
        <div class="au-main-card" onClick={() => (window.location.href = "/edit?q=" + id + idName)}>
          <span class="au-text-m">{props.data.name}</span>
          <span class="au-text-xs">{props.data.description}</span>
        </div>
      </div>
    );

    $(cardElement).draggable({
      handle: dragElement,
      containment: "window",
      opacity: 0.8,
      stop: (ev, ui) => {
        $(".ui-droppable").removeClass("au-drop-header");
      },
    });

    return cardElement;
  }
}

export default Card;
