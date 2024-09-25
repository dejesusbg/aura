import React from "react";
import Button from "./Button";

function Widget({ children, closeWidget }) {
  return (
    <>
      <div id="au-widget">
        {children}
        <Button key="close" className="icon" text="close" onClick={closeWidget} />
      </div>
    </>
  );
}

function TimerWidget({ closeWidget }) {
  return <Widget closeWidget={closeWidget}></Widget>;
}

export { TimerWidget };
