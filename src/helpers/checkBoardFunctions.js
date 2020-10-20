// Check rows for 3 in a row
export const threeInARow = (board) => {
  for (let i = 0; i < board.length; i++) {
    const total = board[i].reduce((acc, curr) => {
      if (curr === "X") {
        return acc + 1;
      } else if (curr === "O") return acc - 1;
    }, 0);

    console.log(total);
    if (total >= 3 || total <= -3) return true;
  }

  return false;
};

// Check columns for 3 in a row

// Check diagonals
