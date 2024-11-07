export default class Gameboard {
  constructor() {
    this.board = Array(10)
      .fill(null)
      .map(() => Array(10).fill(""));
    this.ships = [];
  }

  placeShip(ship, startX, startY, horizontal) {
   const boardHeight = this.board.length;
    const boardWidth = this.board[0].length;
    if (startX < 0 || startX > boardHeight || startY < 0 || startY > boardWidth)
      throw new Error("Not a valid position!");

    if (horizontal) {
      if (startY + ship.length > boardWidth)
        throw new Error("Not a valid position!");
      for (let i = 0; i < ship.length - 1; i++) {
        if (this.board[startX][startY + i] !== ""){
          throw new Error("Not a valid position!");
        }
      }
      for (let i = 0; i < ship.length; i++) {
        this.board[startX][startY + i] = ship;
      }
    } else {
      if (startX + ship.length > boardHeight){
        throw new Error("Not a valid position!");
      }
      for (let i = 0; i < ship.length; i++) {
        if (this.board[startX + i][startY] !== ""){
          throw new Error("Not a valid position!");
        }
      }
      for (let i = 0; i < ship.length; i++) {
        this.board[startX + i][startY] = ship;
      }
    }
    this.ships.push(ship);
    return true;
  }

  receiveAttack(x, y) {
    if (x < 0 || x >= this.board.length || y < 0 || y >= this.board[0].length){
      throw new Error("Not a valid attack!");
    }
    if (this.board[x][y] === "hit" || this.board[x][y] === "miss") {
      throw new Error("Position already attacked!");
    }
    if (this.board[x][y] !== "") {
      const ship = this.board[x][y];
      ship.hit();
      this.board[x][y] = "hit";
    } else {
      this.board[x][y] = "miss";
    }
  }
  allShipsSunk() {
    if (this.ships.length === 0) return false;
    return this.ships.every((ship) => ship.isSunk());
  }
}
