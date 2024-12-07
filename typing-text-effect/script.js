const dynamicText = document.querySelector("h1 span");
const words = ["Fun", "Love", "the World", "Life", "True Love"];

let wordIndex = 0;
let charIndex = 0;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChars = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChars;

  if (charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 300);
  } else {
    charIndex = 0;
    if (wordIndex >= words.length - 1) {
      wordIndex = 0;
    } else {
      wordIndex++;
    }
    setTimeout(typeEffect, 1000);
  }
};

typeEffect();
