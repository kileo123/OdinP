import {menuBtn, homeBtn, aboutBtn, content} from "./index.js"
import img0 from "./images/menu0.avif"
import img1 from "./images/menu1.avif"
import img2 from "./images/menu2.avif"
import img3 from "./images/menu3.avif"
import img4 from "./images/menu4.avif"
import img5 from "./images/menu5.avif"
import img6 from "./images/menu6.avif"
import img7 from "./images/menu7.avif"
import img8 from "./images/menu8.avif"
import img9 from "./images/menu9.avif"
import img10 from "./images/menu10.avif"
import img11 from "./images/menu11.avif"

class MenuLibrary{
  constructor(name, price, description, pics) {
    this.name = name
    this.price = price
    this.description = description
    this.pics = pics
  }
}

const menuItem = []

menuItem.push(new MenuLibrary("Stormbreaker Platter", "89.98", "A feast fit for sea captains—grilled swordfish, seared tuna, and blackened mahi-mahi served with a side of roasted seaweed and ocean-salt fries.", img0))
menuItem.push(new MenuLibrary("Tempest Grilled Snapper", "49.98", "Freshly caught red snapper, grilled over an open flame and seasoned with secret ocean spices that will whisk you away to the high seas.", img1))
menuItem.push(new MenuLibrary("Leviathan’s Claw", "44.95", "Succulent king crab claws, steamed to perfection, served with a fiery garlic butter dip that packs the punch of a rising storm.", img2))
menuItem.push(new MenuLibrary("Poseidon’s Feast", "123.89", "A seafood lover’s dream: jumbo prawns, calamari, scallops, and lobster tail, grilled and paired with a zesty lemon-garlic sauce.", img3))
menuItem.push(new MenuLibrary("High Tide Tuna Tacos", "18.89", "Spicy seared tuna tucked into soft tortillas with a tangy mango slaw and drizzled with a house-made wasabi aioli. A perfect balance of heat and cool waves.", img4))
menuItem.push(new MenuLibrary("Deep Sea Scallops", "27.49", "Pan-seared scallops glazed with a citrus beurre blanc, resting on a bed of saffron rice that’s as golden as a sunset on the horizon.", img5))
menuItem.push(new MenuLibrary("Siren’s Chowder", "34.98", "A rich, creamy seafood chowder brimming with chunks of crab, shrimp, and cod, flavored with a splash of white wine and the whispers of the sea.", img6))
menuItem.push(new MenuLibrary("Mariner’s Mussels", "28.99", "Steamed black mussels bathed in a fragrant white wine broth with garlic, shallots, and fresh herbs, served with toasted sourdough to soak up every drop.", img7))
menuItem.push(new MenuLibrary("Windswept Lobster Roll", "48.49", "Tender lobster meat, lightly dressed in lemon butter and nestled in a toasted brioche roll—perfectly capturing the essence of coastal comfort.", img8))
menuItem.push(new MenuLibrary("The Kraken’s Catch", "299.88", "A whole grilled octopus, tender and charred, served with roasted potatoes and a smoky paprika aioli—each bite as bold as the creature itself.", img9))
menuItem.push(new MenuLibrary("Castaway Clams", "17.99", "Fresh littleneck clams sautéed in a white wine and garlic sauce, finished with a hint of chili, served with charred lemon and a side of rustic bread.", img10))
menuItem.push(new MenuLibrary("Rogue Wave Fish & Chips", "14.99", "Beer-battered cod, fried to crispy perfection, served with hand-cut fries and a tangy seaweed tartar sauce, evoking the spirit of coastal pubs after a storm.", img11))

export function menu() {
  menuBtn.setAttribute("class", "active")
  aboutBtn.removeAttribute("class", "active")
  homeBtn.removeAttribute("class", "active")
  content.innerHTML = ""

  const title_div = document.createElement("div")
  const title_h1 = document.createElement("h1")
  const title_h2 = document.createElement("h2")
  title_div.classList.add("title")
  title_h1.textContent = "Tempest Catch"
  title_h2.textContent = "Menu"
  title_div.appendChild(title_h1)
  title_div.appendChild(title_h2)
  content.append(title_div)

  const mainmenu_div = document.createElement("div")
  mainmenu_div.classList.add("mainmenu")
  const menu_div = []
  const menu_h1 = []
  const menu_h2 = []
  const menu_p = []
  const menu_img = []
  

  menuItem.forEach((item, i) => {
    menu_div[i] = document.createElement("div")
    menu_div[i].classList.add("menu")
    menu_h1[i] = document.createElement("h1")
    menu_h2[i] = document.createElement("h2")
    menu_p[i] = document.createElement("p")
    menu_img[i] = document.createElement("img")
    menu_img[i].classList.add("menuContent")
    menu_img[i].id=`menu${i}`

    menu_h1[i].innerText = item.name
    menu_h2[i].innerText = item.price
    menu_p[i].innerText = item.description
    menu_img[i].src = item.pics

    menu_div[i].appendChild(menu_h1[i])
    menu_div[i].appendChild(menu_h2[i])
    menu_div[i].appendChild(menu_p[i])
    menu_div[i].appendChild(menu_img[i])
    mainmenu_div.append(menu_div[i])
  })
  content.append(mainmenu_div)

  const modaldiv = []
  const modalclose = []
  const modalimg = []
  const modalcaption = []

  menuItem.forEach((item, i) => {
    modaldiv[i] = document.createElement("div")
    modaldiv[i].classList.add("modal")
    modaldiv[i].id = `modal${i}`
    modalclose[i] = document.createElement("span")
    modalclose[i].classList.add("modalclose")
    modalclose[i].id = `modal${i}close`
    modalimg[i] = document.createElement("img")
    modalimg[i].classList.add("modal-content")
    modalimg[i].id = `modalimg${i}`
    modalcaption[i] = document.createElement("div")
    modalcaption[i].classList.add("modalcaption")
    modalcaption[i].id = `modalcaption${i}`

    modalclose[i].innerHTML = "&times;"
    modalimg[i].src = item.pics
    modalcaption[i].innerHTML = item.name
    modaldiv[i].appendChild(modalclose[i])
    modaldiv[i].appendChild(modalimg[i])
    modaldiv[i].appendChild(modalcaption[i])
    content.appendChild(modaldiv[i])

    menu_img[i].onclick = function() {
      console.log(`image ${i} clicked`)
      modaldiv[i].style.display = "block";
      modalimg[i].src = this.src;
    }

    modalclose[i].onclick = function(){
      modaldiv[i].style.display = "none";
    }
  })
}