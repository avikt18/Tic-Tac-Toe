import React, { useState } from "react";
import "./styles.css";

function Box({ handleClick, index }) {
  const [clicked, setClicked] = useState(false);
  function gotClicked(event) {
    if (clicked) {
      return;
    }
    setClicked(true);
    handleClick({ event, index });
  }
  return <div className="box" onClick={(event) => gotClicked(event)} />;
}

export default Box;
