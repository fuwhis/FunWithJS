const addBtn = document.querySelector('#addBtn')
const main = document.querySelector('#main')

const createNoteDOM = () => {
  const noteId = Math.floor(Math.random() * 100)
  const noteDiv = document.createElement('div')
  const toolDiv = document.createElement('div')
  const inputTitle = document.createElement('input')
  const iconsDiv = document.createElement('div')
  const iconSave = document.createElement('i')
  const iconDelete = document.createElement('i')
  const textArea = document.createElement('textarea')

  // Set attributes
  noteDiv.setAttribute('class', 'note')
  noteDiv.setAttribute('data-note-id', noteId)
  toolDiv.setAttribute('class', 'tool')
  inputTitle.setAttribute('type', 'text')
  inputTitle.id = 'note-title'
  iconsDiv.setAttribute('class', 'icons')
  iconSave.setAttribute('class', 'fas fa-save')
  iconDelete.setAttribute('class', 'fas fa-trash')

  // Clear values from cloned elements (optional)
  inputTitle.value = '' // Clear input field
  textArea.value = '' // Clear textarea content

  iconSave.addEventListener('click', (e) => saveNote(e))
  iconDelete.addEventListener('click', (e) => removeNote(e))

  // Append children
  toolDiv.appendChild(inputTitle)
  toolDiv.appendChild(iconsDiv)
  iconsDiv.appendChild(iconSave)
  iconsDiv.appendChild(iconDelete)

  noteDiv.appendChild(toolDiv)
  noteDiv.appendChild(textArea)

  main.appendChild(noteDiv)
}

const saveNote = (event) => {
  // const noteDiv = event.target.closest(".note"); // find the closest note's data
  // const noteId = noteDiv.getAttribute("data-note-id");
  const { noteContainer, dataNoteId } = lookUpSelectedNote(event)

  const noteTitle = noteContainer.querySelector('input').value
  const noteContent = noteContainer.querySelector('textarea').value
  const noteData = {
    title: noteTitle || '',
    content: noteContent || '',
  }

  localStorage.setItem(dataNoteId, JSON.stringify(noteData))
  console.log('save-note', dataNoteId, JSON.stringify(noteData))
}

const removeNote = (event) => {
  const { noteContainer, dataNoteId } = lookUpSelectedNote(event)

  console.log('remove note', noteContainer, dataNoteId)
}

const lookUpSelectedNote = (event) => {
  // find the closest note's data
  const noteDiv = event.target.closest('.note')
  const noteId = noteDiv.getAttribute('data-note-id')
  return { noteContainer: noteDiv, dataNoteId: noteId }
}

const createNoteDOMFromLocalStorage = (noteID, data) => {
  console.log(`params:`, noteID, data)
  const noteId = noteID
  const noteDiv = document.createElement('div')
  const toolDiv = document.createElement('div')
  const inputTitle = document.createElement('input')
  const iconsDiv = document.createElement('div')
  const iconSave = document.createElement('i')
  const iconDelete = document.createElement('i')
  const textArea = document.createElement('textarea')

  // Set attributes
  noteDiv.setAttribute('class', 'note')
  noteDiv.setAttribute('data-note-id', noteId)
  toolDiv.setAttribute('class', 'tool')
  inputTitle.setAttribute('type', 'text')
  inputTitle.id = 'note-title'
  iconsDiv.setAttribute('class', 'icons')
  iconSave.setAttribute('class', 'fas fa-save')
  iconDelete.setAttribute('class', 'fas fa-trash')

  // Clear values from cloned elements (optional)
  inputTitle.value = data?.title // Clear input field
  textArea.value = data?.content // Clear textarea content

  iconSave.addEventListener('click', (e) => saveNote(e))
  iconDelete.addEventListener('click', (e) => removeNote(e))

  // Append children
  toolDiv.appendChild(inputTitle)
  toolDiv.appendChild(iconsDiv)
  iconsDiv.appendChild(iconSave)
  iconsDiv.appendChild(iconDelete)

  noteDiv.appendChild(toolDiv)
  noteDiv.appendChild(textArea)

  main.appendChild(noteDiv)
}

const loadNote = () => {
  if (window.localStorage.length !== 0 && window.localStorage !== undefined) {
    const noteKey = Object.entries(localStorage)

    for ([key, value] of noteKey) {
      const noteData = JSON.parse(value)
      createNoteDOMFromLocalStorage(key, noteData)
    }
  }
}

addBtn.addEventListener('click', createNoteDOM)

window.onload = () => {
  loadNote()
}
