import React from "react";
import BoardSpace from "./BoardSpace/BoardSpace";

const BoardRow = ({ row, rowIndex, select }) => (
  <div>
    {row.map((space, j) => (
      <BoardSpace
        onClick={() => select(rowIndex, j)}
        rowIndex={rowIndex}
        colIndex={j}
        content={space}
      />
    ))}
  </div>
);

export default BoardRow;
