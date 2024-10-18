import { knightMoves } from "./knight.js"

const content = document.getElementById("content")
content.innerHTML="Knight Moves<br>"
var output

function printOut(initial, end){
  content.innerHTML += `<br>from [${initial}] to [${end}]<br>`
  console.log(knightMoves(initial, end))
  output = knightMoves(initial, end)
  if(output === "Invalid coordinates"){
    content.innerHTML += `${output}<br>`
  } else {
    content.innerHTML += `${output.length-1} Moves : `
    output.forEach((e,i) => {
      if(i === output.length-1){
        content.innerHTML += `[${e}] <br>`
      } else {
        content.innerHTML += `[${e}] →  `
      }
    });
  }
}

printOut([3,3], [4,3])
printOut([8,9], [1,1])
printOut([1,1], [9,7])

content.innerHTML += `<br>===== RANDOM GENERATED COORDINATES BELOW =====<br>`
console.log("===== RANDOM GENERATED COORDINATES BELOW =====")

function getRand(){
  return Math.floor(Math.random()*10)%8
}
for(let x = 0 ; x < 5 ; x ++) {
  printOut([getRand(),getRand()], [getRand(),getRand()])
}

