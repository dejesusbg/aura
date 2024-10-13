import React, { useState } from "react";

import Button from "components/Button";
import "./widget.css";

function Widget({ children, onClose }) {
  return (
    <>
      {children}
      <Button className="icon" text="close" onClick={onClose} />
    </>
  );
}

function TimerWidget({ onClose }) {
  return <Widget onClose={onClose} />;
}

function EmojiWidget({ onClose }) {
  const [emojiData, setEmojiData] = useState(null);
  const emojis = ["😀", "😱", "😭", "😂"];

  const handleClick = (emoji, e) => {
    const { left, top } = e.target.getBoundingClientRect();
    setEmojiData({ emoji, left: left + window.scrollX, top: top + window.scrollY });

    setTimeout(onClose, 750);
  };

  return (
    <Widget onClose={onClose}>
      {emojiData ? (
        <span className="au-widget-emoji" style={{ left: emojiData.left, top: emojiData.top }}>
          {emojiData.emoji}
        </span>
      ) : (
        emojis.map((emoji) => (
          <Button key={emoji} className="emoji" text={emoji} onClick={(e) => handleClick(emoji, e)} />
        ))
      )}
    </Widget>
  );
}

export { TimerWidget, EmojiWidget };
