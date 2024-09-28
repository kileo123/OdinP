import {addTaskBtn, todayBtn, upcomingBtn, allTaskBtn, content} from "./index.js"
import { today } from "./today.js"

export class TODO{
  constructor(project, title, description, duedate, priority) {
    this.project = project
    this.title = title
    this.description = description
    this.duedate = duedate
    this.priority = priority
  }
}

export function addtask() {
  console.log("========= ADD TASK =========")
  
  const todo_list = JSON.parse(localStorage.getItem("todo")) || []
  console.log(todo_list)

  addTaskBtn.setAttribute("class", "active")
  todayBtn.removeAttribute("class", "active")
  upcomingBtn.removeAttribute("class", "active")
  labelBtn.removeAttribute("class", "active")
  content.innerHTML = "ADD TASK"

  const addtask_div = document.createElement("div")
  const addtask_form = document.createElement("form")
  const addtask_label1_projects = document.createElement("label")
  const addtask_label2_title = document.createElement("label")
  const addtask_label3_description = document.createElement("label")
  const addtask_label4_duedate = document.createElement("label")
  const addtask_label5_priority = document.createElement("label")
  const addtask_field1_projects = document.createElement("input")
  const addtask_field2_title = document.createElement("input")
  const addtask_field3_description = document.createElement("input")
  const addtask_field4_duedate = document.createElement("input")
  const addtask_field5_priority = document.createElement("input")
  const addtask_submit = document.createElement("button")

  addtask_div.id = "addTask"
  addtask_form.id = "addTaskForm"
  addtask_label1_projects.textContent = "Projects" 
  addtask_label2_title.textContent = "Title"
  addtask_label3_description.textContent = "Description"
  addtask_label4_duedate.textContent = "Due date"
  addtask_label5_priority.textContent = "Priority"

  addtask_submit.textContent = "Submit"
  addtask_submit.value = "Submit"
  addtask_form.appendChild(addtask_label1_projects)
  addtask_form.appendChild(addtask_field1_projects)
  addtask_form.appendChild(addtask_label2_title)
  addtask_form.appendChild(addtask_field2_title)
  addtask_form.appendChild(addtask_label3_description)
  addtask_form.appendChild(addtask_field3_description)
  addtask_form.appendChild(addtask_label4_duedate)
  addtask_form.appendChild(addtask_field4_duedate)
  addtask_form.appendChild(addtask_label5_priority)
  addtask_form.appendChild(addtask_field5_priority)
  addtask_div.appendChild(addtask_form)
  addtask_div.appendChild(addtask_submit)
  content.appendChild(addtask_div)

  addtask_submit.addEventListener("click", ()=>{
    console.log("submit")
    todo_list.push(new TODO(
      addtask_field1_projects.value, 
      addtask_field2_title.value, 
      addtask_field3_description.value, 
      addtask_field4_duedate.value,
      addtask_field5_priority.value
    ))
    console.log(todo_list)
    localStorage.setItem("todo", JSON.stringify(todo_list))
    today()
  })
}

