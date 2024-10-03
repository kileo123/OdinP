import { addTaskBtn, todayBtn, upcomingBtn, allTaskBtn, content } from "./index.js"
import { format } from "date-fns";

import { loadData } from "./loaddata.js"
import { loadCategories } from "./loadcategories.js";

const todaydate = new Date()

export function today() {
  addTaskBtn.removeAttribute("class", "active")
  todayBtn.setAttribute("class", "active")
  upcomingBtn.removeAttribute("class", "active")
  allTaskBtn.removeAttribute("class", "active")
  content.innerHTML = `
  <div class="contentTitle">
  <h1>TODAY's Task</h1>
  <h2>${format(todaydate, "eeee, MMMM do yyyy")}</h2>
  </div>
  `
  const todo_list = loadData()
  const categories = loadCategories()
  
  const today_div = document.createElement("div")
  const category_div = []
  const category_h1 = []
  const task_div = []
  const title_p = []
  const description_span = []
  const duedate_span = []
  const priority_span = []
  const taskbutton_div = []
  
  today_div.classList.add("todaydiv")

  // const category_div = document.createElement("div")
  // const category_h1 = document.createElement("h1")
  // const task_div = document.createElement("div")
  // const title_p = document.createElement("p")
  // const description_span = document.createElement("span")
  // const duedate_span = document.createElement("span")
  // const priority_span = document.createElement("span")

  console.log("========= TODAY =========")
  console.log(format(todaydate, "yyyy-MM-dd"))
  console.log("todo_list From today.js")
  console.log(todo_list)

  var categoryTitlePrinted = false

  categories.forEach((_, i) => {

    categoryTitlePrinted = false
    
    todo_list.forEach((_, index) => {
      
      if(categories[i] === todo_list[index].category){
        
        if ((format(todaydate, "yyyy-MM-dd")) === todo_list[index].duedate) {
          
          if (!categoryTitlePrinted) {
            category_div[i] = document.createElement("div")
            category_h1[i] = document.createElement("h1")
            category_h1[i].innerHTML = `${categories[i]}`
            category_div[i].classList.add("categoriesdiv")
            category_div[i].appendChild(category_h1[i])
            categoryTitlePrinted = true
          }

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
          category_div[i].appendChild(task_div[index])

          today_div.appendChild(category_div[i])

        }
      }
    });
  })
  content.appendChild(today_div)
}