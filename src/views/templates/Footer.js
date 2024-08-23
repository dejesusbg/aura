import { createElement, createFragment } from "../Render";
import Button from "./Button";
import Card from "./Card";

/** @jsx createElement */
/** @jsxFrag createFragment */

function Footer(props) {
  if (props) {
    const location = window.location.pathname;

    const navs = {
      "/": <Button type="icon" text="home" />,
      rewards: <Button type="icon" text="emoji_events" />,
      settings: <Button type="icon" text="settings" />,
    };

    const cardContents = [
      {
        title: "attend a uni fair",
        body: "+5 pts",
      },
      {
        title: "join a college club",
        body: "+10 pts",
      },
      {
        title: "volunteer in your community",
        body: "+15 pts",
      },
      {
        title: "achieve a high GPA",
        body: "+20 pts",
      },
      {
        title: "get a part-time job",
        body: "+10 pts",
      },
    ];

    const addCard = () => {
      const cardContent = cardContents[Math.floor(Math.random() * cardContents.length)];
      props.container.appendChild(<Card data={cardContent} />);
    };

    const shuffleCards = () => {
      
    };

    return (
      <footer>
        <span>aura</span>
        <Button type="icon" text="add" onClick={addCard} />
        <Button type="icon" text="shuffle" />
        {Object.keys(navs).map((path) => (path !== location && navs[path]) || "")}
      </footer>
    );
  }
}

export default Footer;
