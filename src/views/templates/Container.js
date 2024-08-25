import { createElement, createFragment } from "../Render";
import Card from "./Card";

/** @jsx createElement */
/** @jsxFrag createFragment */

function Container(props) {
  const mainElement = <main></main>;

  if (props) {
    props.data.then((data) => {
      const allCards = data.map((data) => <Card data={data} />);
      mainElement.append(...allCards);
    });
  }

  return mainElement;
}

export default Container;
