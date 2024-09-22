import React from "react";
import Button from "./Button";

const actions = [
  { text: "add", handleClick: () => (window.location.href = "/edit?id=new") },
  { text: "refresh", handleClick: () => window.location.reload() },
  { text: "brightness_4", handleClick: () => toggleDarkMode() },
];

const navigation = [
  { text: "home", href: "/" },
  { text: "emoji_events", href: "/history" },
  { text: "settings", href: "/settings" },
];

export default function Footer() {
  const path = window.location.pathname;

  const actButtons = path === "/" ? actions : [];
  const navButtons = navigation.filter((nav) => nav.href !== path);

  return (
    <footer>
      <Button key="aura" href="/home" text="aura" />
      {actButtons.map(({ text, handleClick }) => (
        <Button key={text} className="icon" onClick={handleClick} text={text} />
      ))}
      {navButtons.map(({ text, href }) => (
        <Button key={text} className="icon" href={href} text={text} />
      ))}
    </footer>
  );
}
