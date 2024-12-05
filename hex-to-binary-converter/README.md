# Hex to Binary Converter (HTML)

A lightweight web-based tool that converts **hexadecimal numbers** to **binary** with a clean, user-friendly interface. This project demonstrates how to implement basic number system conversions using **HTML**, **CSS**, and **JavaScript**.

---

## 🎗️ Mathematics Remindation: Hexadecimal and Binary Numbers

### 1. Hexadecimal

A **hexadecimal number** is expressed in the base-16 numeral system. It uses 16 symbols as digits:  
`0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F`.

Each digit of a hexadecimal number represents a power of 16.

#### 👉 Example:

$$
62C_{16} = 6 \cdot 16^2 + 2 \cdot 16^1 + 12 \cdot 16^0 = 1580_{10}
$$

### 2. Binary

A **binary number** is expressed in the base-2 numeral system. It uses 2 symbols as digits: `0` (zero) and `1` (one).

Each digit of a binary number represents a power of 2.

#### 👉 Example:

$$
1101_{2} = 1 \cdot 2^3 + 1 \cdot 2^2 + 0 \cdot 2^1 + 1 \cdot 2^0 = 13_{10}
$$

### How to Convert Hex to Binary

Convert each hexadecimal digit (starting from the lowest digit) to **4 binary digits** using this table:

| Hex | Binary |
| --- | ------ |
| 0   | 0000   |
| 1   | 0001   |
| 2   | 0010   |
| 3   | 0011   |
| 4   | 0100   |
| 5   | 0101   |
| 6   | 0110   |
| 7   | 0111   |
| 8   | 1000   |
| 9   | 1001   |
| A   | 1010   |
| B   | 1011   |
| C   | 1100   |
| D   | 1101   |
| E   | 1110   |
| F   | 1111   |

#### 👉 Example:

Convert hex 6C16 to binary:

$$
6C_{16} = 6C = 110 \, 1100 = 1101100_{2}
$$

## Features

- **Instant Conversion**: Convert basic valid hexadecimal number to binary with real-time results.
- **Simple Interface**: Minimalistic design for quick and easy use.
- **Error Handling**: Alerts for invalid inputs to ensure accurate conversions.
  <!-- - **Responsive Design**: Fully optimized for desktop and mobile browsers. -->

## Purpose

This repository serves as:

- A practical example of handling number system conversions in **JavaScript**.
- A beginner-friendly project to understand the interaction between **HTML**, **CSS**, and **JavaScript**.
- A reusable utility for developers and learners working with hexadecimal and binary numbers.

## How to Use

1. Clone the repository:

```bash
git clone https://github.com/fuwhis/FunWithJS.git
```

2. Navigate to the project folder:

```bash
cd FunWithJS
```

3. Select **_hex-to-binary-converter_** project & Open `index.html` in your browser to view the app then.

---

## 🚀 Future Improvements

Here are some ideas for enhancing the project in the future:

- **Add Decimal and Octal Support**: Expand the converter to handle decimal and octal number systems for more flexibility.
- **Reverse Conversion**: Enable binary-to-hexadecimal conversion to make the tool bidirectional.
- **Copy to Clipboard**: Add a button to quickly copy the binary result to the clipboard.
- **Theme Toggle**: Implement a light/dark mode switch for a better user experience.
- **Input Validation Enhancements**: Improve error handling with detailed messages for invalid input formats.
- **Offline Support**: Use a service worker to make the tool available offline.
- **Conversion History**: Add a feature to save and display a history of conversions during a session.
- **Animations**: Introduce subtle animations for a smoother user interface.
- **Accessibility Improvements**: Enhance ARIA roles and keyboard navigation for better accessibility.
- **PWA (Progressive Web App)**: Convert the project into a PWA for easy installation on devices.
- **Unit Testing**: Add unit tests for the conversion logic to ensure reliability and accuracy.

## 🤝 Contributions Welcome!

Feel free to fork this repository, open issues, or submit pull requests to enhance functionality and add features.
