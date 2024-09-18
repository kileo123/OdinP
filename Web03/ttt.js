const tttBoard = (() => {
  console.log("inside tttboard")
  const board = document.getElementById("board")
  const header = document.getElementById("header")
  const boardCells = new Array(9).fill("")
  
  header.textContent = "Odin Tic-Tac-Toe"

  boardCells.forEach((cell, index) => {
    const cellElement = document.createElement("div")
    cellElement.classList.add("cells");
    cellElement.id = `cell${index+1}`
    board.append(cellElement)
  })

})()