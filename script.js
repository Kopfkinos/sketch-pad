const container = document.querySelector("#container")
const initialSize = 16

for (let i = 0; i < initialSize; i++) {
  const div = document.createElement("div")
  div.classList.add("row")
  for (let j = 0; j < initialSize; j++) {
    const innerDiv = document.createElement("div")
    div.appendChild(innerDiv)
  }
  container.appendChild(div)
}

container.addEventListener("mouseover", (e) => {
  let target = e.target
  if (target.tagName === "DIV") {
    target.classList.add("filled-in")
  }
})

const resetBtn = document.querySelector(".reset")

resetBtn.addEventListener("click", () => {
  const pixels = container.querySelectorAll("div")
  pixels.forEach((pixel) => {
    pixel.classList.remove("filled-in")
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
