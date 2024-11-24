// DOM Elements
export const hueSlider = document.getElementById('hue')
export const saturationSlider = document.getElementById('saturation')
export const lightnessSlider = document.getElementById('lightness')
export const hueValue = document.getElementById('hueValue')
export const saturationValue = document.getElementById('saturationValue')
export const lightnessValue = document.getElementById('lightnessValue')
export const colorDisplay = document.querySelector('.color-display')
export const hslValueInput = document.getElementById('hslValue')

// Update the HSL display and color preview
export function updateHSL() {
  const hue = hueSlider.value
  const saturation = saturationSlider.value
  const lightness = lightnessSlider.value

  hueValue.textContent = hue
  saturationValue.textContent = saturation
  lightnessValue.textContent = lightness

  const hsl = `${hue}°, ${saturation}%, ${lightness}%`
  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`

  hslValueInput.value = hsl
  colorDisplay.style.backgroundColor = color
}
