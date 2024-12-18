import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "components/Button";
import "./footer.css";

export default function Footer() {
  const navigate = useNavigate();
  const path = window.location.pathname;

  const actions = [{ text: "add", handleClick: () => navigate("/edit/new") }];

  const navigation = [
    { text: "home", href: "/" },
    { text: "emoji_events", href: "/history" },
    { text: "settings", href: "/settings" },
  ];

  const actButtons = path === "/" ? actions : [];
  const navButtons = navigation.filter((nav) => nav.href !== path);

  const handleClickTitle = () => navigate("/home");

  return (
    <>
      <footer>
        <span className="au-text-display au-text-title" onClick={handleClickTitle}>
          aura
        </span>
        <div id="au-footer-actions">
          {actButtons.map(({ text, handleClick }) => (
            <Button key={text} className="icon" text={text} onClick={handleClick} />
          ))}
          {navButtons.map(({ text, href }) => (
            <Button key={text} className="icon" text={text} href={href} />
          ))}
        </div>
      </footer>
    </>
  );
}
