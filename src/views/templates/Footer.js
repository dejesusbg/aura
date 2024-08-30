import { createElement, createFragment } from "../Render";
import Button from "./Button";
import Card from "./Card";

/** @jsx createElement */
/** @jsxFrag createFragment */

function Footer() {
  const path = window.location.pathname;

  const addCard = () => (window.location.href = `/edit?id=new`);

  let navButtons = [
    { path: "/", text: "home" },
    { path: "/history", text: "emoji_events" },
    { path: "/settings", text: "settings" },
  ];

  let actButtons = [
    { text: "add", onClick: addCard },
    { text: "refresh", onClick: () => window.location.reload() },
  ];

  const shouldShowActions = path == "/";
  !shouldShowActions && (actButtons = []);

  navButtons = navButtons.filter((nav) => nav.path != path);

  return (
    <footer>
      <Button className="text" text="aura" href="/home" />
      {actButtons.map((btn) => (
        <Button className="icon" text={btn.text} onClick={btn.onClick} />
      ))}
      {navButtons.map((btn) => (
        <Button className="icon" text={btn.text} href={btn.path} />
      ))}
    </footer>
  );
}

export default Footer;
