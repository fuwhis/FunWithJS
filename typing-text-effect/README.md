# Typing Text Effect with JavaScript

A simple and interactive typing text effect using pure JavaScript to enhance the visual appeal of web pages.

## 🚀 Features

- Dynamic typing and erasing effect for words.
- Smooth transitions between words.
- Lightweight and easy to integrate into any webpage.

## 🛠️ How It Works

### 1. Element Selection:

The `h1 span` element is selected using `document.querySelector`, where the dynamic text will appear.

```js
const dynamicText = document.querySelector("h1 span");
```

### 2. Word Management:

An array of words (words) holds the text to display dynamically. Variables wordIndex and charIndex track the current word and character.

```javascript
const words = ["Fun", "Love", "the World", "Life", "True Love"];
let wordIndex = 0;
let charIndex = 0;
```

### 3. Typing Effect:

The function typeEffect manages the typing and transition logic:

- Characters are typed one by one until the entire word is displayed.
- A delay occurs before moving to the next word, looping back to the start when all words are typed.

```javascript
const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChars = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChars;

  if (charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 300);
  } else {
    charIndex = 0;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 1000);
  }
};
```

### 4. Initialization:

The typing effect is initiated by calling `typeEffect`:

```javascript
typeEffect();
```

## 🎨 Example

Add the following HTML structure to your webpage:

```html
<h1>Experience <span></span>!</h1>
```

Include the JavaScript code to see the effect in action.

## 🌟 Future Enhancements

- **Add Backspace Animation**: Simulate typing backspace before starting a new word.
- **Dynamic Speed Control**: Allow different typing speeds for each word.
- **Pause and Resume**: Add user controls to pause or resume the effect.
- **Custom Word Input**: Let users add their own words dynamically.
- **CSS Styling**: Add custom animations and styling to the typed text for enhanced visuals.

## 💡 Usage Notes

- Ensure the `h1` element and its `span` child exist in your HTML structure.
- Customize the `words` array to fit your use case.
- Adjust `setTimeout` values in the `typeEffect` function to control typing and delay speed.

---

Feel free to contribute enhancements or report issues! 😊
