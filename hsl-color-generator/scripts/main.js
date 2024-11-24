import { updateHSL } from './domUtils.js'
import { initializeEventHandlers } from './eventHandlers.js'

// Run any necessary initialization
document.addEventListener('DOMContentLoaded', () => {
  updateHSL() // Initialize the UI
  initializeEventHandlers() // Attach event listeners
})
