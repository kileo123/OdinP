import { LinkedList } from "./LinkedList.js"

const content = document.getElementById("content")
const list = new LinkedList()

content.innerHTML = ""

console.log(list.toString());
content.innerHTML += `new list : ${list.toString()}<br>`
list.append("dog");
console.log(list.toString());
content.innerHTML += `list.append("dog") : ${list.toString()}<br>`
list.append("cat");
console.log(list.toString());
content.innerHTML += `list.append("cat") : ${list.toString()}<br>`
list.append("parrot");
console.log(list.toString());
content.innerHTML += `list.append("parrot") : ${list.toString()}<br>`
list.append("hamster");
console.log(list.toString());
content.innerHTML += `list.append("hamster") : ${list.toString()}<br>`
list.prepend("tarantula");
console.log(list.toString());
content.innerHTML += `list.prepend("tarantula") : ${list.toString()}<br>`
list.append("snake");
console.log(list.toString());
content.innerHTML += `list.append("snake") : ${list.toString()}<br>`
list.append("turtle");
console.log(list.toString());
content.innerHTML += `list.append("turtle") : ${list.toString()}<br>`
list.prepend("fox");
console.log(list.toString());
content.innerHTML += `list.prepend("fox") : ${list.toString()}<br>`

console.log(list.size());
console.log(list.head());
console.log(list.head().value);
console.log(list.tail());
console.log(list.tail().value);
console.log(list.at(3));
console.log(list.at(3).value);

content.innerHTML += `<br>
  list.toString() : ${list.toString()}<br>
  list.size() : ${list.size()}<br>
  list.head().value : ${list.head().value}<br>
  list.tail().value : ${list.tail().value}<br>
  list.at(3).value : ${list.at(3).value}<br>
  list.contains("cat") : ${list.contains("cat")}<br>
  list.find("snake") : ${list.find("snake")}<br>
`

list.pop()
console.log(list.toString());
content.innerHTML += `<br>
  after list.pop() : ${list.toString()}<br>
`
