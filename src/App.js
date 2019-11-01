import React, { useState, useEffect } from "react";
import "./App.css";
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import getMockText from "./text.service";
import { createWordsCollection } from "./utils";

function App() {
  const [wordsCollection, setWordsCollection] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedWord, setSelectedWord] = useState({
    index: null,
    word: "",
    format: {
      bold: false,
      italic: false,
      underline: false
      // color: "ffc600"
    }
  });
  const [showToolTip, setShowToolTip] = useState(false);

  useEffect(() => {
    getMockText().then(result => {
      const wordsCollection = createWordsCollection(result);
      setWordsCollection(wordsCollection);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!selectedWord.index) return;
    setShowToolTip(true);
  }, [selectedWord]);

  const formatWord = format => {
    const wordToFormat = wordsCollection.find(
      word => word.index === selectedWord.index
    );
    wordToFormat.format[format] = !wordToFormat.format[format];
    return wordToFormat;
  };

  const toggleFormat = format => {
    if (!selectedWord.index) return;
    const newWords = [...wordsCollection];
    newWords[selectedWord.index] = { ...formatWord(format) };
    setWordsCollection(newWords);
  };

  // const changeColor = e => {
  //   const wordToFormat = wordsCollection.find(
  //     word => word.index === selectedWord.index
  //   );
  //   wordToFormat.format.color = `#${e.target.value}`;
  // };

  const handleSynonymClick = synonym => {
    const newWords = [...wordsCollection];
    const wordToReplace = newWords.find(
      word => word.index === selectedWord.index
    );
    newWords[wordToReplace.index].word = synonym;
    setWordsCollection(newWords);
  };

  return (
    <div className="App">
      <header>
        <span>Simple Text Editor</span>
      </header>
      <main>
        <ControlPanel
          toggleFormat={toggleFormat}
          selectedWord={selectedWord}
          // changeColor={changeColor}
        />
        {loading ? (
          <p>Loading</p>
        ) : (
          <FileZone
            wordsCollection={wordsCollection}
            setSelectedWord={setSelectedWord}
            selectedWord={selectedWord}
            showToolTip={showToolTip}
            setShowToolTip={setShowToolTip}
            handleSynonymClick={handleSynonymClick}
          />
        )}
      </main>
    </div>
  );
}

export default App;
