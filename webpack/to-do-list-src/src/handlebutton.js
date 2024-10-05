import { loadData } from "./loaddata.js"
import { displaymodal } from "./displaymodal.js"
import { alltask } from "./alltask.js"
import { upcoming } from "./upcoming.js"
import { today } from "./today.js"

const todo_list = loadData()

export function handlebutton(who) {
  // console.log("Handle button")

  const complete_btn = document.querySelectorAll("#completebtn")
  const edit_btn = document.querySelectorAll("#editbtn")
  const delete_btn = document.querySelectorAll("#deletebtn")
  
  complete_btn.forEach(cbtn => {
    cbtn.addEventListener("click", (e) => {
      document.getElementById(`taskno${e.target.parentElement.dataset.index}`).classList.toggle("completed")
      todo_list[e.target.parentElement.dataset.index].completed()
      localStorage.setItem("todo", JSON.stringify(todo_list))
      if (who == "alltask"){
        alltask()
      } else if (who == "today"){
        today()
      } else if (who == "upcoming"){
        upcoming()
      }
    })
  })

  delete_btn.forEach(dbtn => {
    dbtn.addEventListener("click", (e) => {
      todo_list.splice(e.target.parentElement.dataset.index, 1)
      localStorage.setItem("todo", JSON.stringify(todo_list))
      if (who == "alltask"){
        alltask()
      } else if (who == "today"){
        today()
      } else if (who == "upcoming"){
        upcoming()
      }
    })
  })

  edit_btn.forEach(ebtn => {
    ebtn.addEventListener("click", (e) => {
     displaymodal(e.target.parentElement.dataset.index, who)
    })
  })
}