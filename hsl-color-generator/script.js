document.addEventListener('DOMContentLoaded', function () {
  // Select element
  const hueSlider = document.getElementById('hue')
  const saturationSlider = document.getElementById('saturation')
  const lightnessSlider = document.getElementById('lightness')

  const hueValue = document.getElementById('hueValue')
  const saturationValue = document.getElementById('saturationValue')
  const lightnessValue = document.getElementById('lightnessValue')

  const colorDisplay = document.querySelector('.color-display')
  const hslValueInput = document.getElementById('hslValue')

  const copyButton = document.getElementById('copyButton')

  function updateHSL() {
    const hue = hueSlider.value
    const saturation = saturationSlider.value
    const lightness = lightnessSlider.value

    hueValue.textContent = hue
    saturationValue.textContent = saturation
    lightnessValue.textContent = lightness

    const hsl = `${hue}°, ${saturation}%, ${lightness}%`
    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`

    // Bind the value to the input field and update color display
    hslValueInput.value = hsl
    colorDisplay.style.backgroundColor = color
  }

  copyButton.addEventListener('click', copyToClipboard)

  function copyToClipboard() {
    const textToCopy = `hsl(${hueSlider.value}, ${saturationSlider.value}%, ${lightnessSlider.value}%)`

    navigator.clipboard
      .writeText(textToCopy)
      .then(function () {
        alert('✅ The color is Copy to Clipboard.')
      })
      .catch(function (err) {
        console.log('Unable to Copy the Color', err)
      })
  }

  hueSlider.addEventListener('input', updateHSL)
  saturationSlider.addEventListener('input', updateHSL)
  lightnessSlider.addEventListener('input', updateHSL)

  updateHSL()
})
