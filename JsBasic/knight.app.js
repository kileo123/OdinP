import { knightMoves } from "./knight.js"

const content = document.getElementById("content")
content.innerHTML="<p>Knight Moves</p>"
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

for(let x = 0 ; x < 5 ; x ++) {
  var r1 = Math.floor(Math.random()*10)%8
  var r2 = Math.floor(Math.random()*10)%8
  var r3 = Math.floor(Math.random()*10)%8
  var r4 = Math.floor(Math.random()*10)%8
  if(r1 == r3 && r2 == r4){
    x--
  } else {
    printOut([r1,r2], [r3,r4])
  }
}

