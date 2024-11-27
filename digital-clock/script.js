let clock = document.getElementById('clock')

setInterval(() => {
  let date = new Date()
  const en = 'en-GB' // don't use full form Ante Meridiem
  clock.innerHTML = date.toLocaleTimeString(en)
})
