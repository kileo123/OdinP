import { LinkedList } from "./LinkedList.js"

const content = document.getElementById("content")
const list = new LinkedList()

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
content.innerHTML = list.toString()