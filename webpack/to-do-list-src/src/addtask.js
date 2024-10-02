import {addTaskBtn, todayBtn, upcomingBtn, allTaskBtn, content} from "./index.js"
import { today } from "./today.js"

export class TODO{
  constructor(project, title, description, duedate, priority) {
    this.project = project
    this.title = title
    this.description = description
    this.duedate = duedate
    this.priority = priority
    this.complete = false
  }
}

const DEFAULT_CATEGORIES = "General"
const categories = []

export function addtask() {
  console.log("========= ADD TASK =========")
  
  const todo_list = JSON.parse(localStorage.getItem("todo")) || []
  if (todo_list.length === 0){
    console.log("localstorage empty")
    categories[0] = DEFAULT_CATEGORIES
  } else {
    console.log("localstorage exist")
    var i = 0
    todo_list.forEach((_, index) => {
      if (categories.indexOf(todo_list[index].project) === -1){
        console.log(todo_list[index].project)
        categories[i] = todo_list[index].project 
        console.log(`${categories[i]}`)
        i++
      } else {
        console.log("similar categories exist")
      }
      if (todo_list[index].title === "" && todo_list[index].description === "" && todo_list[index].duedate === "" && todo_list[index].priority === ""){
        todo_list.splice(index, 1)
      }
    })
  }
  
  console.log(categories)
  console.log(todo_list)

  addTaskBtn.setAttribute("class", "active")
  todayBtn.removeAttribute("class", "active")
  upcomingBtn.removeAttribute("class", "active")
  allTaskBtn.removeAttribute("class", "active")
  content.innerHTML = "ADD TASK"

  const addtask_div = document.createElement("div")
  const addtask_form = document.createElement("form")
  const addtask_label1_projects = document.createElement("label")
  const addtask_label2_title = document.createElement("label")
  const addtask_label3_description = document.createElement("label")
  const addtask_label4_duedate = document.createElement("label")
  const addtask_label5_priority = document.createElement("label")
  const addtask_label5_priority_high = document.createElement("label")
  const addtask_label5_priority_normal = document.createElement("label")
  const addtask_label5_priority_low = document.createElement("label")
  const addtask_field1_div = document.createElement("div")
  const addtask_field1_projects = document.createElement("select")
  var addtask_field1_projects_options
  const addtask_field1_newprojects = document.createElement("button")
  const addtask_field2_title = document.createElement("input")
  const addtask_field3_description = document.createElement("textarea")
  const addtask_field4_duedate = document.createElement("input")
  const addtask_field5_div = document.createElement("div")
  const addtask_field5_priority_high = document.createElement("input")
  const addtask_field5_priority_normal = document.createElement("input")
  const addtask_field5_priority_low = document.createElement("input")
  const addtask_submit = document.createElement("button")

  addtask_div.id = "addTask"
  addtask_form.id = "addTaskForm"
  addtask_field1_div.id = "projectselection_div"
  addtask_field1_projects.id = "projectselection_list"
  addtask_field1_newprojects.textContent = "+"
  addtask_field1_newprojects.value = "newproj"
  addtask_field1_newprojects.id = "newproj"
  addtask_label1_projects.textContent = "Projects" 
  addtask_label2_title.textContent = "Title"
  addtask_label3_description.textContent = "Description"
  addtask_label4_duedate.textContent = "Due date"
  addtask_label5_priority.textContent = "Priority"
  addtask_label5_priority_high.textContent = "High"
  addtask_label5_priority_normal.textContent = "Normal"
  addtask_label5_priority_low.textContent = "Low"
  addtask_field2_title.type = "field"
  addtask_field2_title.setAttribute("required", "required")
  addtask_field4_duedate.type="date"
  addtask_field4_duedate.setAttribute("required", "required")
  addtask_field5_div.id = "priority_div"
  addtask_field5_priority_high.type = "radio"
  addtask_field5_priority_high.name = "priority"
  addtask_field5_priority_high.value = "highpriority"
  addtask_field5_priority_normal.type = "radio"
  addtask_field5_priority_normal.name = "priority"
  addtask_field5_priority_normal.value = "normalpriority"
  addtask_field5_priority_normal.checked = true
  addtask_field5_priority_low.type = "radio"
  addtask_field5_priority_low.name = "priority"
  addtask_field5_priority_low.value = "lowpriority"
  addtask_submit.textContent = "Submit"
  addtask_submit.id = "submitTask"
  addtask_submit.type = "submit"
  
  addtask_field1_div.appendChild(addtask_label1_projects)
  addtask_field1_div.appendChild(addtask_field1_newprojects)
  categories.forEach((item) => {
    addtask_field1_projects_options = document.createElement("option")
    addtask_field1_projects_options.classList.add("proj_options")
    addtask_field1_projects_options.setAttribute("value", `${item}`)
    addtask_field1_projects_options.appendChild(document.createTextNode(`${item}`))
    addtask_field1_projects.appendChild(addtask_field1_projects_options)
  })
  addtask_field1_div.appendChild(addtask_field1_projects)
  addtask_form.appendChild(addtask_field1_div)
  addtask_form.appendChild(addtask_label2_title)
  addtask_form.appendChild(addtask_field2_title)
  addtask_form.appendChild(addtask_label3_description)
  addtask_form.appendChild(addtask_field3_description)
  addtask_form.appendChild(addtask_label4_duedate)
  addtask_form.appendChild(addtask_field4_duedate)
  addtask_field5_div.appendChild(addtask_label5_priority)
  addtask_field5_div.appendChild(addtask_field5_priority_high)
  addtask_field5_div.appendChild(addtask_label5_priority_high)
  addtask_field5_div.appendChild(addtask_field5_priority_normal)
  addtask_field5_div.appendChild(addtask_label5_priority_normal)
  addtask_field5_div.appendChild(addtask_field5_priority_low)
  addtask_field5_div.appendChild(addtask_label5_priority_low)
  addtask_form.appendChild(addtask_field5_div)
  addtask_form.appendChild(addtask_submit)
  addtask_div.appendChild(addtask_form)
  content.appendChild(addtask_div)

  var priority = "normalpriority"
  if (addtask_field5_priority_high.checked) {
    priority = "highpriority"
  } else if (addtask_field5_priority_low.checked) {
    priority = "lowpriority"
  } 

  addtask_form.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log("submit")
    todo_list.push(new TODO(
      addtask_field1_projects.value, 
      addtask_field2_title.value, 
      addtask_field3_description.value, 
      addtask_field4_duedate.value,
      priority
    ))
    console.log(todo_list)
    localStorage.setItem("todo", JSON.stringify(todo_list))
    console.log("stored in localstorage")
    today()
  })
  
  addtask_field1_newprojects.addEventListener("click", (e) =>{
    e.preventDefault()
    console.log("new project")
    var c = prompt("Enter new Project Name", "")
    if(categories.length == 1){
      todo_list.push(new TODO(c, "", "", "", "", ""))
      localStorage.setItem("todo", JSON.stringify(todo_list))
    } else {
      categories.push(c)
    }
    console.log(categories)
    addtask()
  })
}

