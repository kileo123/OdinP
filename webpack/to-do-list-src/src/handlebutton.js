import { loadData } from "./loaddata.js"
import { alltask } from "./alltask.js"
import { displaymodal } from "./displaymodal.js"

const todo_list = loadData()

export function handlebutton(who) {
  console.log("Handle button")

  const complete_btn = document.querySelectorAll("#completebtn")
  const edit_btn = document.querySelectorAll("#editbtn")
  const delete_btn = document.querySelectorAll("#deletebtn")
  
  complete_btn.forEach(cbtn => {
    cbtn.addEventListener("click", (e) =>{
      document.getElementById(`taskno${e.target.dataset.index}`).classList.toggle("completed")
      todo_list[e.target.dataset.index].completed()
      localStorage.setItem("todo", JSON.stringify(todo_list))
    })
  })

  delete_btn.forEach(dbtn => {
    dbtn.addEventListener("click", (e) =>{
      todo_list.splice(e.target.dataset.index, 1)
      localStorage.setItem("todo", JSON.stringify(todo_list))
      alltask()
    })
  })

  edit_btn.forEach(ebtn => {
    ebtn.addEventListener("click", (e) =>{
     displaymodal(e.target.dataset.index, who)
    })
  })
}