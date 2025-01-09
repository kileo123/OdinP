export function capitalize(str) {
  if (str.length < 1){
    return "Input empty"
  } else if (typeof str === "string"){
    return str.charAt(0).toUpperCase()+str.slice(1)
  } else {  
    return "Input NOT a string"
  }
}

export function reverseString(str) {
  if (str.length < 1){
    return "Input empty"
  } else if (typeof str === "string"){
    return str.split("").reverse().join("")
  } else {  
    return "Input NOT a string"
  }
}

export const calculator = {
  checkInput: (a, b) => {
    if (a === "" || b === "" || a === undefined || b === undefined || isNaN(a) || isNaN(b)) {
      return false
    } else {
      return true
    }
  },

  add: (a, b) => {
    return calculator.checkInput(a, b) ? a+b : "Input NOT a number"
  },

  subtract: (a, b) => {
    return calculator.checkInput(a, b) ? a-b : "Input NOT a number"
  },

  multiply: (a, b) => {
    return calculator.checkInput(a, b) ? a*b : "Input NOT a number"
  }, 

  divide: (a, b) => {
    if(b === 0){
      return "ERROR Divided by zero"
    } else {
      if(calculator.checkInput(a, b)){
        return a/b
      } else {
        return "Input NOT a number"
      }
    }
  }
}

export function caesarCipher(str, shift){
  const encoded_char = []
  if (str.length < 1 || shift === "" || shift === undefined || shift === null){
    return "Input empty"
  } else if (typeof shift !== "number"){
    return "Shift NOT a number"
  } else if (typeof str !== "string"){
    return "Input NOT a string"
  } else {  
    for (let i in str){
      let c = str.charCodeAt(i)
      if(c >= 65 && c <= 90 ){
        c=((c+shift-65)%26)+65
      } else if(c >= 97 && c <= 122 ){
        c=((c+shift-97)%26)+97
      } 
      encoded_char.push(String.fromCharCode(c))
    }
    return encoded_char.join("") 
  }
}

export function analyzeArray(arr) {
  if (!Array.isArray(arr) || !arr.length || !arr.every((e) => Number.isInteger(e))) {
    return "Input empty or input NOT a number"
  } else {
    return {
      average: arr.reduce((total, val) => total+val)/arr.length,
      min: Math.min(...arr),
      max: Math.max(...arr),
      length: arr.length,
    }
  }
}