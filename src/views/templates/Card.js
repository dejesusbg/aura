import parseFrequency from "../../lib/parseFrequency";

import { createElement, createFragment } from "../Render";
import Button from "./Button";

/** @jsx createElement */
/** @jsxFrag createFragment */

function CardDrag() {
  return <div class="au-drag-card"></div>;
}

function Card(props) {
  const dragElement = <CardDrag />;

  if (props) {
    const { habit_id, name, description, points, frequency, streak, type } = props.data;

    if (!parseFrequency(props.data)) return "";

    const handleEdit = () => (window.location.href = `/edit?id=${habit_id}`);

    const cardElement = (
      <div id={habit_id} class="au-card">
        {dragElement}
        <div class="au-main-card" onClick={handleEdit}>
          <span class="au-text-m">{name}</span>
          {description && <span class="au-text-xs">{description}</span>}
        </div>
      </div>
    );

    $(cardElement).draggable({
      handle: dragElement,
      containment: "window",
      opacity: 0.8,
      create: (ev, ui) => {
        localStorage.getItem(habit_id) && $(cardElement).css(JSON.parse(localStorage.getItem(habit_id)));
      },

      drag: (ev, ui) => {
        localStorage.setItem(habit_id, JSON.stringify(ui.position));
      },

      stop: (ev, ui) => {
        $(".ui-droppable").removeClass("au-drop-header");
      },
    });

    return cardElement;
  }
}

export default Card;
