import React, { useState } from "react";
import Button from "./Button";
import { TimerWidget } from "./Widget";

export default function Footer() {
  const [isActiveWidget, setActiveWidget] = useState(false);
  const path = window.location.pathname;

  const actions = [
    { text: "add", handleClick: () => (window.location.href = "/edit?id=new") },
    { text: "timer", handleClick: () => setActiveWidget(true) },
  ];

  const navigation = [
    { text: "home", href: "/" },
    { text: "emoji_events", href: "/history" },
    { text: "settings", href: "/settings" },
  ];

  const actButtons = path === "/" ? actions : [];
  const navButtons = navigation.filter((nav) => nav.href !== path);

  const handleClickTitle = () => (window.location.href = "/home");
  const closeWidget = () => setActiveWidget(false);

  return (
    <>
      <footer>
        <span className="au-text-display au-text-title" onClick={handleClickTitle}>
          auraby
        </span>
        <div id="au-footer-actions">
          {isActiveWidget ? (
            <TimerWidget closeWidget={closeWidget} />
          ) : (
            <>
              {actButtons.map(({ text, handleClick }) => (
                <Button key={text} className="icon" onClick={handleClick} text={text} />
              ))}
              {navButtons.map(({ text, href }) => (
                <Button key={text} className="icon" href={href} text={text} />
              ))}
            </>
          )}
        </div>
      </footer>
    </>
  );
}
