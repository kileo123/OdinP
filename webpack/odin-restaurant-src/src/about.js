import {menuBtn, homeBtn, aboutBtn} from "./index.js"
import map from "./images/map.jpg"

export function about() {
  menuBtn.removeAttribute("class", "active")
  aboutBtn.setAttribute("class", "active")
  homeBtn.removeAttribute("class", "active")
  content.innerHTML = ""

  const title_div = document.createElement("div")
  const title_h1 = document.createElement("h1")
  const title_h2 = document.createElement("h2")
  title_div.classList.add("title")
  title_h1.textContent = "Tempest Catch"
  title_h2.textContent = "About Us"
  title_div.appendChild(title_h1)
  title_div.appendChild(title_h2)
  content.append(title_div)

  const map_div = document.createElement("div")
  map_div.classList.add("map")
  const map_p = document.createElement("p")
  const mapImage = document.createElement("img")
  mapImage.src = map
  map_p.innerText = `
    Our Location:
    1234 5th Main Street
    Agloe, Colchester
    Delaware County, New York, 99999
    
    Contact us for any inquiries:
    +(555)555.5555
    
    Operating Hours:
    Monday to Friday: 10AM - 10PM
    Saturday and Sunday : 9AM - 11PM
  `
  
  map_div.appendChild(mapImage)
  map_div.appendChild(map_p)
  content.append(map_div)
      
}