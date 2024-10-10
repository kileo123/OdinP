const result = document.getElementById("result")
const fibsBtn = document.getElementById("fibs")
const fibsRecBtn = document.getElementById("fibsRec")
const mergeSortBtn = document.getElementById("mergeSort")

fibsBtn.addEventListener("click", () => {
  result.innerHTML=`Fibbonaci itteration`
  var maxNum = parseInt(prompt("Max number", "8")) ?? 8
  if(isNaN(maxNum)) {
    result.innerHTML="INVALID INPUT"    
  } else {
    result.innerHTML+=`<br>Max number: ${maxNum}`
    result.innerHTML+=`<br>[${fibs(maxNum)}]`
  }
})

function fibs(maxNum){
  console.log("Fibonacci itteration")
  if (maxNum <= 1 ) return [0]
  const f_itt = [0, 1]
  for (let i = 2; i < maxNum; i++){
    f_itt.push(f_itt[i-1] + f_itt[i-2])
    console.log(f_itt)
  }
  return f_itt
}

fibsRecBtn.addEventListener("click", () => {
  result.innerHTML="Fibbonaci recursion"
  var maxNum = parseInt(prompt("Max number", "8")) ?? 8
  if(isNaN(maxNum)) {
    result.innerHTML="INVALID INPUT"    
  } else {
    result.innerHTML+=`<br>Max number: ${maxNum}`
    result.innerHTML+=`<br>[${fibsRec(maxNum)}]`
  }
})

function fibsRec(maxNum){
  console.log(`Fibonacci Recursion ${maxNum}`)
  if (maxNum <= 1 ) return [0]
  if (maxNum === 2) return [0, 1]
  const f_rec = fibsRec(maxNum-1)
  f_rec.push(f_rec[f_rec.length-1]+f_rec[f_rec.length-2])
  console.log(f_rec)
  return f_rec
}

mergeSortBtn.addEventListener("click", () => {
  result.innerHTML="Merge sort"
  var nArr = [3, 2, 1, 13, 8, 5, 0, 1]
  var promptText = "Enter array, separate number with comma without space\n"
  promptText += "click okay or leave empty for default value\n"
  promptText += "default value: 3,2,1,13,8,5,0,1"
  var input = prompt(promptText, "3,2,1,13,8,5,0,1")
  if(Boolean(input?.match(/^(?:\d+(?:,\d+)*,?)?$/))){
    var arr = input.split(",")
    nArr = []
    arr.forEach(val => {
      nArr.push(parseInt(val))
    })
    console.log(nArr)
    result.innerHTML+=`<br>initial array: [${nArr}]`
    result.innerHTML+=`<br>sorted array: [${mergeSort(nArr)}]`
  } else {
    result.innerHTML="INVALID INPUT"    
  }
})

function mergeSort(arr){
  console.log(`mergeSort ${arr}`)
  if(arr.length <= 1) return arr

  let left = arr.slice(0, arr.length / 2)
  let right = arr.slice(arr.length / 2)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const sorted = []
  if (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      sorted.push(left.shift())
    } else {
      sorted.push(right.shift())
    }
    return sorted.concat(merge(left, right))
  }

  if (left.length === 0) return sorted.concat(right)
  if (right.length === 0) return sorted.concat(left)
}
