import Player from "./player";
import Ship from "./ship";

export default class Game {
  constructor() {
    this.player = null;
    this.computer = null;
    this.currentTurn = null;
  }

  startGame() {
    this.player = new Player("human");
    this.computer = new Player("computer");
    this.currentTurn = this.player;
  }

  setupComputerBoard() {
    const computerShips = [
      new Ship(5),
      new Ship(4),
      new Ship(3),
      new Ship(3),
      new Ship(2),
    ];

    computerShips.forEach((ship) => {
      let placed = false;
      while (!placed) {
        const isHorizontal = Math.random() < 0.5;
        const startX = Math.floor(
          Math.random() * this.computer.gameboard.board.length
        );
        const startY = Math.floor(
          Math.random() * this.computer.gameboard.board[0].length
        );

        try {
          placed = this.computer.gameboard.placeShip(
            ship,
            startX,
            startY,
            isHorizontal
          );
        } catch (error) {
          placed = false;
        }
      }
    });
  }

  playTurn(x, y) {
    if (this.currentTurn === this.player) {
      this.handlePlayerAttack(x, y);
    } else if (this.currentTurn === this.computer) this.handleComputerAttack();
  }

  handlePlayerAttack(x, y) {
    this.player.attack(this.computer, x, y);
    if (this.isGameOver()) {
      this.endGame();
    } else {
      this.switchTurn();
    }
  }

  handleComputerAttack() {
    this.computer.randomAttack(this.player);
    if (this.isGameOver()) {
      this.endGame();
    } else {
      this.switchTurn();
    }
  }

  isGameOver() {
    return (
      this.player.gameboard.allShipsSunk() ||
      this.computer.gameboard.allShipsSunk()
    );
  }

  switchTurn() {
    this.currentTurn =
      this.currentTurn === this.player ? this.computer : this.player;
  }

  endGame() {
    if (this.player.gameboard.allShipsSunk()) return this.computer;
    return this.player;
  }
}
