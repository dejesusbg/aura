import { createElement, createFragment } from "../Render";
import Card from "./Card";

/** @jsx createElement */
/** @jsxFrag createFragment */

function Container(props) {
  let allCards = props.data.map((data) => <Card data={data} />);
  return <main>{allCards}</main>;
}

export default Container;
