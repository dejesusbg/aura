import { createElement, createFragment } from "../Render";
import Button from "./Button";

/** @jsx createElement */
/** @jsxFrag createFragment */

function Footer() {
  const location = window.location.pathname;

  const navs = {
    "/": <Button type="icon" text="home" />,
    rewards: <Button type="icon" text="emoji_events" />,
    settings: <Button type="icon" text="settings" />,
  };

  return (
    <footer>
      <span>aura</span>
      <Button type="icon" text="shuffle" />

      {Object.keys(navs).map((path) => (path !== location && navs[path]) || "")}
    </footer>
  );
}

export default Footer;
