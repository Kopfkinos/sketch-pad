const container = document.querySelector("#container")

for (let i = 0; i < 16; i++) {
  const div = document.createElement("div")
  div.classList.add("row")
  for (let j = 0; j < 16; j++) {
    const innerDiv = document.createElement("div")
    div.appendChild(innerDiv)
  }
  container.appendChild(div)
}
