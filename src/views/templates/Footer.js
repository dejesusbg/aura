import { createElement, createFragment } from "../Render";
import Button from "./Button";
import Card from "./Card";

/** @jsx createElement */
/** @jsxFrag createFragment */

function Footer(props) {
  if (props) {
    const path = window.location.pathname;

    const addCard = () => {
      const type = path == "/" ? "habit" : "reward";
      window.location.href = `/edit?${type}=new`;
    };

    let navButtons = [
      { path: "/", text: "home" },
      { path: "/rewards", text: "emoji_events" },
    ];

    let secButtons = [
      { path: "/history", text: "history" },
      { path: "/settings", text: "settings" },
    ];

    let actButtons = [
      { text: "add", onClick: addCard },
      // { text: "refresh", onClick: () => window.location.reload() },
    ];

    const shouldShowActions = navButtons.map((nav) => nav.path).includes(path);
    !shouldShowActions && (actButtons = []);

    navButtons = navButtons.filter((nav) => nav.path != path);
    secButtons = secButtons.filter((nav) => nav.path != path);

    return (
      <footer>
        <Button text="aura" href="/home" type="text" />
        {actButtons.map((btn) => (
          <Button type="icon" text={btn.text} onClick={btn.onClick} />
        ))}
        {navButtons.map((btn) => (
          <Button type="icon" text={btn.text} href={btn.path} />
        ))}
        {secButtons.map((btn) => (
          <Button type="icon" text={btn.text} href={btn.path} />
        ))}
      </footer>
    );
  }
}

export default Footer;
