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
    var pts = 0;

    Promise.all([
      props.data.completions.then((data) => data.forEach((completion) => (pts += completion.points_earned))),
      props.data.redemptions.then((data) => data.forEach((redemption) => (pts -= redemption.points_spent))),
    ]).then(() => {
      console.log(pts)
      const balanceElement = $("#au-header-balance");

      const balanceSign = pts > 0 ? "+" : "-";
      const balanceText = pts == 0 ? "ツ" : balanceSign + pts;

      balanceElement.text(balanceText);
    });

    $(dropElement).droppable({
      over: (e, ui) => $(dropElement).addClass("au-drop-header"),

      out: (e, ui) => $(dropElement).removeClass("au-drop-header"),

      drop: (e, ui) => {
        const card = ui.draggable;
        
        card.remove();
        
        props.addCompletion(card.attr("id"));
        localStorage.removeItem(card.attr("id"));
        
        $(dropElement).removeClass("au-drop-header");
      },

      tolerance: "touch",
    });
  }

  return headerElement;
}

export default Header;
