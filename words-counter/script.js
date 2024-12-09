document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("textarea");
  [characterCount, wordCount, sentenceCount] = [
    document.querySelector("#characterCount"),
    document.querySelector("#wordCount"),
    document.querySelector("#sentenceCount"),
  ];

  /**
   * Calculate Function
   * @param {typed texture in textare} text
   */
  const calculateCounts = (text) => {
    const trimmedText = input.value.trim();

    // Character count
    const characters = trimmedText.length;

    // Words count
    const words = trimmedText.split(/\s+/).filter((word) => word.length > 0 && word !== '...');

    // Sentence count
    const sentences = trimmedText
      .split(/[.!?]+/)
      .filter((sentence) => sentence.trim().length > 0 && sentence.trim() !== '...');

    return { characters, words: words.length, sentences: sentences.length };
  };

  input.addEventListener("input", () => {
    const { characters, words, sentences } = calculateCounts(input.value);

    characterCount.textContent = characters;
    wordCount.textContent = words;
    sentenceCount.textContent = sentences;
  });
});
