import { createElement, createFragment } from "../Render";
import Button from "./Button";
import Card from "./Card";

/** @jsx createElement */
/** @jsxFrag createFragment */

function Footer(props) {
  if (props) {
    let path = window.location.pathname;
    path === "/history" && (path = "/edit");

    const cardContents = [
      {
        name: "attend a uni fair",
        description: "go to the science fair and attend",
        frequency: "once",
        points: 5,
      },
      {
        name: "join a college club",
        description: "go to the reading club and make some friends",
        frequency: "once",
        points: 10,
      },
      {
        name: "volunteer in your community",
        description: "go to the food drive and volunteer",
        frequency: "weekly6",
        points: 15,
      },
      {
        name: "achieve a high GPA",
        description: "",
        frequency: "once",
        points: 20,
      },
      {
        name: "get a part-time job",
        description: "try to work at mcdonald's",
        frequency: "once",
        points: 25,
      },
    ];

    const addCard = () => {
      const cardContent = cardContents[Math.floor(Math.random() * cardContents.length)];

      props.addCard(cardContent.name, cardContent.description, cardContent.frequency, cardContent.points);
      props.container.appendChild(<Card data={cardContent} />);
    };

    const navButtons = [
      { path: "/", text: "home" },
      { path: "/rewards", text: "emoji_events" },
      { path: "/history", text: "history" },
      { path: "/settings", text: "settings" },
    ];

    const excludedPaths = ["/edit", "/history", "/settings", "/home"];
    const shouldShowAddButton = !excludedPaths.includes(path);

    return (
      <footer>
        <Button text="aura" href="/home" type="text" />
        {(shouldShowAddButton && <Button type="icon" text="add" onClick={addCard} />) || ""}
        {navButtons
          .filter((button) => button.path !== path)
          .map((button) => (
            <Button key={button.path} type="icon" text={button.text} href={button.path} />
          ))}
      </footer>
    );
  }
}

export default Footer;
