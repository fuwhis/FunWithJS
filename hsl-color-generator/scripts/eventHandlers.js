import {
  hueSlider,
  lightnessSlider,
  saturationSlider,
  updateHSL,
} from './domUtils.js'
import { copyToClipboard } from './utils.js'

export function initializeEventHandlers() {
  hueSlider.addEventListener('input', updateHSL)
  saturationSlider.addEventListener('input', updateHSL)
  lightnessSlider.addEventListener('input', updateHSL)

  const copyButton = document.getElementById('copyButton')
  copyButton.addEventListener('click', copyToClipboard)
}
