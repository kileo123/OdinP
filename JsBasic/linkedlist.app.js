import LinkedList from "./LinkedList.js"

const content = document.getElementById("content")
const list = new LinkedList()

content.innerHTML = ""

console.log(`list.toString())`)
console.log(list.toString())
content.innerHTML += `<p>new list :<br> ${list.toString()}</p>`

console.log(`\nlist.pop("anything")`)
list.pop("anything")
console.log(list.toString())
content.innerHTML += `<p>list.pop("anything") :<br> will print "list empty" and return null</p>`

console.log(`\nlist.append("dog")`)
list.append("dog")
console.log(list.toString())
content.innerHTML += `<p>list.append("dog") :<br> ${list.toString()}</p>`

console.log(`\nlist.append("cat")`)
list.append("cat")
console.log(list.toString())
content.innerHTML += `<p>list.append("cat") :<br> ${list.toString()}</p>`

console.log(`\nlist.append("parrot")`)
list.append("parrot")
console.log(list.toString())
content.innerHTML += `<p>list.append("parrot") :<br> ${list.toString()}</p>`

console.log(`\nlist.append("hamster")`)
list.append("hamster")
console.log(list.toString())
content.innerHTML += `<p>list.append("hamster") :<br> ${list.toString()}</p>`

console.log(`\nlist.prepend("tarantula")`)
list.prepend("tarantula")
console.log(list.toString())
content.innerHTML += `<p>list.prepend("tarantula") :<br> ${list.toString()}</p>`

console.log(`\nlist.append("snake")`)
list.append("snake")
console.log(list.toString())
content.innerHTML += `<p>list.append("snake") :<br> ${list.toString()}</p>`

console.log(`\nlist.append("turtle")`)
list.append("turtle")
console.log(list.toString())
content.innerHTML += `<p>list.append("turtle") :<br> ${list.toString()}</p>`

console.log(`\nlist.prepend("fox")`)
list.prepend("fox")
console.log(list.toString())
content.innerHTML += `<p>list.prepend("fox") :<br> ${list.toString()}</p>`

console.log(`\nconsole.log(list.size())`)
console.log(list.size())
content.innerHTML += `<p>list.size() :<br> ${list.size()}</p>`

console.log(`\nconsole.log(list.head())`)
console.log(list.head())
console.log(`\nconsole.log(list.head().value)`)
console.log(list.head().value)
content.innerHTML += `<p>list.head().value :<br> ${list.head().value}</p>`

console.log(`\nconsole.log(list.tail())`)
console.log(list.tail())
console.log(`\nconsole.log(list.tail().value)`)
console.log(list.tail().value)
content.innerHTML += `<p>list.tail().value :<br> ${list.tail().value}</p>`

console.log(`\nconsole.log(list.at(3))`)
console.log(list.at(3))
console.log(`\nconsole.log(list.at(3),value)`)
console.log(list.at(3).value)
content.innerHTML += `<p>list.at(3).value :<br> ${list.at(3).value}</p>`

console.log(`\nconsole.log(list.contains("cat"))`)
console.log(list.contains("cat"))
content.innerHTML += `<p>list.contains("cat") :<br> ${list.contains("cat")}</p>`

console.log(`\nconsole.log(list.contains("somethingelse"))`)
console.log(list.contains("somethingelse"))
content.innerHTML += `<p>list.contains("somethingelse") :<br> ${list.contains("somethingelse")}</p>`

console.log(`\nconsole.log(list.find("snake"))`)
console.log(list.find("snake"))
content.innerHTML += `<p>list.find("snake") :<br> ${list.find("snake")}</p>`

console.log(`\nconsole.log(list.find("somethingelse"))`)
console.log(list.find("somethingelse"))
content.innerHTML += `<p>list.find("somethingelse") :<br> ${list.find("somethingelse")}</p>`

console.log(`\nlist.pop()`)
list.pop()
console.log(list.toString())
content.innerHTML += `<p>list.pop() :<br> ${list.toString()}</p>`

console.log(`\nlist.insertAt("lion", 2)`)
list.insertAt("lion", 2)
console.log(list.toString())
content.innerHTML += `<p>list.insertAt("lion", 2) :<br> ${list.toString()}</p>`

console.log(`\nlist.removeAt(1)`)
list.removeAt(1)
console.log(list.toString())
content.innerHTML += `<p>list.removeAt(1) :<br> ${list.toString()}</p>`

console.log(`\nlist.insertAt("crocodile", 99)`)
list.insertAt("crocodile", 99)
content.innerHTML += `<p>list.insertAt("crocodile", 99) : <br> will print "invalid index" and return null</p>`

console.log(`\nlist.removeAt(99)`)
list.removeAt(99)
content.innerHTML += `<p>list.removeAt(99) :<br> will print "invalid index" and return null</p>`

console.log(`\nlist.removeAt(0)`)
list.removeAt(0)
console.log(list.toString())
content.innerHTML += `<p>list.removeAt(0) :<br> ${list.toString()}</p>`

console.log(`\nlist.update("peacock", 5)`)
list.update("peacock", 5)
console.log(list.toString())
content.innerHTML += `<p>list.update("peacock", 5) :<br> ${list.toString()}</p>`

