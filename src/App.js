import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import BoardRow from "./components/Board/BoardRow";
import PlayerTurnHeader from "./components/PlayerTurn/index";
import {
  checkAllDirections,
  checkForCatsGame,
} from "./helpers/checkBoardFunctions";
import PlayAgainButton from "./components/PlayAgainButton/index";

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
  const [gameIsOver, toggleGameOver] = useState(false);
  const [winner, updateWinner] = useState(null);

  const handlePlayerMove = (row, col) => {
    const boardCopy = [];
    board.forEach((row) => {
      boardCopy.push([...row]);
    });

    boardCopy[row][col] = playerTurn;
    updateBoard(boardCopy);

    checkForWinner(boardCopy);
  };

  const checkForWinner = (boardCopy) => {
    if (checkAllDirections(boardCopy)) {
      toggleGameOver(true);
      updateWinner(playerTurn);
    } else if (checkForCatsGame(boardCopy)) {
      toggleGameOver(true);
    } else {
      const nextPlayer = playerTurn === "X" ? "O" : "X";
      togglePlayerTurn(nextPlayer);
    }
  };

  const resetGame = () => {
    updateBoard(boardLayout);
    togglePlayerTurn("X");
    toggleGameOver(false);
    updateWinner(null);
  };

  let message = `Player ${playerTurn}, you're up!`;
  if (gameIsOver) {
    if (winner) message = `Player ${playerTurn} wins!`;
    else message = "Cats game!";
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toe</h1>
      </header>
      <main>
        <PlayerTurnHeader>{message}</PlayerTurnHeader>
        <PlayAgainButton show={gameIsOver} onClick={resetGame}>
          Play Again?
        </PlayAgainButton>
        <div className="Board">
          {board.map((row, i) => {
            return (
              <BoardRow
                row={row}
                rowIndex={i}
                select={handlePlayerMove}
                disabled={gameIsOver}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default App;
