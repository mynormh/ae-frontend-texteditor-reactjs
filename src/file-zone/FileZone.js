import React, { useState, useEffect } from "react";
import "./FileZone.css";
import Word from "../components/Word";
import ToolTip from "../components/ToolTip";
import { getPositions } from "../utils";

function FileZone({
  wordsCollection,
  setSelectedWord,
  selectedWord,
  showToolTip,
  setShowToolTip,
  handleSynonymClick
}) {
  const [synonyms, setSynonyms] = useState([]);
  const [loadingSynonyms, setLoadingSynonyms] = useState(true);

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
    setSynonyms([]);
  };

  useEffect(() => {
    if (!selectedWord.word) return;
    fetch(`https://api.datamuse.com/words?ml=${selectedWord.word}&max=3`)
      .then(res => res.json())
      .then(res => {
        const response = res.map(synonym => synonym.word);
        setSynonyms(response);
        setLoadingSynonyms(false);
      });
  }, [selectedWord.word]);

  return (
    <div id="file-zone" onClick={clearSelection}>
      <div id="file">
        <ToolTip
          position={selectedWord.position}
          selectedWord={selectedWord}
          showToolTip={showToolTip}
          loadingSynonyms={loadingSynonyms}
          synonyms={synonyms}
          handleSynonymClick={handleSynonymClick}
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
