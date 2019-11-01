import React from "react";
import "./ControlPanel.css";

function ControlPanel({ toggleFormat, selectedWord }) {
  const boldClass =
    selectedWord && selectedWord.format.bold ? "text-bold " : "";
  const italicClass =
    selectedWord && selectedWord.format.italic ? "text-italic " : "";
  const underlineClass =
    selectedWord && selectedWord.format.underline ? "text-underline " : "";

  return (
    <div>
      <button onClick={() => toggleFormat("bold")} className={boldClass}>
        B
      </button>
      <button onClick={() => toggleFormat("italic")} className={italicClass}>
        I
      </button>
      <button
        onClick={() => toggleFormat("underline")}
        className={underlineClass}
      >
        U
      </button>
    </div>
  );
}

export default ControlPanel;
