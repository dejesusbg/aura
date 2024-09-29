import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "components/button";
import { EmojiWidget, TimerWidget } from "components/widget";
import "./index.css";

export default function Footer() {
  const navigate = useNavigate();

  const [isActiveWidget, setActiveWidget] = useState(null);
  const path = window.location.pathname;

  const actions = [
    { text: "add", handleClick: () => navigate("/edit/new") },
    { text: "timer", handleClick: () => setActiveWidget("timer") },
    { text: "spa", handleClick: () => setActiveWidget("spa") },
  ];

  const navigation = [
    { text: "home", href: "/" },
    { text: "emoji_events", href: "/history" },
    { text: "settings", href: "/settings" },
  ];

  const actButtons = path === "/" ? actions : [];
  const navButtons = navigation.filter((nav) => nav.href !== path);

  const handleClickTitle = () => navigate("/home");
  const handleCloseWidget = () => setActiveWidget(null);

  return (
    <>
      <footer>
        <span className="au-text-display au-text-title" onClick={handleClickTitle}>
          auraby
        </span>
        <div id="au-footer-actions">
          {isActiveWidget ? (
            <>
              {isActiveWidget === "timer" && <TimerWidget onClose={handleCloseWidget} />}
              {isActiveWidget === "spa" && <EmojiWidget onClose={handleCloseWidget} />}
            </>
          ) : (
            <>
              {actButtons.map(({ text, handleClick }) => (
                <Button key={text} className="icon" text={text} onClick={handleClick} />
              ))}
              {navButtons.map(({ text, href }) => (
                <Button key={text} className="icon" text={text} href={href} />
              ))}
            </>
          )}
        </div>
      </footer>
    </>
  );
}
