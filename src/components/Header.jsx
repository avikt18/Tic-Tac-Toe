import React from "react";
import "./styles.css";

function Header({ winner, nextMove }) {
  const heading = winner ? "Winner: " + winner : "Next Player: " + nextMove;
  return <h1 className="header">{heading}</h1>;
}

export default Header;
