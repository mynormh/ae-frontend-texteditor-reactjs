import React, { useState, useEffect } from "react";
import "./ToolTip.css";

function ToolTip({
  position,
  showToolTip,
  selectedWord: { word },
  loadingSynonyms,
  synonyms,
  handleSynonymClick
}) {
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
        {loadingSynonyms ? (
          <p>Loading...</p>
        ) : synonyms.length === 0 ? (
          <p>No synonyms found</p>
        ) : (
          synonyms.map((synonym, index) => (
            <div
              key={index}
              className="synonym"
              onClick={() => handleSynonymClick(synonym)}
            >
              {synonym}
            </div>
          ))
        )}
      </div>
    )
  );
}

export default ToolTip;
