import { addTaskBtn, todayBtn, upcomingBtn, allTaskBtn, content } from "./index.js"
import { format, differenceInDays } from "date-fns";
import { handlebutton } from "./handlebutton.js";
import { loadData } from "./loaddata.js"
import { loadCategories } from "./loadcategories.js";
import box_blank_svg from "./assets/images/box_blank.svg"
import box_checked_svg from "./assets/images/box_checked.svg"
import pen_in_a_box_svg from "./assets/images/pen_in_a_box.svg"
import trashcan_svg from "./assets/images/trashcan.svg"

const todaydate = new Date()

export function upcoming() {
  addTaskBtn.removeAttribute("class", "active")
  todayBtn.removeAttribute("class", "active")
  upcomingBtn.setAttribute("class", "active")
  allTaskBtn.removeAttribute("class", "active")
  content.innerHTML = `
  <div class="contentTitle">
  <h1>Task due within 7 days</h1>
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
  const complete_btn = []
  const edit_btn = []
  const delete_btn = []
  const box_blank = []
  const box_checked = []
  const pen_in_a_box = []
  const trashcan = []
  
  today_div.classList.add("todaydiv")

  console.log("========= UPCOMING =========")
  console.log(format(todaydate, "yyyy-MM-dd"))
  console.log("todo_list From today.js")
  console.log(todo_list)

  var categoryTitlePrinted = false

  categories.forEach((_, i) => {

    categoryTitlePrinted = false
    
    todo_list.forEach((_, index) => {

      if(categories[i] === todo_list[index].category){
        var daydiff = differenceInDays(todo_list[index].duedate, todaydate)
        if( daydiff >= 0  && daydiff <=7 )  {

      //   if ((format(todaydate, "yyyy-MM-dd")) === todo_list[index].duedate) {
          
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
          box_blank[index] = document.createElement("img")
          box_checked[index] = document.createElement("img")
          pen_in_a_box[index] = document.createElement("img")
          trashcan[index] = document.createElement("img")
        
          box_blank[index].src = box_blank_svg
          box_checked[index].src = box_checked_svg
          pen_in_a_box[index].src = pen_in_a_box_svg
          trashcan[index].src = trashcan_svg

          title_p[index].innerHTML = `${todo_list[index].title}`
          description_span[index].innerHTML = `${todo_list[index].description}`
          duedate_span[index].innerHTML = `${format(todo_list[index].duedate, "MMM do")}`
          priority_span[index].innerHTML = "Normal"
          if(todo_list[index].priority === "highpriority"){
            priority_span[index].innerHTML = "High"
          } else if (todo_list[index].priority === "lowpriority"){
            priority_span[index].innerHTML = "Low"
          }
          if(todo_list[index].complete){
            complete_btn[index].appendChild(box_checked[index])
          } else {
            complete_btn[index].appendChild(box_blank[index])
          }
          edit_btn[index].appendChild(pen_in_a_box[index])
          delete_btn[index].appendChild(trashcan[index])

          task_div[index].appendChild(title_p[index])
          task_div[index].appendChild(duedate_span[index])
          task_div[index].appendChild(priority_span[index])
          taskbutton_div[index].appendChild(complete_btn[index])
          taskbutton_div[index].appendChild(edit_btn[index])
          taskbutton_div[index].appendChild(delete_btn[index])
          task_div[index].appendChild(taskbutton_div[index])
          task_div[index].appendChild(description_span[index])
          category_div[i].appendChild(task_div[index])

          today_div.appendChild(category_div[i])
        }
      }
    });
  })
  content.appendChild(today_div)
  handlebutton("upcoming")
}