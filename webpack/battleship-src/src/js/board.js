import { content } from "../index.js"
import { drawGameBoard } from "./drawGameBoard.js"
import { placeShip, placeShipRandom } from "./placeShip.js"

export function board(gameType) {
  content.innerHTML=""
  console.log(`game type: ${gameType}`)
  switch(gameType){
    case "pvp":
      goPVP()
      break
    case "pvb":
      goPVB()
      break;
    case "bvb":
      goBVB()
      break;
    default:
      console.log("switch error")
  }
}

function goPVP(){
  console.log("get ready player vs player")
  drawGameBoard("Player 1")
  drawGameBoard("Player 2")
}

function goPVB(){
  console.log("get ready player, this AI is not going to hold anything back")
  drawGameBoard("Player")
  placeShip("Player")
  drawGameBoard("Computer")
  placeShipRandom("Computer")
}

function goBVB(){
  console.log("lets find out which AI is smarter")
  drawGameBoard("Computer 1")
  placeShipRandom("Computer 1")
  drawGameBoard("Computer 2")
  placeShipRandom("Computer 2")
}