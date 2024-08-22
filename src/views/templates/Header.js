import { createElement, createFragment } from "../Render";

/** @jsx createElement */
/** @jsxFrag createFragment */

function DropHeader() {
  return (
    <section class="au-header-leading">
      <img src="images/logo.png" alt="logo" draggable="false"></img>
    </section>
  );
}

function Header(props) {
  if (props) {
    const balanceSign = props.balance > 0 ? "+" : "-";
    const balanceText = balanceSign + props.balance;

    const dropElement = <DropHeader />;

    $(dropElement).droppable({
      over: (e, ui) => {
        $(dropElement).addClass("au-drop-header");
      },

      out: (e, ui) => {
        $(dropElement).removeClass("au-drop-header");
      },

      drop: (e, ui) => {
        ui.draggable.remove();
        $(dropElement).removeClass("au-drop-header");
      },
    });

    return (
      <header>
        {dropElement}
        <section class="au-header-trailing">
          <span class="au-text-xxl">{balanceText}</span>
          <span class="au-text-s">points</span>
        </section>
      </header>
    );
  }
}

export default Header;
