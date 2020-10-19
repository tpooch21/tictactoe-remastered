import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import BoardRow from "./components/Board/BoardRow";

/**
 * state:
 *  board - matrix
 *  currentPlayer - 'X' or 'O'
 *  gameIsOver: false
 *  winner: null
 */
const boardLayout = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const App = () => {
  const [board, updateBoard] = useState(boardLayout);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toe</h1>
      </header>
      <main>
        <div className="Board">
          {board.map((row) => {
            return <BoardRow row={row} />;
          })}
        </div>
      </main>
    </div>
  );
};

export default App;
