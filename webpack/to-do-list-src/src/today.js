import {addTaskBtn, todayBtn, upcomingBtn, allTaskBtn, content} from "./index.js"

export function today() {
  const todo_list = JSON.parse(localStorage.getItem("todo")) || []
  addTaskBtn.removeAttribute("class", "active")
  todayBtn.setAttribute("class", "active")
  upcomingBtn.removeAttribute("class", "active")
  allTaskBtn.removeAttribute("class", "active")
  content.innerHTML = "TODAY"

  console.log("========= TODAY =========")
  todo_list.forEach((todo, index) => {
    console.log(`${todo_list[index].project}, ${todo_list[index].title}, ${todo_list[index].description}, ${todo_list[index].duedate}, ${todo_list[index].priority}`)
  });
}