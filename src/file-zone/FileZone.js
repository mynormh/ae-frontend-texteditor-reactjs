import React, { Component } from "react";
import "./FileZone.css";
import Word from "../components/Word";

function FileZone({ wordsCollection, setSelectedWord, selectedWord }) {
  const handleDoubleClick = (e, word) => {
    const newWord = { ...word };
    setSelectedWord(newWord);
  };

  const clearSelection = () => {
    setSelectedWord({
      index: null,
      word: "",
      format: {
        bold: false,
        italic: false,
        underline: false
      }
    });
  };

  return (
    <div id="file-zone" onClick={clearSelection}>
      <div id="file">
        {wordsCollection.map((word, index) => {
          return (
            <Word
              key={index}
              word={word}
              handleDoubleClick={handleDoubleClick}
              selectedWord={selectedWord}
            ></Word>
          );
        })}
      </div>
    </div>
  );
}

export default FileZone;
