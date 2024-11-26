let clock = document.getElementById('clock')

setInterval(() => {
  let date = new Date()
  const en = 'en-GB'
  const vn = 'vi-VN'
  clock.innerHTML = date.toLocaleTimeString(en)
})
