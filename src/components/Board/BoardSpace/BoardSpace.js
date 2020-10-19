import React from "react";
import classes from "./BoardSpace.module.css";

const BoardSpace = ({ content, onClick }) => {
  const spaceFiller = content ? content : "";

  return (
    <button className={classes.BoardSpace} onClick={onClick}>
      {spaceFiller}
    </button>
  );
};

export default BoardSpace;
