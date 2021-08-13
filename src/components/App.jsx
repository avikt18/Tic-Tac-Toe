import React, { useState } from "react";
import Box from "./Box";
import Header from "./Header";
import "./styles.css";

function App() {
  const [state, setState] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState("");
  function handleClick({ event, index }) {
    // console.log("clicked", state, index);
    if (winner) {
      return;
    }
    setState(!state);
    const nextMove = state ? "O" : "X";
    event.target.innerHTML = nextMove;
    const tempSquares = squares;
    tempSquares[index] = nextMove;
    setSquares((squares) => tempSquares);
    console.log(squares);

    function calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
          squares[a] &&
          squares[a] === squares[b] &&
          squares[a] === squares[c]
        ) {
          setWinner(squares[a]);
        }
      }
    }
    calculateWinner(squares);
  }

  return (
    <section>
      <Header winner={winner} nextMove={state ? "O" : "X"} />
      <div className="container">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <Box key={i} index={i} handleClick={handleClick} />
        ))}
      </div>
    </section>
  );
}

export default App;
