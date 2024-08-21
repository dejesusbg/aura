import { createElement, createFragment } from "../Render";

/** @jsx createElement */
/** @jsxFrag createFragment */

function Header(props) {
  if (props) {
    const balanceSign = props.balance > 0 ? "+" : "-";
    const balanceText = balanceSign + props.balance;

    return (
      <header>
        <section class="au-header-leading">
          <img src="images/logo.png" alt="logo" draggable="false"></img>
        </section>

        <section class="au-header-trailing">
          <span class="au-text-xl">{balanceText}</span>
          <span class="au-text-s">points</span>
        </section>
      </header>
    );
  }
}

export default Header;
