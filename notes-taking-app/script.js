const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

const cloneNote = () => {
  const noteId = Math.floor(Math.random() * 100);
  const noteDiv = document.createElement("div");
  const toolDiv = document.createElement("div");
  const inputTitle = document.createElement("input");
  const iconsDiv = document.createElement("div");
  const iconSave = document.createElement("i");
  const iconDelete = document.createElement("i");
  const textArea = document.createElement("textarea");

  // Set attributes
  noteDiv.setAttribute("class", "note");
  noteDiv.setAttribute("data-note-id", noteId);
  toolDiv.setAttribute("class", "tool");
  inputTitle.setAttribute("type", "text");
  inputTitle.id = "note-title";
  iconsDiv.setAttribute("class", "icons");
  iconSave.setAttribute("class", "fas fa-save");
  iconDelete.setAttribute("class", "fas fa-trash");

  // Clear values from cloned elements (optional)
  inputTitle.value = ""; // Clear input field
  textArea.value = ""; // Clear textarea content

  iconSave.addEventListener("click", (e) => saveNote(e));
  iconDelete.addEventListener("click", (e) => removeNote(e));

  // Append children
  toolDiv.appendChild(inputTitle);
  toolDiv.appendChild(iconsDiv);
  iconsDiv.appendChild(iconSave);
  iconsDiv.appendChild(iconDelete);

  noteDiv.appendChild(toolDiv);
  noteDiv.appendChild(textArea);

  main.appendChild(noteDiv);
};

const saveNote = (event) => {
  // const noteDiv = event.target.closest(".note"); // find the closest note's data
  // const noteId = noteDiv.getAttribute("data-note-id");
  const { noteContainer, dataNoteId } = lookUpSelectedNote(event);

  const noteTitle = noteContainer.querySelector("input").value;
  const noteContent = noteContainer.querySelector("textarea").value;
  const noteData = {
    title: noteTitle || "",
    content: noteContent || "",
  };

  localStorage.setItem(dataNoteId, JSON.stringify(noteData));
  console.log("save-note", dataNoteId, JSON.stringify(noteData));
};

const removeNote = (event) => {
  const { noteContainer, dataNoteId } = lookUpSelectedNote(event);
  
  console.log("remove note", noteContainer, dataNoteId);
};

const lookUpSelectedNote = (event) => {
  // find the closest note's data
  const noteDiv = event.target.closest(".note");
  const noteId = noteDiv.getAttribute("data-note-id");
  return { noteContainer: noteDiv, dataNoteId: noteId };
};

const loadNote = () => {
  if (window.localStorage.length !== 0 && window.localStorage !== undefined) {
    for (const key in localStorage) {
      const notes = JSON.parse(localStorage.getItem(key));
      const newNote = cloneNote();
      newNote.setAttribute("data-note-id", key);

      const noteTitle = document.querySelector("#note-title");
      const noteContent = document.querySelector("textarea");

      console.log(noteTitle);
      noteTitle.value = notes.title || "";
      noteContent.value = notes.content || "";

      main.appendChild(newNote);
    }
  }
};

addBtn.addEventListener("click", cloneNote);

window.onload = () => {
  loadNote();
};
