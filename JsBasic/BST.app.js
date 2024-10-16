import { Tree } from "./BST.js"

const RANDOM_NUMBER_QTY = 8
const arr = []

for (let i = 0; i < RANDOM_NUMBER_QTY; i++){
  arr.push(Math.floor(Math.random()*100))
}

// generate array of random number and create binary tree from that array 
console.log("Random number generated array element:")
console.log(`${arr}`)
console.log()
const tree = new Tree(arr)
console.log("printing Tree")
tree.prettyPrint()
isItBalanced()
printOrder()
console.log()

// inserting random number into Tree until unbalanced 
console.log("inserting random number into Tree until unbalanced")
while(tree.isBalanced()){
  tree.insert(Math.floor(Math.random()*100))
}
tree.prettyPrint()
isItBalanced()
printOrder()
console.log()

// rebalancing tree
console.log("rebalancing tree")
tree.rebalance()
tree.prettyPrint()
isItBalanced()
printOrder()
console.log()

// ============================================================

var display_array = []

function displayResult(val){
  display_array.push(val)
}

function isItBalanced(){
  if(tree.isBalanced()){
    console.log("Tree is balanced")
  } else {
    console.log("Tree is NOT balanced")
  }
}

function printOrder(){
  display_array = []
  tree.levelOrder(displayResult)
  console.log(`Level order element ${display_array}`)
  display_array = []
  tree.inOrder(displayResult)
  console.log(`inorder element ${display_array}`)
  display_array = []
  tree.postOrder(displayResult)
  console.log(`postorder element ${display_array}`)
  display_array = []
  tree.preOrder(displayResult)
  console.log(`preorder element ${display_array}`)
  display_array = []
}
