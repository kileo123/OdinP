import { addTaskBtn, todayBtn, upcomingBtn, allTaskBtn, content } from "./index.js"
import { format } from "date-fns";
import { today } from "./today.js"
import { TODO } from "./TODO.js"
import { loadData } from "./loaddata.js"
import { loadCategories } from "./loadcategories.js";

const todaydate = new Date()

export function addtask() {
  const todo_list = loadData()
  const categories = loadCategories()
  
  // console.log("========= ADD TASK =========")

  addTaskBtn.setAttribute("class", "active")
  todayBtn.removeAttribute("class", "active")
  upcomingBtn.removeAttribute("class", "active")
  allTaskBtn.removeAttribute("class", "active")
  content.innerHTML = `
    <div class="contentTitle">
    <h1>ADD NEW Task</h1>
    <h2>${format(todaydate, "eeee, MMMM do yyyy")}</h2>
    </div>
  `

  const addtask_div = document.createElement("div")
  const addtask_form = document.createElement("form")
  const addtask_label1_category = document.createElement("label")
  const addtask_label2_title = document.createElement("label")
  const addtask_label3_description = document.createElement("label")
  const addtask_label4_duedate = document.createElement("label")
  const addtask_label5_priority = document.createElement("label")
  const addtask_label5_priority_high = document.createElement("label")
  const addtask_label5_priority_normal = document.createElement("label")
  const addtask_label5_priority_low = document.createElement("label")
  const addtask_field1_div = document.createElement("div")
  const addtask_field1_category = document.createElement("select")
  var addtask_field1_category_options
  const addtask_field1_newcategory = document.createElement("button")
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
  addtask_field1_div.id = "categoryselection_div"
  addtask_field1_category.id = "categoryselection_list"
  addtask_field1_newcategory.textContent = "+"
  addtask_field1_newcategory.value = "newcategory"
  addtask_field1_newcategory.id = "newcategory"
  addtask_label1_category.textContent = "Category" 
  addtask_label2_title.textContent = "Title"
  addtask_label2_title.id = "Title_id"
  addtask_label3_description.textContent = "Description"
  addtask_label3_description.id = "Description_id"
  addtask_label4_duedate.textContent = "Duedate"
  addtask_label4_duedate.id = "Duedate_id"
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
  addtask_field5_priority_high.id = "highpriority"
  addtask_field5_priority_normal.type = "radio"
  addtask_field5_priority_normal.name = "priority"
  addtask_field5_priority_normal.value = "normalpriority"
  addtask_field5_priority_normal.id = "normalpriority"
  addtask_field5_priority_normal.checked = true
  addtask_field5_priority_low.type = "radio"
  addtask_field5_priority_low.name = "priority"
  addtask_field5_priority_low.value = "lowpriority"
  addtask_field5_priority_low.id = "lowpriority"
  addtask_submit.textContent = "Submit"
  addtask_submit.id = "submitTask"
  addtask_submit.type = "submit"
  
  addtask_field1_div.appendChild(addtask_label1_category)
  addtask_field1_div.appendChild(addtask_field1_newcategory)
  categories.forEach((item, i) => {
    addtask_field1_category_options = document.createElement("option")
    addtask_field1_category_options.classList.add("category_options")
    addtask_field1_category_options.setAttribute("value", `${item}`)
    if((i+1) === categories.length){
      addtask_field1_category_options.setAttribute("selected", "")
    }
    addtask_field1_category_options.appendChild(document.createTextNode(`${item}`))
    addtask_field1_category.appendChild(addtask_field1_category_options)
  })
  addtask_field1_div.appendChild(addtask_field1_category)
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

  addtask_form.addEventListener("submit", (e)=>{
    e.preventDefault()
    var priority = "normalpriority"
    if (addtask_field5_priority_high.checked) {
      priority = "highpriority"
    } else if (addtask_field5_priority_low.checked) {
      priority = "lowpriority"
    } 
    // console.log(priority)
    todo_list.push(new TODO(
      addtask_field1_category.value, 
      addtask_field2_title.value, 
      addtask_field3_description.value, 
      addtask_field4_duedate.value,
      priority,
      false
    ))
    localStorage.setItem("todo", JSON.stringify(todo_list))
    today()
  })
  
  addtask_field1_newcategory.addEventListener("click", (e) =>{
    e.preventDefault()
    var c = prompt("Enter new Category", "")
    if (c != null) {
      todo_list.push(new TODO(c, "", "", "", "", ""))
      localStorage.setItem("todo", JSON.stringify(todo_list))
    }
    addtask()
  })
}

