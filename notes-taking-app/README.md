# Notes Application

## Introduction
The Notes Application allows users to create, edit, save, delete, and now, drag and reorder notes dynamically within the application. This functionality enhances the user experience by providing flexibility in organizing notes based on priority or relevance.

## Features

### Current Features
1. **Create Notes**
   - Users can add new notes with a title and content area.

2. **Edit Notes**
   - Notes can be edited and saved, with the content persisting in `localStorage`.

3. **Delete Notes**
   - Users can remove notes from both the DOM and `localStorage`.

4. **Drag-and-Drop Notes**
   - Notes can be reordered by dragging them within the application.
   - Supports visual feedback during dragging.
   - Dynamically updates the DOM to reflect new positions.

### Future Features
1. **Persist Drag-and-Drop Order**
   - Save the order of notes in `localStorage` to ensure the same arrangement is restored upon reloading the page.

2. **Color-Coded Notes**
   - Allow users to assign colors to notes for better categorization.

3. **Search and Filter**
   - Add a search bar to quickly find notes by title or content.
   - Enable filtering by tags or categories.

4. **Rich Text Editing**
   - Enhance the note editor with rich text formatting options such as bold, italics, and lists.

5. **Collaborative Notes**
   - Introduce real-time collaboration features for multiple users to edit notes simultaneously.

6. **Export and Import Notes**
   - Allow users to export notes to a file or import notes from external files.

## How to Use
1. **Add a Note**
   - Click the `Add Note` button to create a new note.
   - Fill in the title and content fields.

2. **Save a Note**
   - Click the save icon to store the note in `localStorage`.

3. **Delete a Note**
   - Click the trash icon to remove the note.

4. **Reorder Notes**
   - Click and drag a note to a new position. Release the note to drop it in the desired spot.

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

## Contact
For questions or feedback, please contact:
- **Author**: Fuwhis
- **Email**: quynp01@gmail.com
