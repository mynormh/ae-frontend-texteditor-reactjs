import React, { Component } from "react";
import "./FileZone.css";
import Word from "../components/Word";
import ToolTip from "../components/ToolTip";
import { getPositions } from "../utils";

function FileZone({
  wordsCollection,
  setSelectedWord,
  selectedWord,
  showToolTip,
  setShowToolTip
}) {
  const handleDoubleClick = (e, word) => {
    const newWord = { ...word };
    newWord.position = getPositions(e);
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
    setShowToolTip(false);
  };

  return (
    <div id="file-zone" onClick={clearSelection}>
      <div id="file">
        <ToolTip
          position={selectedWord.position}
          selectedWord={selectedWord}
          showToolTip={showToolTip}
        ></ToolTip>
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
