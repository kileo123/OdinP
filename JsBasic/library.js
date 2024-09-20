const addNewBook = document.getElementById("addNewBook")
const bookDialog = document.getElementById("bookdialog")
const bookList = document.getElementById("booklist")
const cancelBtn = bookDialog.querySelector("#cancelBtn")
const bookForm = document.querySelector("form")
const myBookLibrary = []
var editFlag = false
var cIdx = null
var statusFlag = null

class Book {
  constructor(title, author, page, status) {
    this.title = title
    this.author = author
    this.page = page
    this.status = status
  }
}

myBookLibrary.push(new Book("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 208, "Finished"))
myBookLibrary.push(new Book("The Three-Body Problem", "Liu Cixin", 302, "Ongoing"))
myBookLibrary.push(new Book("The Girl with the Dragon Tattoo", "Stieg Larsson", 544, "Unread"))
showBookInList()

addNewBook.addEventListener("click", () => {
  bookDialog.showModal()
})

cancelBtn.addEventListener("click", (event) => {
  event.preventDefault()
  resetGlobalVariables()
  bookDialog.close()
  bookForm.reset()
})

bookDialog.addEventListener("submit", (event) => {
  event.preventDefault()
  addBookToLibrary()
  bookDialog.close()
  bookForm.reset()
})

function addBookToLibrary() {
  const bookTitle = document.getElementById("booktitle").value
  const bookAuthor = document.getElementById("bookauthor").value
  const bookPages = document.getElementById("bookpages").value

  if (editFlag == true && cIdx != null && statusFlag != null){
    myBookLibrary.splice(cIdx, 1, new Book(bookTitle, bookAuthor, bookPages, statusFlag))
    resetGlobalVariables()
  } else {
    const bookStatus = "Unread"
    myBookLibrary.push(new Book(bookTitle, bookAuthor, bookPages, bookStatus))
  }
  showBookInList()
}

function showBookInList() {
  bookList.innerHTML=""
  myBookLibrary.forEach((book, index) => {
    const tr = document.createElement("tr")
    tr.innerHTML=`
      <td>${index+1}</td>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.page}</td>
      <td>${book.status}</td>
      <td>
        <button class="listbtn" id="readbtn" data-index="${index}">R</button>
        <button class="listbtn" id="editbtn" data-index="${index}">E</button>
        <button class="listbtn" id="delbtn" data-index="${index}">X</button>
      </td>
    `
    bookList.appendChild(tr)
  })

  const readBtn = document.querySelectorAll("#readbtn")
  readBtn.forEach(readbutton => {
    readbutton.addEventListener("click", (e) => {
      myBookLibrary[e.target.getAttribute("data-index")].chReadStatus() 
      showBookInList()
    })
  })
  
  const editBtn = document.querySelectorAll("#editbtn")
  editBtn.forEach(editbutton => {
    editbutton.addEventListener("click", (e) => {
      cIdx=e.target.getAttribute("data-index")
      editFlag = true
      myBookLibrary[cIdx].chBookInfo() 
      showBookInList()
    })
  })
  
  const delBtn = document.querySelectorAll("#delbtn")
  delBtn.forEach(delbutton => {
    delbutton.addEventListener("click", (e) => {
      cIdx=e.target.getAttribute("data-index")
      myBookLibrary.splice(cIdx, 1) 
      resetGlobalVariables()
      showBookInList()
    })
  })
}

Book.prototype.chReadStatus = function() {
  if (this.status === "Unread") {
    this.status = "Ongoing"
  } else if (this.status === "Ongoing"){
    this.status = "Finished"
  } else if (this.status === "Finished"){
    this.status = "Unread"
  }
}

Book.prototype.chBookInfo = function() {
  const title = document.querySelector("#booktitle");
  const author = document.querySelector("#bookauthor");
  const page = document.querySelector("#bookpages");
  title.value = this.title
  author.value = this.author
  page.value = this.page
  statusFlag = this.status
  bookDialog.showModal()
}

function resetGlobalVariables(){
  editFlag = false
  cIdx = null
  statusFlag = null
}