import { loadData } from "./loaddata.js"
import { alltask } from "./alltask.js"

const todo_list = loadData()

export function handlebutton() {
  console.log("Handle button")

  const complete_btn = document.querySelectorAll("#completebtn")
  const delete_btn = document.querySelectorAll("#deletebtn")
  
  complete_btn.forEach(cbtn => {
    cbtn.addEventListener("click", (e) =>{
      document.getElementById(`taskno${e.target.dataset.index}`).classList.toggle("completed")
      todo_list[e.target.dataset.index].completed()
      localStorage.setItem("todo", JSON.stringify(todo_list))
    })
  })

  delete_btn.forEach(delbtn => {
    delbtn.addEventListener("click", (e) =>{
      todo_list.splice(e.target.dataset.index, 1)
      localStorage.setItem("todo", JSON.stringify(todo_list))
      alltask()
    })
  })

}