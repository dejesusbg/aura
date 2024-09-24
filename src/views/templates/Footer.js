import React from "react";
import Button from "./Button";

export default function Footer() {
  const path = window.location.pathname;

  const actions = [{ text: "add", handleClick: () => (window.location.href = "/edit?id=new") }];

  const navigation = [
    { text: "home", href: "/" },
    { text: "emoji_events", href: "/history" },
    { text: "settings", href: "/settings" },
  ];

  const actButtons = path === "/" ? actions : [];
  const navButtons = navigation.filter((nav) => nav.href !== path);

  const handleClickTitle = () => (window.location.href = "/home");

  const handleClickTheme = () => {
    toggleDarkMode();
    localStorage.setItem("theme", document.body.classList[0]);
  };

  return (
    <>
      <footer>
        <span className="au-text-display au-text-title" onClick={handleClickTitle}>
          auraby
        </span>
        <div id="au-footer-actions">
          {actButtons.map(({ text, handleClick }) => (
            <Button key={text} className="icon" onClick={handleClick} text={text} />
          ))}
          <Button key="dark_mode" className="icon" onClick={handleClickTheme} text="dark_mode" />
          {navButtons.map(({ text, href }) => (
            <Button key={text} className="icon" href={href} text={text} />
          ))}
        </div>
      </footer>
    </>
  );
}
