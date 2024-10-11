import { LinkedList } from "./LinkedList.js"

const content = document.getElementById("content")
const list = new LinkedList()

content.innerHTML = ""

console.log(list.toString());
content.innerHTML += `<p>new list :<br> ${list.toString()}</p>`
list.pop("anything");
console.log(list.toString());
content.innerHTML += `<p>list.pop("anything") :<br> will return list empty</p>`
list.append("dog");
console.log(list.toString());
content.innerHTML += `<p>list.append("dog") :<br> ${list.toString()}</p>`
list.append("cat");
console.log(list.toString());
content.innerHTML += `<p>list.append("cat") :<br> ${list.toString()}</p>`
list.append("parrot");
console.log(list.toString());
content.innerHTML += `<p>list.append("parrot") :<br> ${list.toString()}</p>`
list.append("hamster");
console.log(list.toString());
content.innerHTML += `<p>list.append("hamster") :<br> ${list.toString()}</p>`
list.prepend("tarantula");
console.log(list.toString());
content.innerHTML += `<p>list.prepend("tarantula") :<br> ${list.toString()}</p>`
list.append("snake");
console.log(list.toString());
content.innerHTML += `<p>list.append("snake") :<br> ${list.toString()}</p>`
list.append("turtle");
console.log(list.toString());
content.innerHTML += `<p>list.append("turtle") :<br> ${list.toString()}</p>`
list.prepend("fox");
console.log(list.toString());
content.innerHTML += `<p>list.prepend("fox") :<br> ${list.toString()}</p>`

console.log(list.size());
content.innerHTML += `<p>list.size() :<br> ${list.size()}</p>`
console.log(list.head());
console.log(list.head().value);
content.innerHTML += `<p>list.head().value :<br> ${list.head().value}</p>`
console.log(list.tail());
console.log(list.tail().value);
content.innerHTML += `<p>list.tail().value :<br> ${list.tail().value}</p>`
console.log(list.at(3));
console.log(list.at(3).value);
content.innerHTML += `<p>list.at(3).value :<br> ${list.at(3).value}</p>`
console.log(list.contains("cat"));
content.innerHTML += `<p>list.contains("cat") :<br> ${list.contains("cat")}</p>`
console.log(list.find("snake"));
content.innerHTML += `<p>list.find("snake") :<br> ${list.find("snake")}</p>`
list.pop()
console.log(list.toString());
content.innerHTML += `<p>list.pop() :<br> ${list.toString()}</p>`
list.insertAt("lion", 2);
console.log(list.toString());
content.innerHTML += `<p>list.insertAt("lion", 2) :<br> ${list.toString()}</p>`
list.removeAt(1);
console.log(list.toString());
content.innerHTML += `<p>list.removeAt(1) :<br> ${list.toString()}</p>`
list.insertAt("crocodile", 99);
content.innerHTML += `<p>list.insertAt("crocodile", 99) : <br> will return invalid index</p></p>`
list.removeAt(99);
content.innerHTML += `<p>list.removeAt(99) :<br> will return invalid index</p>`
list.removeAt(0);
content.innerHTML += `<p>list.removeAt(0) :<br> ${list.toString()}</p>`
list.append("owl");
console.log(list.toString());
content.innerHTML += `<p>list.append("owl") :<br> ${list.toString()}</p>`
list.prepend("chicken");
console.log(list.toString());
content.innerHTML += `<p>list.prepend("chicken") :<br> ${list.toString()}</p>`
list.pop()
console.log(list.toString());
content.innerHTML += `<p>list.pop() :<br> ${list.toString()}</p>`