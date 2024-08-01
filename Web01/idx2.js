// your JavaScript file
const container = document.querySelector("#container");
const content1 = document.createElement("div");
content1.classList.add("content");
content1.textContent = "This is the glorious text-content!";
container.appendChild(content1);

const content2 = document.createElement("p");
content2.textContent = "Hey I'm Red!"
content2.style.color = "red"
container.appendChild(content2);

const content3 = document.createElement("h3");
content3.textContent = "I'm a blue h3"
content3.style.color = "blue"

const content4 = document.createElement("div");
const c4node1 = document.createElement("div");
c4node1.textContent = "aaa"
content4.appendChild(c4node1)
container.appendChild(content4)