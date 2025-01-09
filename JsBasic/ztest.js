let str = "Hallo HHH hhh $$$$ %%% $#@#$^ AbcdEFG"
let shift = 3
const encoded_char = []

console.log(str.length)

for (let i in str){
  let c = str.charCodeAt(i)
  if(c >= 65 && c <= 90 ){
    c=((c+shift-65)%26)+65
    encoded_char.push(String.fromCharCode(c).toLowerCase())
  } else if(c >= 97 && c <= 122 ){
    c=((c+shift-97)%26)+97
    encoded_char.push(String.fromCharCode(c).toUpperCase())
  } else {
    encoded_char.push(String.fromCharCode(c))
  }
}
const encoded = encoded_char.join("")

console.log(encoded)