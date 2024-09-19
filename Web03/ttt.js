const startButton = document.getElementById("startbutton")
startButton.addEventListener("click", () =>{
  const board = document.getElementById("board")
  board.innerHTML="" 
  tttBoard.makeBoard()
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
    game.start()
  }

  return {
    makeBoard
  }
})()

class Player {
  constructor (name, mark) {
    this.name = name
    this.mark = mark
  }
}

const createDialog = (() => {
  const dialog = document.createElement("dialog")
  dialog.id = "getname"
  dialog.innerHTML=`
    <form method="dialog" id="getplayername">
      <div><label for="p1label">Player 1 (circle)</label><input type="text" id="p1name" value="player 1" required></div>
      <div><label for="p2label">Player 2 (cross)</label><input type="text" id="p2name" value="player 2" required></div>
      <div><button id="submitbutton" value="submit">Submit</button></div>
    </form>
  `
  document.body.appendChild(dialog)
})()

const game = (() => {
  const players = []
  let playerTurn 
  let gameOver

  const start = () => {
    const getname = document.getElementById("getname")
    getname.showModal()
    const playerdialog = document.getElementById("getplayername")
    playerdialog.addEventListener("submit", (event) =>{
      event.preventDefault()
      const p1name = document.getElementById("p1name").value
      players.push(new Player(p1name, "circle"))
      const p2name = document.getElementById("p2name").value
      players.push(new Player(p2name, "cross"))
      getname.close()
      console.log(players[0].name)
      console.log(players[1].name)
    })
    
    playerTurn = 0
    gameOver = false
  }

  const handleClick = (e) => {
    let filled=0
    const allCells = document.querySelectorAll(".cells")
    allCells.forEach((_, index) => {
      if(allCells[index].firstChild != null) {
        filled++
      }
    })
    turn=filled%2
    console.log(`filled cells = ${filled}`)
    console.log(`turn = ${turn}`)
    const play = document.createElement("div")
    play.classList.add(players[turn].mark)
    e.target.append(play)
    e.target.removeEventListener("click", handleClick)
    
    const footer = document.getElementById("bottomfooter")
    footer.textContent = `${players[turn].name} turn now`
  }

  return {
    start,
    handleClick
  }

})()
