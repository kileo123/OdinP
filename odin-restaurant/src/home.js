import {menuBtn, homeBtn, aboutBtn, content} from "./index.js"
import interiorPhoto from "./images/interior.jpg"

export function home() {
  menuBtn.removeAttribute("class", "active")
  aboutBtn.removeAttribute("class", "active")
  homeBtn.setAttribute("class", "active")
  content.innerHTML = ""

  const title_div = document.createElement("div")
  const title_h1 = document.createElement("h1")
  title_div.classList.add("title")
  title_h1.textContent = "Tempest Catch"
  title_div.appendChild(title_h1)
  content.append(title_div)

  const interior_div = document.createElement("div")
  interior_div.classList.add("interior")
  const interior_p = document.createElement("p")
  const interiorImage = document.createElement("img")
  interiorImage.src = interiorPhoto
  interior_p.innerHTML = `
                Welcome to Tempest Catch, where the ocean’s freshest flavors come ashore.
                Our passion for seafood shines through every dish, 
                with our signature fish dishes leading the way. 
                From expertly grilled fillets to hearty seafood platters, 
                we bring the bounty of the sea straight to your plate. 
                Whether you're craving a casual bite or a memorable dining experience, 
                Tempest Catch is your destination for an unforgettable seafood adventure. 
                Dive in and taste the storm!`
  interior_div.appendChild(interiorImage)
  interior_div.appendChild(interior_p)
  content.append(interior_div)


}