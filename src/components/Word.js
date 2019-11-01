import React from "react";

function Word({ word, handleDoubleClick }) {
  return (
    <span onDoubleClick={e => handleDoubleClick(e, word)}>{word.word} </span>
  );
}

export default Word;
