import React, { Component } from "react";
import "./FileZone.css";
import Word from "../components/Word";

function FileZone({ wordsCollection }) {
  return (
    <div id="file-zone">
      <div id="file">
        {wordsCollection.map((word, index) => {
          return <Word key={index} word={word}></Word>;
        })}
      </div>
    </div>
  );
}

export default FileZone;
