// your JavaScript file
const container = document.querySelector("#container")

function createSquares(num) {
  for (let i = 1; i <= num; i++) {
      const square = document.createElement("div")
      square.classList.add("square")
//      square.textContent = i
//      square.style.fontSize = "x-small"
//      square.style.border = "1px solid pink"
      square.style.alignContent = "center"
      square.style.justifyContent = "center"
      square.style.opacity = 0;
      container.appendChild(square)
  }
  const squares = document.querySelectorAll(".square")
  squares.forEach((square) => {
      square.style.width = (100/squaresize) + "%"
      square.style.height = (100/squaresize) + "%"
      let r = Math.floor(Math.random() * 256)
      let g = Math.floor(Math.random() * 256)
      let b = Math.floor(Math.random() * 256)
      square.addEventListener("mouseover", () => {
          square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
          let currentOpacity = parseFloat(square.style.opacity)
          square.style.opacity = (currentOpacity+0.1)
      });
  });
}

const squaresize = 16
createSquares(squaresize*squaresize)