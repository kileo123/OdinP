import node from "./node.js"

export default function LinkedList() {
  var firstNode = null
  var lastNode = null
  
  return{
    head() { return firstNode },
    tail() { return lastNode },
    append(value) {
      // console.log(`append ${value}`)
      const newNode = new node(value)
      if (firstNode === null) {
        firstNode = newNode
        lastNode = newNode
      } else {
        lastNode.nextNode = newNode
        lastNode = newNode
      }
    },
    prepend(value){
      // console.log(`prepend ${value}`)
      const newNode = new node(value)
      if (firstNode === null) {
        firstNode = newNode
        lastNode = newNode
      } else {
        newNode.nextNode = firstNode
        firstNode = newNode
      }
    },
    update(value, index){
      // console.log(`update ${value}, ${index}`)
      if(this.checkIndex(index)){
        let currentIndex = 0
        let currentNode = this.head()
        while (currentNode) {
          if (currentIndex === index) {
            currentNode.value = value
          }
          currentNode = currentNode.nextNode
          currentIndex++
        }
      }
    },
    size(){
      // console.log(`checking size`)
      let size = 0
      let current = this.head()
      while (current) {
        size++
        current = current.nextNode
      }
      return size
    },
    at(index){
      // console.log(`at ${index}`)
      if (this.checkIndex(index)){
        let current = this.head()
        let count = 0
    
        while (current) {
            if (count === index) {
                return current
            }
            count++
            current = current.nextNode
        }
      } 
      return null
    },
    pop(){
      // console.log(`pop`)
      const size = this.size()
      if (size < 1) {
        console.log("list empty")
      } else if (size === 1) {
        firstNode = null
        lastNode = null
      } else {
        const newTail = this.at(size - 2)
        newTail.nextNode = null
        lastNode = newTail
      }
    },
    contains(value){
      // console.log(`contains ${value}`)
      let currentNode = this.head()
      while (currentNode) {
        if (currentNode.value === value) {
          return true
        }
        currentNode = currentNode.nextNode
      }
      return false
    },
    find(value) {
      // console.log(`find ${value}`)
      let currentNode = this.head()
      let index = 0
      while (currentNode) {
        if (Array.isArray(currentNode.value)) {
          if (currentNode.value[0] === value) {
            return index
          }
        } else {
          if (currentNode.value === value) {
            return index
          }
        }
        currentNode = currentNode.nextNode
        index++
      }
      return null
    },
    toString() {
      // console.log(`toString`)
      let output = ""
      let current = this.head()
      while (current) {
        output += `( ${current.value} ) → `
        current = current.nextNode
      }
      output += "null"
      return output
    },
    insertAt(value, index) {
      // console.log(`insertAt ${value}, ${index}`)
      const newNode = new node()
      newNode.value = value
      const size = this.size()
      if (this.checkIndex(index)) {
        if (index === 0) {
          firstNode = newNode
          newNode.nextNode = this.at(index)
        } else if (index === size - 1) {
          lastNode = newNode
          this.at(index - 1).nextNode = newNode
        } else {
          newNode.nextNode = this.at(index)
          this.at(index - 1).nextNode = newNode
        }
      }
    },
    removeAt(index) {
      // console.log(`removeAt ${index}`)
      const size = this.size()
      if (this.checkIndex(index)) {
        if (index === 0 && size === 1) {
          firstNode = null
        } else if (index === 0 && size > 1) {
          firstNode = this.at(index + 1)
        } else if (index > size ) {
          lastNode = this.at(index - 1)
          lastNode.nextNode = null
        } else {
          this.at(index - 1).nextNode = this.at(index + 1)
        }
      }
    },
    checkIndex(index){
      // console.log(`checkIndex ${index}`)
      const size = this.size()
      if(size > 0 && index >= 0 && index < size && Number.isInteger(index)){
        return true
      } else {
        console.log("INVALID INDEX")
        return false
      }
    }
  }
}