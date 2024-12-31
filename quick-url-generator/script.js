const bookMarkForm = document.getElementById('bookmarkForm')
const siteNameInput = document.getElementById('siteName')
const siteURLInput = document.getElementById('siteUrl')
const bookmarkList = document.getElementById('bookmarkList')

bookMarkForm.addEventListener('submit', (e) => addBookmark(e))

const addBookmark = (event) => {
  event.preventDefault()

  const siteNameValue = siteNameInput.value
  const siteURLValue = siteURLInput.value

  if (!validateForm(siteNameValue, siteURLValue)) {
    return
  }

  if (isDuplicatedBookmark(siteNameValue, siteURLValue)) {
    alert('This bookmark already exists.')
    return
  }

  const bookmark = {
    name: siteNameValue,
    url: siteURLValue,
  }
  saveBookmark(bookmark)

  displayBookmark(bookmark)

  siteNameInput.value = ''
  siteURLInput.value = ''
}

const validateForm = (siteName, siteURL) => {
  if (!siteName || !siteURL) {
    alert('Please fill in both fields.')
    return
  }

  try {
    new URL(siteURL)
    return true
  } catch (error) {
    alert('Please enter a valid URL.')
  }
}

const displayBookmark = (bookmarkData) => {
  const bookmarkItem = document.createElement('li')
  const link = document.createElement('a')
  link.href = bookmarkData.url
  link.textContent = bookmarkData.name
  link.target = '_blank'

  // removal items
  const removeButton = document.createElement('button')
  removeButton.innerHTML = '<i class="fas fa-trash-alt"></i>'
  removeButton.addEventListener('click', () => removeBookmark(bookmarkData))

  bookmarkItem.appendChild(link)
  bookmarkItem.appendChild(removeButton)
  bookmarkList.appendChild(bookmarkItem)
}

const saveBookmark = (data) => {
  let bookmarks = getBookmarks()
  bookmarks.push(data)
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
}

const getBookmarks = () => {
  return JSON.parse(localStorage.getItem('bookmarks')) || []
}

const displayBookmarks = () => {
  let bookmarks = getBookmarks()

  bookmarks.forEach((element) => {
    displayBookmark(element)
  })
}

const isDuplicatedBookmark = (siteName, siteURL) => {
  let bookmarks = getBookmarks()

  return bookmarks.some(
    (bookmark) =>
      bookmark.name.toLowerCase() === siteName.toLowerCase() &&
      bookmark.url.toLowerCase() === siteURL.toLowerCase()
  )
}

const removeBookmark = (bookmark) => {
  let bookmarks = getBookmarks()

  bookmarks = bookmarks.filter(
    (element) =>
      element.name.toLowerCase() !== bookmark.name.toLowerCase() ||
      element.url.toLowerCase() !== bookmark.url.toLowerCase()
  )
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
  clearBookmarkList()
  displayBookmarks()
}

const clearBookmarkList = () => {
  bookmarkList.innerHTML = ''
}

document.addEventListener('DOMContentLoaded', displayBookmarks)
