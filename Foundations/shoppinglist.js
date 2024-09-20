function additem(){
  const newItem = document.getElementById("newitem")
  const listItem = document.getElementById("listitem")
  const li = document.createElement("li")
  li.appendChild(document.createTextNode(newItem.value+" "))
  delBtn = document.createElement("button")
  delBtn.textContent = "Delete"
  li.appendChild(delBtn)
  listItem.appendChild(li)
  delBtn.addEventListener("click", () => {
    listItem.removeChild(li)
  })
  newItem.value = ""
}