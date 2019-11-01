import React, { Component } from "react";
import "./FileZone.css";
import Word from "../components/Word";

function FileZone({ wordsCollection, setSelectedWord }) {
  const handleDoubleClick = (e, word) => {
    const newWord = { ...word };
    setSelectedWord(newWord);
  };

  return (
    <div id="file-zone">
      <div id="file">
        {wordsCollection.map((word, index) => {
          return (
            <Word
              key={index}
              word={word}
              handleDoubleClick={handleDoubleClick}
            ></Word>
          );
        })}
      </div>
    </div>
  );
}

export default FileZone;
