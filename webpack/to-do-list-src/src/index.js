import "./style.css"
import { addtask } from "./addtask.js"
import { today } from "./today.js"
import { upcoming } from "./upcoming.js"
import { alltask } from "./alltask.js"
import mainPFP from "./assets/images/main_pfp.avif"

export const content = document.getElementById("content")
export const sidebar = document.getElementById("sidebar")
export const addTaskBtn = document.getElementById("addtaskbtn")
export const todayBtn = document.getElementById("todaybtn")
export const upcomingBtn = document.getElementById("upcomingbtn")
export const allTaskBtn = document.getElementById("alltaskbtn")

const userId_div = document.createElement("div")
const userId_icon = document.createElement("img")
// const userId_name = document.createElement("p")

userId_div.classList.add("userinfo")
userId_icon.src = mainPFP
// userId_name.innerText = "Tasker102342"
userId_div.appendChild(userId_icon)
// userId_div.appendChild(userId_name)
sidebar.insertBefore(userId_div, document.getElementById("navbtn"))

addTaskBtn.addEventListener("click", addtask)
todayBtn.addEventListener("click", today)
upcomingBtn.addEventListener("click", upcoming)
allTaskBtn.addEventListener("click", alltask)

today()
