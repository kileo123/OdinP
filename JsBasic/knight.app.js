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
printOut([1,1], [6,6])
printOut([5,4], [1,0])
printOut([0,0], [7,7])
printOut([0,0], [7,0])
printOut([0,0], [0,7])
printOut([6,7], [6,0])
printOut([8,9], [1,1])
printOut([1,1], [9,7])
