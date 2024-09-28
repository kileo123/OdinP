import {addTaskBtn, todayBtn, upcomingBtn, allTaskBtn, content} from "./index.js"

export function upcoming() {
  addTaskBtn.removeAttribute("class", "active")
  todayBtn.removeAttribute("class", "active")
  upcomingBtn.setAttribute("class", "active")
  allTaskBtn.removeAttribute("class", "active")
  content.innerHTML = "UPCOMING"

}