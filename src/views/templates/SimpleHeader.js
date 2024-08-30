import { createElement, createFragment } from "../Render";

/** @jsx createElement */
/** @jsxFrag createFragment */

function SimpleHeader() {
  const path = window.location.pathname;
  const name = path.replace("/", "");

  return (
    <header>
      <section class="au-header-leading">
        <img src="images/logo.png" alt="logo"></img>
      </section>
      <section class="au-header-trailing">
        <span id="au-header-balance" class="au-text-xl">
          {name}
        </span>
      </section>
    </header>
  );
}

export default SimpleHeader;
