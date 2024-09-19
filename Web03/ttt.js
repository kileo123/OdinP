const tttBoard = (() => {
  console.log("inside tttboard")
  const header = document.getElementById("header")
  header.textContent = "Odin Tic-Tac-Toe"

  const board = document.getElementById("board")
  const boardCells = new Array(9).fill("")
  
  boardCells.forEach((_, index) => {
    const cellElement = document.createElement("div")
    cellElement.classList.add("cells");
    cellElement.id = `cell-${index+1}`
    // cellElement.addEventListener("click", addGo)
    board.append(cellElement)
  })

  const footer = document.getElementById("footer")
  footer.innerHTML = `circle goes first`

  startGame();
})()

function startGame() {
  console.log("lets start")
  const allCells = document.querySelectorAll(".cells")
  const cells = Array.from(allCells)
  cells.forEach((_cell, index) => {
    cells[index].addEventListener("click", playTurn)
  })
}

var turn = "circle"

function playTurn(e) {
  const play = document.createElement("div")
  play.classList.add(turn)
  e.target.append(play)
  turn = turn === "circle" ? "cross" : "circle"
  e.target.removeEventListener("click", playTurn)

  const footer = document.getElementById("footer")
  footer.textContent = `${turn} turn now`
  checkWin();
}

function checkWin() {
  const allCells = document.querySelectorAll(".cells")
  const winningCombos = [[0,1,2], [3,4,5], [4,5,6],[0,3,6], [1,4,7], [2,5,8],[0,4,8], [2,4,6]]

  winningCombos.forEach(array => {
    const circleWins = array.every(cell => allCells[cell].firstChild?.classList.contains("circle"))
    const crossWins = array.every(cell => allCells[cell].firstChild?.classList.contains("cross"))
    if (circleWins){
      footer.textContent = "CIRCLE WINS !!!"
      allCells.forEach(cell => cell.replaceWith(cell.cloneNode(true)))
    } else if (crossWins){
      footer.textContent = "CROSS WINS !!!"
      allCells.forEach(cell => cell.replaceWith(cell.cloneNode(true)))
    } 
  })

  var empty = 9
  allCells.forEach((_, index) => {
    if(allCells[index].firstChild != null) {
      empty--
    }
  })
  empty === 0 ? footer.textContent = "IT'S A TIE !!!" : console.log("game continue")
}
