import "./style.css"
import "./js/board.js"
import { home } from "./js/home.js"

export const content = document.getElementById("content")
export const header = document.getElementById("header")

header.addEventListener("click", () => {
  console.log("going back home()")
  home()
})

home()