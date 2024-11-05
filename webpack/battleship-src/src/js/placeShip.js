import { SHIP } from "./ship.js";
import { GRIDSIZE } from "./drawGameBoard.js";

const ship0 = new SHIP("ship0", 2)
const ship1 = new SHIP("ship1", 3)
const ship2 = new SHIP("ship2", 3)
const ship3 = new SHIP("ship3", 4)
const ship4 = new SHIP("ship4", 5)

const ships = [ship0, ship1, ship2, ship3, ship4]

var boardID 

export function placeShip(id){
  boardID = id.replace(/\s/g, '')
  let i = 0
  let location = 0
  let shipBlocks = []

  const allBoardBlocks = document.querySelectorAll(`#${boardID} .grid`)
  allBoardBlocks.forEach(block => {
    block.addEventListener("mouseover", (e) => {
      setHighlight(ships[i], block)
    })
    block.addEventListener("click", (e) => {
      location = block.id
      if (i<ships.length){
        placeShipPiece()
      } else {
        return
      }
      i++
    })
  })

  function setHighlight(ship, location){
    console.log(location)
    if ( location <= GRIDSIZE**2 - ship.length && location%GRIDSIZE + ship.length < GRIDSIZE) {
      shipBlocks.push(allBoardBlocks[location + i])
    }
    shipBlocks.forEach(shipBlock => {
      shipBlock.classList.add("hovering")
      setTimeout(() => shipBlock.classList.add("hovering"), 500)
    })
  }

  function placeShipPiece(){
    console.log(`ship${i}`, location)
    if ( location <= GRIDSIZE**2 - ships[i].length && location%GRIDSIZE + ships[i].length < GRIDSIZE) {
      console.log(`ship${i} Location OK`)
      ships[i].placed = true
    } else {
      console.log(`ship${i} Location NOT OK`)
      i--
    }
  }

}

export function placeShipRandom(id){
  boardID = id.replace(/\s/g, '')
  ships.forEach((ship) => {
    ship.rotated = Math.random() < 0.5
    placeShipPieceRandom(ship)
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
