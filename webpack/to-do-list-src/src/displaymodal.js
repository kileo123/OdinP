import { content } from "./index.js"
import { TODO } from "./TODO.js"
import { loadData } from "./loaddata.js"
import { loadCategories } from "./loadcategories.js";
import { upcoming } from "./upcoming.js";
import { today } from "./today.js";
import { alltask } from "./alltask.js";

export function displaymodal(targetID, who){
  console.log("===== MODAL =====")

  const todo_list = loadData()
  const categories = loadCategories()
  
  const dialog = document.createElement("dialog")
  const taskform = document.createElement("form")
  const label1_category = document.createElement("label")
  const label2_title = document.createElement("label")
  const label3_description = document.createElement("label")
  const label4_duedate = document.createElement("label")
  const label5_priority = document.createElement("label")
  const label5_priority_high = document.createElement("label")
  const label5_priority_normal = document.createElement("label")
  const label5_priority_low = document.createElement("label")
  const field1_div = document.createElement("div")
  const field1_category = document.createElement("select")
  var field1_category_options
  // const field1_newcategory = document.createElement("button")
  const field2_title = document.createElement("input")
  const field3_description = document.createElement("textarea")
  const field4_duedate = document.createElement("input")
  const field5_div = document.createElement("div")
  const field5_priority_high = document.createElement("input")
  const field5_priority_normal = document.createElement("input")
  const field5_priority_low = document.createElement("input")
  const submit = document.createElement("button")
  
  dialog.id = "taskdialog"
  taskform.id = "taskform"
  field1_div.id = "categoryselection_div"
  field1_category.id = "categoryselection_list"
  // field1_newcategory.textContent = ""
  // field1_newcategory.value = "newcategory"
  // field1_newcategory.id = "newcategory"
  label1_category.textContent = "Category" 
  label2_title.textContent = "Title"
  label3_description.textContent = "Description"
  label4_duedate.textContent = "Due date"
  label5_priority.textContent = "Priority"
  label5_priority_high.textContent = "High"
  label5_priority_normal.textContent = "Normal"
  label5_priority_low.textContent = "Low"
  field2_title.type = "field"
  field2_title.setAttribute("required", "required")
  field4_duedate.type="date"
  field4_duedate.setAttribute("required", "required")
  field5_div.id = "priority_div"
  field5_priority_high.type = "radio"
  field5_priority_high.name = "priority"
  field5_priority_high.value = "highpriority"
  field5_priority_high.id = "highpriority"
  field5_priority_normal.type = "radio"
  field5_priority_normal.name = "priority"
  field5_priority_normal.value = "normalpriority"
  field5_priority_normal.id = "normalpriority"
  field5_priority_normal.checked = true
  field5_priority_low.type = "radio"
  field5_priority_low.name = "priority"
  field5_priority_low.value = "lowpriority"
  field5_priority_low.id = "lowpriority"
  submit.textContent = "Submit"
  submit.id = "submitTask"
  submit.type = "submit"

  if (targetID == undefined) {
    console.log("no targetID")
  } else {
    console.log(targetID)
    const cat = todo_list[targetID].category
    const ttl = todo_list[targetID].title
    const desc = todo_list[targetID].description
    const duedate = todo_list[targetID].duedate
    const prio = todo_list[targetID].priority
    const comp = todo_list[targetID].complete      
    console.log(cat)
    console.log(ttl)
    console.log(desc)
    console.log(duedate)
    console.log(prio)
    console.log(comp)

    field2_title.value = ttl
    field3_description.value = desc
    field4_duedate.value = duedate
    if (prio == "highpriority"){
      field5_priority_high.checked = true
      field5_priority_normal.checked = false
      field5_priority_low.checked = false
    } else if (prio == "lowpriority"){
      field5_priority_high.checked = false
      field5_priority_normal.checked = false
      field5_priority_low.checked = true
    }
    
    field1_div.appendChild(label1_category)
    // field1_div.appendChild(field1_newcategory)
    categories.forEach((item, index) => {
      field1_category_options = document.createElement("option")
      field1_category_options.classList.add("category_options")
      field1_category_options.setAttribute("value", `${item}`)
      if(index === categories.indexOf(cat)){
        field1_category_options.setAttribute("selected", "")
      }
      field1_category_options.appendChild(document.createTextNode(`${item}`))
      field1_category.appendChild(field1_category_options)
    })
    field1_div.appendChild(field1_category)
    taskform.appendChild(field1_div)
    taskform.appendChild(label2_title)
    taskform.appendChild(field2_title)
    taskform.appendChild(label3_description)
    taskform.appendChild(field3_description)
    taskform.appendChild(label4_duedate)
    taskform.appendChild(field4_duedate)
    field5_div.appendChild(label5_priority)
    field5_div.appendChild(field5_priority_high)
    field5_div.appendChild(label5_priority_high)
    field5_div.appendChild(field5_priority_normal)
    field5_div.appendChild(label5_priority_normal)
    field5_div.appendChild(field5_priority_low)
    field5_div.appendChild(label5_priority_low)
    taskform.appendChild(field5_div)
    taskform.appendChild(submit)
    dialog.appendChild(taskform)
    content.appendChild(dialog)
    dialog.showModal()
  
    taskform.addEventListener("submit", (e)=>{
      e.preventDefault()
      dialog.close()

      var priority = "normalpriority"
      if (field5_priority_high.checked) {
        priority = "highpriority"
      } else if (field5_priority_low.checked) {
        priority = "lowpriority"
      } 
      var completed = todo_list[targetID].complete

      todo_list.splice(targetID, 1, new TODO(
        field1_category.value, 
        field2_title.value, 
        field3_description.value, 
        field4_duedate.value,
        priority,
        completed
      ))
      localStorage.setItem("todo", JSON.stringify(todo_list))
      if (who == "alltask"){
        alltask()
      } else if (who == "today"){
        today()
      } else if (who == "upcoming"){
        upcoming()
      }
    })
  }
}