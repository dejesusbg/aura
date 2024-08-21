import { createElement, createFragment } from "../Render";
import Card from "./Card";

/** @jsx createElement */
/** @jsxFrag createFragment */

function Container(props) {
  return (
    <main>
      <Card text={props.data} />
      <Card text={props.data} />
      <Card text={props.data} />
      <Card text={props.data} />
      <Card text={props.data} />
      <Card text={props.data} />
      <Card text={props.data} />
      <Card text={props.data} />
    </main>
  );
}

export default Container;
