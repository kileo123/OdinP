export class SHIP{
  constructor(name, length){
    this.name = name
    this.length = length
    this.rotated = false
    this.hit = 0
    this.sunk = false
    this.placed = false
  }
  hit(){
    this.hit++
  }
  isSunk(){
    if (this.hit >= this.length){
      this.sunk = true
    }
  }
}