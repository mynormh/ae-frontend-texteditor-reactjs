import React, { useState, useEffect } from "react";
import "./App.css";
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import getMockText from "./text.service";

function App() {
  const [wordsCollection, setWordsCollection] = useState("");

  useEffect(() => {
    getMockText().then(function(result) {
      setWordsCollection(result);
    });
  }, []);

  return (
    <div className="App">
      <header>
        <span>Simple Text Editor</span>
      </header>
      <main>
        <ControlPanel />
        <FileZone />
      </main>
    </div>
  );
}

export default App;
