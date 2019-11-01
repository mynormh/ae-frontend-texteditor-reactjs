export function createWordsCollection(text) {
  const wordsArray = text.split(" ");
  const wordsCollection = wordsArray.map((word, index) => ({
    index,
    word,
    format: {
      bold: false,
      italic: false,
      underline: false
    }
  }));
  return wordsCollection;
}

export function getPositions(e) {
  const { left, top, width } = e.target.getBoundingClientRect();
  const {
    left: parentLeft,
    top: parentTop
  } = e.target.parentNode.getBoundingClientRect();
  return {
    x: left - parentLeft + width,
    y: top - parentTop
  };
}
