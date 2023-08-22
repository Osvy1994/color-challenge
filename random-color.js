const hexColor = document.getElementById('hex-color')
const button = document.getElementById('button-color')
const section1 = document.getElementById('section1')


function changeColor() {
  let digits = '0123456789abcdef'
  let hex = '#'

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * 16)
    hex += digits[randomIndex]
  }
  return hex
}

button.addEventListener('click', () => {
  let randomColor = changeColor()
  hexColor.innerText = randomColor
  section1.style.backgroundColor = randomColor
  button.style.backgroundColor = randomColor
})