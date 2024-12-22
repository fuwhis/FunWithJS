const addBtn = document.querySelector('#addBtn')
const main = document.querySelector('#main')
const snackBar = document.querySelector('#snackbar')

// Drag-and-drop functions
let draggedNote = null
let saveNoteText = 'Saved a note successfully.'
let removeNoteText = 'Removed the note successfully.'

const dragElement = (note) => {
  let offsetX = 0
  let offsetY = 0
  let isDragging = false

  note.addEventListener('mousedown', (e) => {
    isDragging = true

    // Calculate the offset between the mouse position and the note's top-left corner
    offsetX = e.clientX - note.getBoundingClientRect().left
    offsetY = e.clientY - note.getBoundingClientRect().top

    note.style.position = 'absolute'
    note.style.zIndex = 1000
    note.style.cursor = 'grab'

    // Temporarily attach mousemove event to the document for smooth dragging
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  })

  const onMouseMove = (e) => {
    if (!isDragging) return

    const mainRect = main.getBoundingClientRect()

    // Constrain movement within the main board
    const left = Math.min(
      Math.max(e.clientX - offsetX, mainRect.left),
      mainRect.right - note.offsetWidth
    )

    const top = Math.min(
      Math.max(e.clientY - offsetY, mainRect.top),
      mainRect.bottom - note.offsetHeight
    )

    note.style.left = `${left}px`
    note.style.top = `${top}px`
  }

  const onMouseUp = () => {
    isDragging = false

    // Remove temporary event listeners
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  }
}

const showSnackBar = (text, duration) => {
  snackBar.innerHTML = text || null
  snackBar.className = 'show'
  setTimeout(() => {
    snackBar.className = snackBar.className.replace('show', '')
  }, duration)
}

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

  // noteDiv.addEventListener('onmousedown', () => dragMouseDown(noteDiv))
  // noteDiv.addEventListener('dragover', (e) => handleDragOver(e))
  // noteDiv.addEventListener('drop', (e) => handleDrop(e))

  // Make the note draggable
  dragElement(noteDiv)

  main.appendChild(noteDiv)
}

const saveNote = (event) => {
  const { noteContainer, dataNoteId } = lookUpSelectedNote(event)

  const noteTitle = noteContainer.querySelector('input').value
  const noteContent = noteContainer.querySelector('textarea').value
  const noteData = {
    title: noteTitle || '',
    content: noteContent || '',
  }

  localStorage.setItem(dataNoteId, JSON.stringify(noteData))
  showSnackBar(saveNoteText, 3000)
}

const removeNote = (event) => {
  const { noteContainer, dataNoteId } = lookUpSelectedNote(event)

  // remove item in localStorage
  if (localStorage.getItem(dataNoteId)) {
    localStorage.removeItem(dataNoteId)
  } else {
    console.warn(`Note with ID ${dataNoteId} not found in localStorage.`)
  }

  // remove dom elements
  if (noteContainer) {
    noteContainer.remove()
    showSnackBar(removeNoteText, 3000)
  } else {
    console.warn(`Note DOM element with ID ${dataNoteId} not found.`)
  }
}

/**
 * Finds the closest parent element with the class 'note' and retrieves its data-note-id.
 * @params {Event} event - The event triggered by user interface.
 * @returns {{noteContainer: HTMLElement | null, dataNoteId: string | null}}
 * An object containing the note container element and its data-note-id.
 */
const lookUpSelectedNote = (event) => {
  const noteDiv = event.target.closest('.note')

  if (!noteDiv) {
    console.warn('No parent element with class "note" was found.')
    return { noteContainer: null, dataNoteId: null }
  }

  const noteId = noteDiv.getAttribute('data-note-id')

  if (!noteId) {
    console.warn('The element does not have a "data-note-id" attribute.')
    return { noteContainer: noteDiv, dataNoteId: null }
  }

  return { noteContainer: noteDiv, dataNoteId: noteId }
}

const createNoteDOMFromLocalStorage = (noteID, data) => {
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

  dragElement(noteDiv)

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
