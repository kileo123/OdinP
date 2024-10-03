import { addTaskBtn, todayBtn, upcomingBtn, allTaskBtn, content } from "./index.js"
import { handlebutton } from "./handlebutton.js";
import { loadData } from "./loaddata.js"
import { loadCategories } from "./loadcategories.js";
import { format } from "date-fns";

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

  const todo_list = loadData()
  const categories = loadCategories()
  
  const alltask_div = document.createElement("div")
  const category_div = []
  const category_h1 = []
  const task_div = []
  const title_p = []
  const description_span = []
  const duedate_span = []
  const priority_span = []
  const taskbutton_div = []
  const complete_btn = []
  const edit_btn = []
  const delete_btn = []

  alltask_div.classList.add("alltaskdiv")

  // const category_div = document.createElement("div")
  // const category_h1 = document.createElement("h1")
  // const task_div = document.createElement("div")
  // const title_p = document.createElement("p")
  // const description_span = document.createElement("span")
  // const duedate_span = document.createElement("span")
  // const priority_span = document.createElement("span")

  console.log("========= alltask =========")
  console.log(format(todaydate, "yyyy-MM-dd"))

  var categoryTitlePrinted = false

  categories.forEach((_, i) => {

    categoryTitlePrinted = false
    
    todo_list.forEach((_, index) => {
      
      if(categories[i] === todo_list[index].category){
        
          if (!categoryTitlePrinted) {
            category_div[i] = document.createElement("div")
            category_h1[i] = document.createElement("h1")
            category_h1[i].innerHTML = `${categories[i]}`
            category_div[i].classList.add("categoriesdiv")
            category_div[i].appendChild(category_h1[i])
            categoryTitlePrinted = true
          }
          
          task_div[index] = document.createElement("div")
          task_div[index].classList.add("taskdiv")
          task_div[index].id = `taskno${index}`
          if(todo_list[index].complete) {
            task_div[index].classList.add("completed")
          }
          if(todo_list[index].priority === "highpriority") {
            task_div[index].classList.add("highpriority")
          } else if(todo_list[index].priority === "normalpriority") {
            task_div[index].classList.add("normalpriority")
          } else if(todo_list[index].priority === "lowpriority") {
            task_div[index].classList.add("lowpriority")
          }

          title_p[index] = document.createElement("p")
          description_span[index] = document.createElement("span")
          description_span[index].classList.add("description")
          duedate_span[index] = document.createElement("span")
          priority_span[index] = document.createElement("span")
          taskbutton_div[index] = document.createElement("div")
          taskbutton_div[index].classList.add("taskActionButton")
          complete_btn[index] = document.createElement("button")
          complete_btn[index].classList.add("taskaction")
          complete_btn[index].id = "completebtn"
          complete_btn[index].setAttribute("data-index", index)
          edit_btn[index] = document.createElement("button")
          edit_btn[index].classList.add("taskaction")
          edit_btn[index].id = "editbtn"
          edit_btn[index].setAttribute("data-index", index)
          delete_btn[index] = document.createElement("button")
          delete_btn[index].classList.add("taskaction")
          delete_btn[index].id = "deletebtn"
          delete_btn[index].setAttribute("data-index", index)

          title_p[index].innerHTML = `${todo_list[index].title}`
          description_span[index].innerHTML = `${todo_list[index].description}`
          duedate_span[index].innerHTML = `${format(todo_list[index].duedate, "MMM do")}`
          priority_span[index].innerHTML = "Normal"
          if(todo_list[index].priority === "highpriority"){
            priority_span[index].innerHTML = "High"
          } else if (todo_list[index].priority === "lowpriority"){
            priority_span[index].innerHTML = "Low"
          }
          complete_btn[index].innerHTML = "C"
          edit_btn[index].innerHTML = "E"
          delete_btn[index].innerHTML = "X"

          task_div[index].appendChild(title_p[index])
          task_div[index].appendChild(duedate_span[index])
          task_div[index].appendChild(priority_span[index])
          taskbutton_div[index].appendChild(complete_btn[index])
          taskbutton_div[index].appendChild(edit_btn[index])
          taskbutton_div[index].appendChild(delete_btn[index])
          task_div[index].appendChild(taskbutton_div[index])
          task_div[index].appendChild(description_span[index])
          category_div[i].appendChild(task_div[index])

          alltask_div.appendChild(category_div[i])

        }
    });
  })
  content.appendChild(alltask_div)
  handlebutton()

  // delete_btn.forEach(delbtn => {
  //   delbtn.addEventListener("click", (e) =>{
  //     todo_list.splice(e.target.dataset.index, 1)
  //     localStorage.setItem("todo", JSON.stringify(todo_list))
  //     alltask()
  //   })
  // })

  // complete_btn.forEach(cbtn => {
  //   cbtn.addEventListener("click", (e) =>{
  //     document.getElementById(`taskno${e.target.dataset.index}`).classList.toggle("completed")
  //     todo_list[e.target.dataset.index].completed()
  //     localStorage.setItem("todo", JSON.stringify(todo_list))
  //   })
  // })

}