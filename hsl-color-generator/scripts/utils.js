export function copyToClipboard() {
  const hue = document.getElementById('hue')
  const saturation = document.getElementById('saturation')
  const lightness = document.getElementById('lightness')

  const hslString = `hsl(${hue.value}, ${saturation.value}%, ${lightness.value}%)`

  navigator.clipboard
    .writeText(hslString)
    .then(() => alert('✅ The color is Copy to Clipboard.'))
    .catch((err) => console.error('Unable to Copy the Color', err))
}
