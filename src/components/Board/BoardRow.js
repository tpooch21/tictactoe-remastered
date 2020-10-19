import React from "react";

const BoardRow = ({ row }) => (
  <div>
    {row.map((space) => (
      <button>Space</button>
    ))}
  </div>
);

export default BoardRow;
