import React, { useState, useEffect } from "react";
import "./ToolTip.css";

function ToolTip({ position, showToolTip, selectedWord: { word } }) {
  const showClass = showToolTip ? "tooltip show" : "tooltip";

  const toolTipStyles = position
    ? {
        left: position.x,
        top: position.y
      }
    : "";

  return (
    { showToolTip } && (
      <div className={showClass} style={{ ...toolTipStyles }}>
        <div className="title">Top synonyms for "{word}"</div>
      </div>
    )
  );
}

export default ToolTip;
