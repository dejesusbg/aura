import React from "react";
import Button from "./Button";

const actions = [
  { text: "add", handleClick: () => (window.location.href = "/edit?id=new") },
  { text: "refresh", handleClick: () => window.location.reload() },
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
      <Button key="aura" className="text" href="/home" text="aura" />
      {actButtons.map(({ text, handleClick }) => (
        <Button key={text} className="icon" handleClick={handleClick} text={text} />
      ))}
      {navButtons.map(({ text, href }) => (
        <Button key={text} className="icon" href={href} text={text} />
      ))}
    </footer>
  );
}
