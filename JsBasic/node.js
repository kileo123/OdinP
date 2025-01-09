// node as function factory
// export default function node(value=null){
//   return{
//     value: value, 
//     nextNode: null
//   }
// }

// node as class
export default class node{
  constructor (value = null){
    this.value = value
    this.nextNode = null
  }
}
