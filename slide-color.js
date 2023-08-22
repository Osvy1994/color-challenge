const section2 = document.getElementById('section2')

const redSlide = document.getElementById('red')
const greenSlide = document.getElementById('green')
const blueSlide = document.getElementById('blue')

const redText = document.getElementById('red-text')
const greenText = document.getElementById('green-text')
const blueText = document.getElementById('blue-text')

let red = redSlide.value
let green = greenSlide.value
let blue = blueSlide.value

function changeSlide(red, green, blue) {
  const colorRGB = `rgb(${red}, ${green}, ${blue})`
  section2.style.backgroundColor = colorRGB
}

redSlide.addEventListener('change', (e) => {
  red = e.target.value
  redText.innerText = red
  changeSlide(red, green, blue)
})

greenSlide.addEventListener('change', (e) => {
  green = e.target.value
  greenText.innerText = green
  changeSlide(red, green, blue)
})

blueSlide.addEventListener('change', (e) => {
  blue = e.target.value
  blueText.innerText = blue
  changeSlide(red, green, blue)
})