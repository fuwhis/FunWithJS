// Select element
const hueSlider = document.getElementById('hue')
const saturationSlider = document.getElementById('saturation')
const lightnessSlider = document.getElementById('lightness')
const hueValue = document.getElementById('hueValue')
const saturationValue = document.getElementById('saturationValue')
const lightnessValue = document.getElementById('lightnessValue')
const hslValueInput = document.getElementById('hslValue')
const colorDisplay = document.querySelector('.color-display')

function updateHSL() {
  const hue = hueSlider.value
  const saturation = saturationSlider.value
  const lightness = lightnessSlider.value

  hueValue.textContent = hue
  saturationValue.textContent = saturation
  lightnessValue.textContent = lightness

  const hsl = `${hue}°, ${saturation}%, ${lightness}%`

  // Bind the value to the input field and update color display
  hslValueInput.value = hsl
  colorDisplay.style.backgroundColor = hsl
}

hueSlider.addEventListener('input', updateHSL)
saturationSlider.addEventListener('input', updateHSL)
lightnessSlider.addEventListener('input', updateHSL)

updateHSL()
