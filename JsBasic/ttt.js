const startButton = document.getElementById("startbutton")
startButton.addEventListener("click", () =>{
  const board = document.getElementById("board")
  board.innerHTML="" 
  game.start()
})

const tttBoard = (() => {
  const board = document.getElementById("board")
  const boardCells = new Array(9).fill("")
  
  const makeBoard = () => {
    boardCells.forEach((_, index) => {
      const cellElement = document.createElement("div")
      cellElement.classList.add("cells");
      cellElement.id = `cell-${index+1}`
      cellElement.addEventListener("click", game.handleClick)
      board.append(cellElement)
    })
  }

  return {
    makeBoard
  }
})()

class Player {
  constructor (name, mark, win, score) {
    this.name = name
    this.mark = mark
    this.win = win
    this.score = score
  }
}

const createDialog = (() => {
  const dialog = document.createElement("dialog")
  dialog.id = "getname"
  dialog.innerHTML=`
    <form method="dialog" id="getplayername">
      <div><label for="p1label">Player 1 (circle)</label><input type="text" id="p1name" value="Player 1" required></div>
      <div><label for="p2label">Player 2 (cross)</label><input type="text" id="p2name" value="Player 2" required></div>
      <div><button id="submitbutton" value="submit">Submit</button></div>
    </form>
  `
  document.body.appendChild(dialog)
})()

const game = (() => {
  const players = []

  const start = () => {
    const getname = document.getElementById("getname")
    getname.showModal()
    const playerdialog = document.getElementById("getplayername")
    playerdialog.addEventListener("submit", (event) =>{
      event.preventDefault()
      const p1name = document.getElementById("p1name").value
      const p2name = document.getElementById("p2name").value
      players.push(new Player(p1name, "circle", false, 0))
      players.push(new Player(p2name, "cross", false, 0))
      getname.close()
      const footer = document.getElementById("bottomfooter")
      footer.textContent = `${players[0].name} start first`
      })
    tttBoard.makeBoard()
  }

  const handleClick = (e) => {
    let filled=0
    let turn=0
    
    const allCells = document.querySelectorAll(".cells")
    allCells.forEach((_, index) => {
      if(allCells[index].firstChild != null) {
        filled++
      }
    })
    turn=filled%2

    const play = document.createElement("div")
    play.classList.add(players[turn].mark)
    e.target.append(play)
    e.target.removeEventListener("click", handleClick)
    
    filled++
    turn=filled%2
    checkWin()
    const footer = document.getElementById("bottomfooter")
    if (filled < 9 && players[0].win == false && players[1].win == false )  {
      footer.textContent = `${players[turn].name} turn now`
    } else {
      if(players[0].win == false && players[1].win == false){
        footer.innerHTML = `
          <span>IT'S A TIE ! ${players[0].score} - ${players[1].score}</span>
          <span><button id="replaybutton">Play Again</button></span>
        `
        playAgain()
      }
    }
  }

  const checkWin = () => {
    const allCells = document.querySelectorAll(".cells")
    const winningCombos = [[0,1,2], [3,4,5], [6,7,8],[0,3,6], [1,4,7], [2,5,8],[0,4,8], [2,4,6]]
  
    const footer = document.getElementById("bottomfooter")
    winningCombos.forEach(array => {
      const circleWins = array.every(cell => allCells[cell].firstChild?.classList.contains("circle"))
      const crossWins = array.every(cell => allCells[cell].firstChild?.classList.contains("cross"))
      if (circleWins){
        players[0].win = true
        players[0].score++
        footer.innerHTML = `
          <span>${players[0].name} WIN, Score: ${players[0].score} - ${players[1].score}</span>
          <span><button id="replaybutton">Play Again</button></span>
        `
        allCells.forEach(cell => cell.replaceWith(cell.cloneNode(true)))
        playAgain()
      } else if (crossWins){
        players[1].win = true
        players[1].score++
        footer.innerHTML = `
          <span>${players[1].name} WIN, Score: ${players[0].score} - ${players[1].score}</span>
          <span><button id="replaybutton">Play Again</button></span>
        `
        allCells.forEach(cell => cell.replaceWith(cell.cloneNode(true)))
        playAgain()
      } 
    })
  }

  function playAgain(){
    const replayButton = document.getElementById("replaybutton")
    replayButton.addEventListener("click", () => {
      players[0].win = false
      players[1].win = false
      board.innerHTML="" 
      tttBoard.makeBoard()
      const footer = document.getElementById("bottomfooter")
      footer.textContent = `${players[0].name} start first`
    })
  }

  return {
    start,
    handleClick,
    checkWin,
    playAgain
  }

})()
