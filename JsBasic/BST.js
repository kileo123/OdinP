import { radixSortLSD } from "./radixsortLSD.js"

class BSTNode {
  constructor(data = null) {
    this.data = data
    this.left = null
    this.right = null
  }
}

export function Tree(arr){
  let theNode = buildTree(arr)

  function root(){
    return theNode
  }

  function buildTree(arr) {
    try {
      if (Array.isArray(arr) && arr.every(Number.isInteger)) {
        arr = radixSortLSD([...new Set(arr)])
      } else {
        throw new TypeError('array empty or array contains non number value.');
      }
    } catch (e) {
      console.error(e);
    }

    if(arr.length === 0){
      return null
    }
  
    const mid = Math.floor(arr.length/2)
    const rootNode = new BSTNode(arr[mid])
    const leftArr = arr.slice(0,mid)
    const rightArr = arr.slice(mid+1)
    rootNode.left = buildTree(leftArr)
    rootNode.right = buildTree(rightArr)
  
    return rootNode
  }

  function prettyPrint(node = root(), prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false );
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

  function find(value) {
    if (!Number.isInteger(value)) {
      console.log('Input contains non number value.')
      return null
    }
    let currentNode = root()
    while (currentNode){
      if(currentNode.data === value){
        return currentNode
      } else {
        if (value < currentNode.data) {
          currentNode = currentNode.left
        } else {
          currentNode = currentNode.right
        }
     }
    }
    return false
  }

  function insert(value){
    if (!Number.isInteger(value)) {
      console.log('Input contains non number value.')
      return null
    }
    if(find(value)){
      // console.log("same value exist")
      return null
    }
    
    let currentNode = root()
    let xNode = new BSTNode(value)

    while(currentNode){
      if (value < currentNode.data){
        if(currentNode.left !== null){
          currentNode = currentNode.left
        } else {
          currentNode.left = xNode
          return
        }
      } else {
        if(currentNode.right !== null){
          currentNode = currentNode.right
        } else {
          currentNode.right = xNode
          return
        }
      }
    }
  }

  function deleteItem(value){
    if (!Number.isInteger(value)) {
      console.log('Input contains non number value.')
      return null
    }
    let currentNode = root()
    let xNode = currentNode
    if( xNode.data === value ){
      // console.log("root value")
        let smallestNode = xNode.right
        while(smallestNode.left){
            smallestNode = smallestNode.left
        }
        deleteItem(smallestNode.data)
        xNode.data = smallestNode.data
    } else if( find(value) ){
      while ( currentNode ){
        if(currentNode.left.data === value || currentNode.right.data === value){
          xNode = currentNode
          break
        } else {
          if (value < currentNode.data) {
            currentNode = currentNode.left
          } else {
            currentNode = currentNode.right
          }
        }
      }
      console.log(`${value} found, deleting`)
      console.log(xNode)
      if(xNode.left.data === value){
        if (xNode.left.left === null && xNode.left.right === null){
          console.log(`xNode.left.data ${xNode.left.data}`)
          xNode.left = null
        } else {
          if (xNode.left.left !== null && xNode.left.right === null){
            xNode.left = xNode.left.left
          } else if (xNode.left.left === null && xNode.left.right !== null){
            xNode.left = xNode.left.right
          } else {
            let smallestNode = xNode.left.right
            while(smallestNode.left){
               smallestNode = smallestNode.left
            }
            deleteItem(smallestNode.data)
            xNode.left.data = smallestNode.data
          }
        }
      } else if(xNode.right.data === value){
        if (xNode.right.left === null && xNode.right.right === null){
          console.log(`xNode.right.data ${xNode.right.data}`)
          xNode.right = null
        } else {
          if (xNode.right.left !== null && xNode.right.right === null){
            xNode.right = xNode.right.left
          } else if (xNode.right.left === null && xNode.right.right !== null){
            xNode.right = xNode.right.right
          } else {
            let smallestNode = xNode.right.right
            while(smallestNode.left){
               smallestNode = smallestNode.left
            }
            deleteItem(smallestNode.data)
            xNode.right.data = smallestNode.data
          }
        }
      } 
    } else {
      console.log(`${value} not found`)
    }
  }

  function levelOrder(callback){
    if (!callback) {
        throw new Error("callback required.");
    }

    const queue = [root()]
    while (queue.length > 0) {
      const xNode = queue.shift()
      if (xNode) {
        callback(xNode.data)
        if (xNode.left) {
          queue.push(xNode.left)
        }
        if (xNode.right) {
          queue.push(xNode.right)
        }
      }
    }
  }

  function inOrder(callback){
    if (!callback) {
      throw new Error("callback required.")
    }
    inOrderRec(root(), callback)
  }
  
  function inOrderRec(node, callback){
    if(node.left){
      inOrderRec(node.left, callback)
    } 
    callback(node.data)
    if(node.right){
      inOrderRec(node.right, callback)
    } 
  }

  function postOrder(callback){
    if (!callback) {
      throw new Error("callback required.")
    }
    postOrderRec(root(), callback)
  }
  
  function postOrderRec(node, callback){
    if(node.left){
      postOrderRec(node.left, callback)
    } 
    if(node.right){
      postOrderRec(node.right, callback)
    } 
    callback(node.data)
  }

  function preOrder(callback){
    if (!callback) {
      throw new Error("callback required.")
    }
    preOrderRec(root(), callback)
  }
  
  function preOrderRec(node, callback){
    callback(node.data)
    if(node.left){
      preOrderRec(node.left, callback)
    } 
    if(node.right){
      preOrderRec(node.right, callback)
    } 
  }

  function depth(node) {
    if(typeof(node) === "number"){
      var value = node
    } else if(typeof(node) === "object"){
      var value = node.data
    } else {
      console.log("input value neither value nor object")
      return null
    }
    let currentNode = root()
    let depth = 0
    while (currentNode){
      if(currentNode.data === value){
        return depth
      } else {
        depth++
        if (value < currentNode.data) {
          currentNode = currentNode.left
        } else {
          currentNode = currentNode.right
        }
     }
    }
    console.log("Not Found")
    return null;
  }

  function height(node) {
    if(typeof(node) === "number"){
      var value = node
    } else if(typeof(node) === "object"){
      var value = node.data
    } else {
      console.log("input value neither value nor object")
      return null
    }
    let currentNode = find(value)
    let leftHeight = 1
    let rightHeight = 1
    if(currentNode.left !== null){
      leftHeight+=height(currentNode.left)
    } 
    if(currentNode.right !== null){
      rightHeight+=height(currentNode.right)
    }
    return Math.max(rightHeight, leftHeight)
  }

  function isBalanced(){
    let rootNode = root()
    let leftHeight = height(rootNode.left)+1
    let rightHeight = height(rootNode.right)+1
    if( Math.abs(leftHeight-rightHeight)>1 ){
      // console.log(`unbalanced: left depth ${leftHeight}, right depth ${rightHeight}`)
      return false
    } else {
      return true
    }
  }

  function rebalance(){
    let newArr = []
    inOrder((val) => newArr.push(val))
    theNode = buildTree(newArr)
  }

  return{
    prettyPrint,
    insert,
    deleteItem,
    levelOrder,
    inOrder,
    postOrder,
    preOrder,
    find,
    depth,
    height,
    isBalanced,
    rebalance
  }
}
