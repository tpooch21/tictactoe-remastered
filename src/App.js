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
  const [playerTurn, togglePlayerTurn] = useState("X");

  const handlePlayerMove = (row, col) => {
    const boardCopy = [];
    board.forEach((row) => {
      boardCopy.push([...row]);
    });

    boardCopy[row][col] = playerTurn;
    updateBoard(boardCopy);

    const nextPlayer = playerTurn === "X" ? "O" : "X";
    togglePlayerTurn(nextPlayer);
  };

  console.log(board);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toe</h1>
      </header>
      <main>
        <div className="Board">
          {board.map((row, i) => {
            return (
              <BoardRow row={row} rowIndex={i} select={handlePlayerMove} />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default App;
