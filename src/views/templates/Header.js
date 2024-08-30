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
  const dropElement = <DropHeader />;

  const headerElement = (
    <header>
      {dropElement}
      <section class="au-header-trailing">
        <span id="au-header-balance" class="au-text-xxl"></span>
        <span class="au-text-s">points</span>
      </section>
    </header>
  );

  if (props) {
    props.data.completions.then((data) => {
      var pts = 0;
      data.forEach((completion) => (pts += completion.points));

      const balanceElement = $("#au-header-balance");

      const sign = pts > 0 ? "+" : "";
      const text = pts == 0 ? "ツ" : sign + pts;

      balanceElement.text(text);
    });

    $(dropElement).droppable({
      over: (ev, ui) => $(dropElement).addClass("au-drop-header"),

      out: (ev, ui) => $(dropElement).removeClass("au-drop-header"),

      drop: (ev, ui) => {
        const card = ui.draggable;

        props.removeCard(card.attr("id"));
        localStorage.removeItem(card.attr("id"));

        $(dropElement).removeClass("au-drop-header");

        card.remove();
      },

      tolerance: "touch",
    });
  }

  return headerElement;
}

export default Header;
