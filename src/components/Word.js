import React from "react";

function Word({ word, handleDoubleClick, selectedWord }) {
  const boldClass = selectedWord && word.format.bold ? "text-bold " : "";
  const italicClass = selectedWord && word.format.italic ? "text-italic " : "";
  const underlineClass =
    selectedWord && word.format.underline ? "text-underline " : "";

  const wordClasses = `${boldClass}${italicClass}${underlineClass}`;

  return (
    <span
      onDoubleClick={e => handleDoubleClick(e, word)}
      className={wordClasses}
    >
      {word.word}{" "}
    </span>
  );
}

export default Word;
