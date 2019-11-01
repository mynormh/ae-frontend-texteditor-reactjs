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
    }
  });

  useEffect(() => {
    getMockText().then(result => {
      const wordsCollection = createWordsCollection(result);
      setWordsCollection(wordsCollection);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <header>
        <span>Simple Text Editor</span>
      </header>
      <main>
        <ControlPanel />
        {loading ? (
          <p>Loading</p>
        ) : (
          <FileZone
            wordsCollection={wordsCollection}
            setSelectedWord={setSelectedWord}
          />
        )}
      </main>
    </div>
  );
}

export default App;
