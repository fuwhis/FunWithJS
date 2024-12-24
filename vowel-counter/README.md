# Vowel Counter

## Abstract

The Vowel Counter is an interactive web application that leverages JavaScript logic to identify and enumerate vowels within a user-provided text input. Designed for simplicity and efficiency, this tool demonstrates fundamental concepts in string manipulation, user interaction, and responsive web design.

## Functional Features

- [x] Accepts user input through a text area.
- [x] Counts and displays the total number of vowels in real time.
- [ ] Handles both uppercase and lowercase characters.
- [x] Provides an intuitive and user-friendly interface.

## Technical Framework

### Core Technologies

- **HTML**: Establishes the structural foundation of the application.

- **CSS**: Ensures aesthetic integrity and responsive design.

- **JavaScript**: Implements the algorithmic logic to parse and analyze the input text.

### Execution Process

1. User input is captured via a textarea element.

2. A JavaScript function checkVowels iterates through each character in the input string.

3. A helper function isVowel validates if a character is a vowel (a, e, i, o, u) in a case-insensitive manner.

4. The cumulative count is dynamically rendered to the user interface.

## Future Enhancements

To augment the current functionality, the following features could be added:
- **Consonant Enumeration**: Extend the application to count consonants alongside vowels.

- **Real-Time Feedback**: Update the vowel count dynamically as the user types.

- **Multilingual Support**: Incorporate accented vowels from other languages.

- **Mobile Optimization**: Refine the design for enhanced usability on smaller screens.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/fuwhis/FunWithJS.git
   ```
2. Navigate to the project directory:
   ```bash
   cd notes-taking-app
   ```
3. Open `index.html` in your browser to run the application.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push your changes:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License
This project is licensed under the [MIT License](LICENSE).
