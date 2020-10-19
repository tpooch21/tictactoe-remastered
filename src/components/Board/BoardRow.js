import React from "react";
import BoardSpace from "./BoardSpace/BoardSpace";
import classes from "./BoardRow.module.css";

const BoardRow = ({ row, rowIndex, select }) => (
  <div className={classes.BoardRow}>
    {row.map((space, j) => (
      <BoardSpace onClick={() => select(rowIndex, j)} content={space} />
    ))}
  </div>
);

export default BoardRow;
