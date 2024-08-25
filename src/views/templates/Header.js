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
    let balance = 0;

    Promise.all([
      props.data.completions.then((data) => {
        data.forEach((completion) => (balance += completion.points_earned));
      }),
      props.data.redemptions.then((data) => {
        data.forEach((redemption) => (balance -= redemption.points_spent));
      }),
    ]).then(() => {
      const balanceElement = $("#au-header-balance");

      const balanceSign = balance > 0 ? "+" : "-";
      const balanceText = balance == 0 ? "ツ" : balanceSign + balance;

      balanceElement.text(balanceText);
    });

    $(dropElement).droppable({
      over: (e, ui) => {
        $(dropElement).addClass("au-drop-header");
      },

      out: (e, ui) => {
        $(dropElement).removeClass("au-drop-header");
      },

      drop: (e, ui) => {
        const card = ui.draggable;

        $(dropElement).removeClass("au-drop-header");

        card.remove();
        props.addCompletion(card.attr("id"));
      },

      tolerance: "touch",
    });
  }

  return headerElement;
}

export default Header;
