import {addTaskBtn, todayBtn, upcomingBtn, allTaskBtn, content} from "./index.js"
import { format } from "date-fns";

const categories = []
const todaydate = new Date()

export function alltask() {
  addTaskBtn.removeAttribute("class", "active")
  todayBtn.removeAttribute("class", "active")
  upcomingBtn.removeAttribute("class", "active")
  allTaskBtn.setAttribute("class", "active")
  content.innerHTML = `
    <div class="contentTitle">
    <h1>ALL Task</h1>
    <h2>${format(todaydate, "eeee, MMMM do yyyy")}</h2>
    </div>
  `

  const todo_list = JSON.parse(localStorage.getItem("todo")) || []
  if (todo_list.length === 0){
    console.log("localstorage empty")
  } else {
    console.log("localstorage exist")
    var i = 0
    todo_list.forEach((_, index) => {
      if (categories.indexOf(todo_list[index].project) === -1){
        categories[i] = todo_list[index].project 
        console.log(`${categories[i]}`)
        i++
      }
    })
  }

  const alltask_div = document.createElement("div")
  const project_div = []
  const project_h1 = []
  const task_div = []
  const title_p = []
  const description_span = []
  const duedate_span = []
  const priority_span = []
  const taskbutton_div = []
  
  alltask_div.classList.add("alltaskdiv")

  // const project_div = document.createElement("div")
  // const project_h1 = document.createElement("h1")
  // const task_div = document.createElement("div")
  // const title_p = document.createElement("p")
  // const description_span = document.createElement("span")
  // const duedate_span = document.createElement("span")
  // const priority_span = document.createElement("span")

  console.log("========= ALL TASK =========")
  console.log(format(todaydate, "yyyy-MM-dd"))

  var catalogueTitlePrinted = false

  categories.forEach((_, i) => {

    catalogueTitlePrinted = false
    
    todo_list.forEach((_, index) => {
      
      if(categories[i] === todo_list[index].project){
        
        if (!catalogueTitlePrinted) {
          console.log(`${categories[i]}`)
          project_div[i] = document.createElement("div")
          project_h1[i] = document.createElement("h1")
          project_h1[i].innerHTML = `${categories[i]}`
          project_div[i].classList.add("categoriesdiv")
          project_div[i].appendChild(project_h1[i])
          catalogueTitlePrinted = true
        }

        console.log(`${todo_list[index].title}, ${todo_list[index].description}, ${todo_list[index].duedate}, ${todo_list[index].priority}`)
        task_div[index] = document.createElement("div")
        title_p[index] = document.createElement("p")
        description_span[index] = document.createElement("span")
        description_span[index].classList.add("description")
        duedate_span[index] = document.createElement("span")
        priority_span[index] = document.createElement("span")
        taskbutton_div[index] = document.createElement("div")
        
        title_p[index].innerHTML = `${todo_list[index].title}`
        description_span[index].innerHTML = `${todo_list[index].description}`
        duedate_span[index].innerHTML = `${format(todo_list[index].duedate, "MMM do")}`
        if(todo_list[index].priority === "highpriority"){

        }
        priority_span[index].innerHTML = `Normal Priority`

        taskbutton_div[index].innerHTML = `
          <button class="taskaction" id="completebtn" data-index="${index}">C</button>
          <button class="taskaction" id="deletebtn" data-index="${index}">X</button>
          <button class="taskaction" id="editbtn" data-index="${index}">E</button>
        `
        task_div[index].appendChild(title_p[index])
        task_div[index].appendChild(duedate_span[index])
        task_div[index].appendChild(priority_span[index])

        task_div[index].appendChild(taskbutton_div[index])
        task_div[index].appendChild(description_span[index])
        task_div[index].classList.add("taskdiv")
        project_div[i].appendChild(task_div[index])

        alltask_div.appendChild(project_div[i])

      }
    });
  })
  content.appendChild(alltask_div)
}