export function radixSortLSD(numArray) {
  let maxDigitCount = 0
  for (let i in numArray) {
    if (numArray[i] < 0 || isNaN(numArray[i])) {
      console.log("ERROR: non integer or negative value found")
      return null
    } else {
      maxDigitCount = Math.max(maxDigitCount, Math.floor(Math.log10(numArray[i])) + 1)  
    }    
  }
  for (let i = 0; i < maxDigitCount; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []) 
    for (let j in numArray) {
      let digit = Math.floor(numArray[j]/(10**i)) % 10
      digitBuckets[digit].push(numArray[j])
    }
    numArray = [].concat(...digitBuckets)
  }
  return numArray
}

