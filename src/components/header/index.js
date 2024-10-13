import React, { useEffect, useState } from "react";

import "./header.css";

export default function Header({ balance }) {
  const [displayBalance, setDisplayBalance] = useState("ツ");

  useEffect(() => {
    const animateBalance = () => {
      let start = 0;
      const end = balance;
      const duration = 1000;
      const increment = Math.ceil(end / (duration / 100));

      const updateDisplayBalance = () => {
        if (start < end) {
          start += increment;
          if (start > end) start = end;
          setDisplayBalance(start === 0 ? "ツ" : `${start > 0 ? "+" : ""}${start}`);
          requestAnimationFrame(updateDisplayBalance);
        } else {
          setDisplayBalance(end === 0 ? "ツ" : `${end > 0 ? "+" : ""}${end}`);
        }
      };

      updateDisplayBalance();
    };

    animateBalance();
  }, [balance]);

  const path = window.location.pathname;
  const name = `/${path.split("/")[1]}/`;

  const displayText =
    path === "/" ? <span className="au-text-l">{displayBalance}</span> : <span className="au-text-m">{name}</span>;

  return (
    <header>
      <section className="au-header-leading">
        <img src="/assets/logo.png" alt="logo" draggable="false" />
      </section>
      <section className="au-header-trailing">{displayText}</section>
    </header>
  );
}
