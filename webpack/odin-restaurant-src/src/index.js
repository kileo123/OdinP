import logoPic from "./images/logo.png"
import fbicon from "./images/facebook.svg"
import xticon from "./images/xtwitter.svg"
import tticon from "./images/tiktok.svg"
import igicon from "./images/instagram.svg"

import "./style.css"
import { home } from "./home.js"
import { menu } from "./menu.js"
import { about } from "./about.js"

export const content = document.getElementById("content")
export const header = document.getElementById("header")
export const homeBtn = document.getElementById("homebtn")
export const menuBtn = document.getElementById("menubtn")
export const aboutBtn = document.getElementById("aboutbtn")

const logo = document.getElementById("logo")
const logoimg = document.createElement("img")
const div = document.createElement("div")
const h1 = document.createElement("h1")
const h2 = document.createElement("h2")

logoimg.src = logoPic
logo.appendChild(logoimg)
h1.innerText = "Tempest Catch"
div.appendChild(h1)
h2.innerText = "Where the Ocean’s Finest Meets Your Plate."
div.appendChild(h2)
div.classList.add("logotext")
logo.appendChild(div)

const socmed_div = document.createElement("div")
socmed_div.classList.add("socmed")
const tt_a = document.createElement("a")
const tt_img = document.createElement("img")
tt_a.href = "#"
tt_img.src=tticon
tt_a.appendChild(tt_img)
socmed_div.appendChild(tt_a)
const ig_a = document.createElement("a")
const ig_img = document.createElement("img")
ig_a.href = "#"
ig_img.src=igicon
ig_a.appendChild(ig_img)
socmed_div.appendChild(ig_a)
const fb_a = document.createElement("a")
const fb_img = document.createElement("img")
fb_a.href = "#"
fb_img.src=fbicon
fb_a.appendChild(fb_img)
socmed_div.appendChild(fb_a)
const xt_a = document.createElement("a")
const xt_img = document.createElement("img")
xt_a.href = "#"
xt_img.src=xticon
xt_a.appendChild(xt_img)
socmed_div.appendChild(xt_a)
header.appendChild(socmed_div)

homeBtn.addEventListener("click", home)
menuBtn.addEventListener("click", menu)
aboutBtn.addEventListener("click", about)

home()
