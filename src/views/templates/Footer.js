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
        name: "attend a uni fair",
        description: "+5 pts",
      },
      {
        name: "join a college club",
        description: "+10 pts",
      },
      {
        name: "volunteer in your community",
        description: "+15 pts",
      },
      {
        name: "achieve a high GPA",
        description: "+20 pts",
      },
      {
        name: "get a part-time job",
        description: "+10 pts",
      },
    ];

    const addCard = () => {
      const cardContent = cardContents[Math.floor(Math.random() * cardContents.length)];
      props.container.appendChild(<Card data={cardContent} />);
    };

    return (
      <footer>
        <span>aura</span>
        <Button type="icon" text="add" onClick={addCard} />
        {Object.keys(navs).map((path) => (path !== location && navs[path]) || "")}
      </footer>
    );
  }
}

export default Footer;
