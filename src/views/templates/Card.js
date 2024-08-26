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
    let { habit_id, reward_id, name, description } = props.data;

    const id = (habit_id ?? reward_id) + "";
    const type = habit_id ? "habit" : "reward";

    const handleEdit = () => (window.location.href = `/edit?${type}=${id}`);

    const cardElement = (
      <div id={id} class="au-card">
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
        localStorage.getItem(id) && $(cardElement).css(JSON.parse(localStorage.getItem(id)));
      },
      stop: (ev, ui) => {
        $(".ui-droppable").removeClass("au-drop-header");
        localStorage.setItem(id, JSON.stringify(ui.position));
      },
    });

    return cardElement;
  }
}

export default Card;
