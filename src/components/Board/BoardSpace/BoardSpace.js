import React from "react";
import classes from "./BoardSpace.module.css";

const BoardSpace = ({ content, onClick, disabled }) => {
  const spaceFiller = content ? content : "";

  return (
    <button
      className={classes.BoardSpace}
      onClick={onClick}
      disabled={disabled}
    >
      {spaceFiller}
    </button>
  );
};

export default BoardSpace;
