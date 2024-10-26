const container = document.getElementById("container")
const pvpBtn = document.getElementById("pvpBtn")
const pvbBtn = document.getElementById("pvbBtn")
const bvbBtn = document.getElementById("bvbBtn")

class Ship{
  constructor(name, length){
    this.name = name
    this.length = length
    this.flipped = false
    this.hit = 0
    this.sunk = false
  }
  hit(){
    this.hit++
  }
  isSunk(){
    if (this.hit >= this.length){
      this.sunk = true
    }
  }
}

const GRIDSIZE = 10;
let rotated = false
const gameBoardContainer = document.createElement("div")
gameBoardContainer.classList.add("gameBoardContainer")

bvbBtn.addEventListener("click", () => {
  container.innerHTML=`<h3>Bot vs Bot</h3>`
  drawGameBoard("p1")
  drawShipBoard("shipLibrary")
  container.appendChild(gameBoardContainer)
})

function drawGameBoard(id){
  const gameBoard = document.createElement("div")
  gameBoard.classList.add("gameBoard")
  gameBoard.id = id
  gameBoardContainer.appendChild(gameBoard)

  for (let i = 0; i < GRIDSIZE**2; i++){
    const grid = document.createElement("div")
    grid.classList.add("grid")
    grid.id = i
    gameBoard.append(grid)
  }
}

function drawShipBoard(id){
  const shipBoard = document.createElement("div")
  const shipList = document.createElement("div")
  const flipBtn = document.createElement("button")
  const shipContainer = []
  const ship = []
  shipBoard.classList.add("shipBoard")
  shipBoard.id = id
  shipList.classList.add("shipList")
  for (let i = 0; i<5; i++){
    shipContainer[i] = document.createElement("div")
    shipContainer[i].classList.add(`shipContainer`)
    ship[i] = document.createElement("div")
    ship[i].classList.add(`ship${i}-preview`)
    ship[i].classList.add(`ship${i}`)
    ship[i].setAttribute("draggable", "true")          
    shipContainer[i].appendChild(ship[i])
    shipList.appendChild(shipContainer[i])
  }
  shipBoard.appendChild(shipList)
  flipBtn.id="flip-button"
  flipBtn.innerText="Rotate"
  shipBoard.appendChild(flipBtn)
  gameBoardContainer.appendChild(shipBoard)

  flipBtn.addEventListener("click", () =>{
    rotated = !rotated
    ship.forEach((_, i) => {
      if (rotated) {
        ship[i].classList.add("rotated")
      } else {
        ship[i].classList.remove("rotated")
      }
    })
  })
}

