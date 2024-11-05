import { content } from "../index.js"

export const GRIDSIZE = 10;

export function drawGameBoard(id){
  const gameBoardContainer = document.createElement("div")
  gameBoardContainer.classList.add(`gameBoardContainer`)
  const idNoSpace = id.replace(/\s/g, '')
  console.log(idNoSpace)
  gameBoardContainer.id = idNoSpace

  const gameBoardTitle = document.createElement("div")
  gameBoardTitle.classList.add(`gameBoardTitle`)
  gameBoardTitle.innerHTML = `<h3>${id}</h3>`
  gameBoardContainer.appendChild(gameBoardTitle)
  
  const gameBoard = document.createElement("div")
  gameBoard.classList.add("gameBoard")
  gameBoard.id = idNoSpace

  for (let i = 0; i < GRIDSIZE**2; i++){
    const grid = document.createElement("div")
    grid.classList.add("grid")
    grid.id = i
    gameBoard.append(grid)
  }
  gameBoardContainer.appendChild(gameBoard)
  content.appendChild(gameBoardContainer)
}
