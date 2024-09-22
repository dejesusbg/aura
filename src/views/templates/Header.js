import React, { useEffect, useState } from "react";

const image = {
  url: "images/logo.png",
  alt: "logo",
};

export default function Header({ completions }) {
  const [balance, setBalance] = useState("ツ");

  useEffect(() => {
    const updateBalance = async () => {
      if (completions) {
        const fetchedData = await completions;
        const totalPoints = fetchedData.reduce((sum, completion) => sum + completion.points, 0);
        setBalance(totalPoints === 0 ? "ツ" : `${totalPoints > 0 ? "+" : ""}${totalPoints}`);
      }
    };

    updateBalance();
  }, [completions]);

  const path = window.location.pathname;
  const name = path.replace("/", "");

  const displayText =
    path === "/" ? (
      <>
        <span className="au-text-xxl">{balance}</span>
        <span className="au-text-s">points</span>
      </>
    ) : (
      <span className="au-text-xl">{name}</span>
    );

  return (
    <header>
      <section className="au-header-leading">
        <img src={image.url} alt={image.alt} draggable="false" />
      </section>
      <section className="au-header-trailing">{displayText}</section>
    </header>
  );
}
