const upload = document.querySelector('input')
const image = document.querySelector('.img img')
const close = document.querySelector('.icon .close')
const wrapper = document.querySelector('.wrapper')

upload.addEventListener('change', (e) => {
  uploadFile(e)
})

function uploadFile(event) {
  const file = event.target.files && event.target.files[0]

  if (file) {
    const img = new Image()

    img.onload = function () {
      const { width, height } = img

      // Dynamically adjust the wrapper dimensions
      wrapper.style.width = `${width}px`
      wrapper.style.height = `${height}px`

      // Set the image source to display the uploaded image
      image.src = URL.createObjectURL(file)
      image.classList.add('active')
      close.classList.add('exit')
    }

    img.src = URL.createObjectURL(file) // Trigger the onload event
  }

  close.addEventListener('click', () => {
    image.classList.remove('active')
    close.classList.remove('exit')

    // Reset wrapper dimensions
    wrapper.style.width = '700px'
    wrapper.style.height = '500px'
  })
}
