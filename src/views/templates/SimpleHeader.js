import { createElement, createFragment } from "../Render";

/** @jsx createElement */
/** @jsxFrag createFragment */

function SimpleHeader(props) {
  if (props) {
    return (
      <header>
        <section class="au-header-leading">
          <img src="images/logo.png" alt="logo"></img>
        </section>
        <section class="au-header-trailing">
          <span id="au-header-balance" class="au-text-xxl">
            {props.name}
          </span>
        </section>
      </header>
    );
  }
}

export default SimpleHeader;
