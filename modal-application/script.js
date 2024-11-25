const openModalButtonElement = document.querySelector('#openModal')
const modalElement = document.querySelector('.modal')
const modalContentElement = document.querySelector('.modal_content')
const modalOverlayElement = document.querySelector('.modal_overlay')

openModalButtonElement.addEventListener('click', function () {
  modalElement.classList.add('open')
})

modalContentElement.addEventListener('click', function () {
  modalElement.classList.remove('open')
})

modalOverlayElement.addEventListener('click', () => {
  modalElement.classList.remove('open')
})
