import { SHIP } from "./ship.js";
import { GRIDSIZE } from "./drawGameBoard.js";

const ship0 = new SHIP("ship0", 2)
const ship1 = new SHIP("ship1", 3)
const ship2 = new SHIP("ship2", 3)
const ship3 = new SHIP("ship3", 4)
const ship4 = new SHIP("ship4", 5)

const ships = [ship0, ship1, ship2, ship3, ship4]

var boardID 

export function placeShipRandom(id){
  boardID = id.replace(/\s/g, '')
  ships.forEach((ship) => {
    ship.rotated = Math.random() < 0.5
    placeShipPieceRandom(ship)
  })
}

export function placeShip(id){
  boardID = id.replace(/\s/g, '')
  ships.forEach((ship) => {
    placeShipPiece(ship)
  })
}

function getRandomNumber(){
  return Math.floor(Math.random() * (GRIDSIZE**2))
}

function placeShipPieceRandom(ship){
  const allBoardBlocks = document.querySelectorAll(`#${boardID} .grid`)
  let randomStartPoint = getRandomNumber()

  let shipBlocks = []
  let validStart = false
  let validShipBlock = false 

  do {
    if(!ship.rotated){
      if ( randomStartPoint <= GRIDSIZE**2 - ship.length && randomStartPoint%GRIDSIZE + ship.length < GRIDSIZE) {
        validStart = true
      } else {
        randomStartPoint = getRandomNumber()
      }
    } else {
      if ( randomStartPoint <= GRIDSIZE**2 - (ship.length*GRIDSIZE)) {
        validStart = true
      } else {
        randomStartPoint = getRandomNumber()
      }
    }
  } while (!validStart)

  for (let i = 0; i < ship.length; i++){
    if(!ship.rotated){
      shipBlocks.push(allBoardBlocks[Number(randomStartPoint) + i])
    } else {
      shipBlocks.push(allBoardBlocks[Number(randomStartPoint) + i*GRIDSIZE])
    }
  }
  validShipBlock = shipBlocks.every(shipBlock => !shipBlock.classList.contains("occupied"))

  if (validStart && validShipBlock) {
    shipBlocks.forEach(shipBlock => {
      shipBlock.classList.add(ship.name)
      shipBlock.classList.add("occupied")
    })
  } else {
    placeShipPieceRandom(ship)
  }
}

function placeShipPiece(ship){
  console.log(ship)
  const allBoardBlocks = document.querySelectorAll(`#${boardID} .grid`)
  console.log(boardID)
  console.log(ship.placed)
  allBoardBlocks.forEach(block => {
    block.addEventListener("click", (e) => {
      console.log(block)
    })
  })
}