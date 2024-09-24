import React, { useEffect, useState } from "react";

const image = {
  url: "images/logo.png",
  alt: "logo",
};

export default function Header({ completions }) {
  const [balance, setBalance] = useState(0);
  const [displayBalance, setDisplayBalance] = useState("ツ");

  useEffect(() => {
    const updateBalance = async () => {
      if (completions) {
        const fetchedData = await completions;
        const totalPoints = fetchedData.reduce((sum, completion) => sum + completion.points, 0);
        setBalance(totalPoints);
      }
    };

    updateBalance();
  }, [completions]);

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
  const name = path.replace("/", "");

  const displayText =
    path === "/" ? <span className="au-text-l">{displayBalance}</span> : <span className="au-text-m">{path}</span>;

  return (
    <header>
      <section className="au-header-leading">
        <img src={image.url} alt={image.alt} draggable="false" />
      </section>
      <section className="au-header-trailing">{displayText}</section>
    </header>
  );
}
