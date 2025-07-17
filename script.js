const container = document.querySelector("#container")
const initialSize = 16

// initialize initial 16x16 div blocks
for (let i = 0; i < initialSize; i++) {
  const div = document.createElement("div")
  div.classList.add("row")
  for (let j = 0; j < initialSize; j++) {
    const innerDiv = document.createElement("div")
    div.appendChild(innerDiv)
  }
  container.appendChild(div)
}

function generateRandomHexValue() {
  let letters = "0123456789ABCDEF"
  let color = "#"

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const colorSelector = document.querySelector("#colorSelector")
let selectedColor = "black"
let randomColorsActive = false

colorSelector.addEventListener("input", () => {
  selectedColor = colorSelector.value
})

const randomColorsToggle = document.querySelector(".random-colors > label > input")
randomColorsToggle.addEventListener("input", () => {
  randomColorsActive = randomColorsToggle.checked
  console.log(randomColorsActive)
})

// function opacityClosure(prevOpac) {
//   return function changeOpacity() {
//     const newOpac = (prevOpac += 0.1)
//     return newOpac
//   }
// }

container.addEventListener("mouseover", (e) => {
  let target = e.target
  if (randomColorsActive) {
    if (!target.style.backgroundColor) {
      target.style.backgroundColor = generateRandomHexValue()
      let opacity = parseFloat(target.style.opacity) || parseInt(0)
      opacity += 0.1
      target.style.opacity = opacity.toString()
    } else {
      let opacity = parseFloat(target.style.opacity)
      opacity += 0.1
      target.style.opacity = opacity.toString()
    }
  } else {
    target.style.backgroundColor = selectedColor
    let opacity = parseFloat(target.style.opacity) || parseInt(0)
    opacity += 0.1
    target.style.opacity = opacity.toString()
  }
})

const resetBtn = document.querySelector(".reset")

resetBtn.addEventListener("click", () => {
  const pixels = container.querySelectorAll("div")
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = "white"
  })
})

const sizeBtn = document.querySelector(".size")

sizeBtn.addEventListener("click", () => {
  let inputSize = prompt("Input grid size")
  while (inputSize > 100 || inputSize < 10 || !inputSize) {
    inputSize = prompt("Input grid size (min 10, max 100)")
  }

  const existingGrid = container.querySelectorAll("div")
  existingGrid.forEach((pixel) => {
    pixel.remove()
  })

  for (let i = 0; i < inputSize; i++) {
    const div = document.createElement("div")
    div.classList.add("row")
    for (let j = 0; j < inputSize; j++) {
      const innerDiv = document.createElement("div")
      div.appendChild(innerDiv)
    }
    container.appendChild(div)
  }
})
