const element = document.getElementsByTagName('li')
const screen = document.querySelector('p')
const clear = document.getElementById('clear')

for (let i = 0; i < element.length; i += 1) {
  if (element[i].innerHTML === '=') {
    element[i].addEventListener('click', calculate(i))
  } else {
    element[i].addEventListener('click', addToCurrentValue(i))
  }
}

function addToCurrentValue(index) {
  return function () {
    if (element[index].innerHTML === 'x') {
      screen.innerHTML += '*'
    } else {
      screen.innerHTML += element[index].innerHTML
    }
  }
}

function calculate(index) {
  return function () {
    screen.innerHTML = eval(screen.innerHTML)
  }
}

clear.onclick = function () {
  screen.innerHTML = ' '
}
