import {addTaskBtn, todayBtn, upcomingBtn, allTaskBtn, content} from "./index.js"

export function alltask() {
  addTaskBtn.removeAttribute("class", "active")
  todayBtn.removeAttribute("class", "active")
  upcomingBtn.removeAttribute("class", "active")
  allTaskBtn.setAttribute("class", "active")
  content.innerHTML = "ALL TASK"

}