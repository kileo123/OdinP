import "./style.css"
import "./js/board.js"

export const content = document.getElementById("content")
export const header = document.getElementById("header")
export const homeBtn = document.getElementById("homeBtn")

// goHome()
homeBtn.addEventListener("click", () => {
  console.log("goHome()")
  goHome()
})

function goHome(){
  content.innerHTML=`
      <div id="container">
      <div class="newGameContainer">
        <h2>New Game</h2>
        <div class="newGameBtnContainer">
          <button id="pvpBtn" class="newGameBtn">Player VS Player</button>
          <button id="pvbBtn" class="newGameBtn">Player VS Bot</button>
          <button id="bvbBtn" class="newGameBtn">Bot VS Bot</button>
        </div>
      </div>
    </div>
  `
}