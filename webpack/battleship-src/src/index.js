import "./style.css"
import dom from "./js/dom.js";

export const content = document.getElementById("content")
export const header = document.getElementById("header")

header.addEventListener("click", () => {
  console.log("going back home()")
  dom.init()
})

dom.init()