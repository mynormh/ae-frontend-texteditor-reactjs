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
