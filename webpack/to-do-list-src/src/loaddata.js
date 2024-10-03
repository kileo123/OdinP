import { TODO } from "./TODO.js"

export function loadData() {

  console.log("======== LOAD DATA ========")

  const todo_list = []
  const localData = JSON.parse(localStorage.getItem("todo")) || []
  
  console.log(`localData = ${localData}`)
  console.log(`localData.length = ${localData.length}`)

  if (localData.length > 0 ){
    localData.forEach((data, index) => {
      const todo = new TODO(data.category, data.title, data.description, data.duedate, data.priority)
      todo_list[index] = todo
      console.log("todo_list added")
      if (todo_list[index].title === "" && todo_list[index].description === "" && todo_list[index].duedate === "" && todo_list[index].priority === ""){
        todo_list.splice(index, 1)
      }
    })
  }
  return todo_list
}