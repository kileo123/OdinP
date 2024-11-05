import { content } from "../index.js"
import { board } from "./board.js"

export function home() {
  content.innerHTML=`
    <div class="newGameContainer">
      <h2>New Game</h2>
      <div class="newGameBtnContainer">
        <button id="pvpBtn" class="newGameBtn">Player VS Player</button>
        <button id="pvbBtn" class="newGameBtn">Player VS Bot</button>
        <button id="bvbBtn" class="newGameBtn">Bot VS Bot</button>
      </div>
    </div>
  `

  const pvpBtn = document.getElementById("pvpBtn")
  const pvbBtn = document.getElementById("pvbBtn")
  const bvbBtn = document.getElementById("bvbBtn")

  pvpBtn.addEventListener("click", () => {
    console.log("pvp button pressed")
    board("pvp")
  })

  pvbBtn.addEventListener("click", () => {
    console.log("pvb button pressed")
    board("pvb")
  })

  bvbBtn.addEventListener("click", () => {
    console.log("bvb button pressed")
    board("bvb")
  })

}
