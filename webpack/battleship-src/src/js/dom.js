import Game from "./game.js";
import Ship from "./ship.js";

import { content } from "../index.js";

const dom = {
  game: null,
  isHorizontal: true,

  init() {
    content.innerHTML=`
      <div class="newGameContainer">
        <h2>New Game</h2>
        <div class="newGameBtnContainer">
          <button id="pvpBtn" class="newGameBtn">Player VS Player</button>
          <button id="pvbBtn" class="newGameBtn">Player VS Bot</button>
          <button id="bvbBtn" class="newGameBtn">Bot VS Bot</button>
        </div>
      </div>
    `

    const pvpBtn = document.getElementById("pvpBtn")
    const pvbBtn = document.getElementById("pvbBtn")
    const bvbBtn = document.getElementById("bvbBtn")
    
    pvpBtn.addEventListener("click", () => {
      console.log("pvp button pressed")
      alert("NOT YET IMPLEMENTED\nwas an idea intially, but now i need to rework everything and replace drag with touch for the game to work with mobile device\nSo for now its only PvB")
    })

    pvbBtn.addEventListener("click", () => {
      console.log("pvb button pressed")
      this.startGame()
    })

    bvbBtn.addEventListener("click", () => {
      console.log("bvb button pressed")
      alert("NOT YET IMPLEMENTED\nwas an idea intially, but now i need to rework everything and replace drag with touch for the game to work with mobile device\nSo for now its only PvB")
    })
  },

  renderBoard(board, playerType) {
    const boardContainer = document.createElement("div");
    boardContainer.classList.add(`${playerType}-board`);

    board.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        const cellElement = document.createElement("div");
        cellElement.classList.add("board-cell");

        if (cell === "hit") {
          cellElement.classList.add("cell-hit");
        } else if (cell === "miss") {
          cellElement.classList.add("cell-miss");
        } else if (cell !== "") {
          cellElement.classList.add("cell-occupied");
        }

        cellElement.dataset.row = rowIndex;
        cellElement.dataset.col = colIndex;

        boardContainer.appendChild(cellElement);
      });
    });

    const parentElement = document.querySelector(
      `.${playerType}-board-container`
    );
    parentElement.innerHTML = ""
    parentElement.appendChild(boardContainer);

  },

  setupBoardEventListeners() {
    const computerBoardCells = document.querySelectorAll(
      ".computer-board-container .board-cell"
    );

    computerBoardCells.forEach((cell) => {
      cell.addEventListener("click", (event) => this.handleBoardClick(event));
    });
  },

  handleBoardClick(event) {
    const clickedCell = event.target;
    const x = parseInt(clickedCell.dataset.row, 10);
    const y = parseInt(clickedCell.dataset.col, 10);

    const { board } = this.game.computer.gameboard;
    if (board[x][y] === "hit" || board[x][y] === "miss") {
      return; 
    }
    this.game.playTurn(x, y);
    this.renderBoard(
      this.game.computer.gameboard.board,
      this.game.computer.type
    );
    clickedCell.removeEventListener("click", this.handleBoardClick);

    if (this.checkForGameOver()) return;

    setTimeout(() => {
      this.game.playTurn();
      this.renderBoard(this.game.player.gameboard.board, this.game.player.type);
      if (!this.checkForGameOver()) this.setupBoardEventListeners();
    }, 500);
  },

  checkForGameOver() {
    if (this.game.isGameOver()) {
      this.handleGameOver();
      return true;
    }
    return false;
  },

  handleGameOver() {
    const winner = this.game.endGame().type === "human" ? "You" : "Computer";

    const overlay = document.createElement("div");
    overlay.classList.add("modal-overlay");

    const modal = document.createElement("div");
    modal.classList.add("modal");

    const winnerText = document.createElement("p");
    winnerText.innerHTML = `${winner} won!`;

    const playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Play Again";
    playAgainButton.addEventListener("click", () => {
      document.body.removeChild(overlay); 
      this.resetGame();
    });

    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", () => {
      document.body.removeChild(overlay);
    });

    modal.appendChild(winnerText);
    modal.appendChild(playAgainButton);
    modal.appendChild(closeButton);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
  },

  startGame() {
    content.innerHTML=""
    const boardContainer = document.createElement("div");
    boardContainer.classList.add("board-container");

    const playerBoardContainer = document.createElement("div");
    playerBoardContainer.classList.add("human-board-container");
    const computerBoardContainer = document.createElement("div");
    computerBoardContainer.classList.add("computer-board-container");

    boardContainer.appendChild(playerBoardContainer);
    boardContainer.appendChild(computerBoardContainer);
    content.appendChild(boardContainer);

    this.game = new Game();
    this.game.startGame();
    this.renderSetupGame();
  },

  resetGame() {
    this.game = null;
    this.init();
  },

  renderSetupGame() {
    const boardContainer = document.querySelector(".board-container");
    this.renderBoard(this.game.player.gameboard.board, this.game.player.type);
    const shipContainer = document.createElement("div");
    shipContainer.classList.add("ship-container");
    const shipSelection = document.createElement("div");
    shipSelection.classList.add("ship-select");
    const shipSizes = [5, 4, 3, 3, 2];

    shipSizes.forEach((size, index) => {
      const shipElement = document.createElement("div");
      shipElement.classList.add("ship");
      shipElement.dataset.size = size;
      shipElement.draggable = true;
      shipElement.id = `ship-${size}-${index}`;

      for (let i = 0; i < size; i++) {
        const shipSegment = document.createElement("div");
        shipSegment.classList.add("ship-cell");
        shipElement.appendChild(shipSegment);
      }

      shipElement.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", size);
        e.dataTransfer.setData("shipElementId", e.target.id);
      });

      shipSelection.appendChild(shipElement);
    });
    shipContainer.appendChild(shipSelection);

    const rotateButton = document.createElement("button");
    rotateButton.classList.add("rotate-btn");
    rotateButton.textContent = "Rotate";
    rotateButton.addEventListener("click", () => {
      this.rotateShips();
    });
    shipContainer.appendChild(rotateButton);

    boardContainer.appendChild(shipContainer);
    this.setupPlayerBoardForShipPlacement();
  },

  setupPlayerBoardForShipPlacement() {
    const playerBoardCells = document.querySelectorAll(
      ".human-board .board-cell"
    );

    playerBoardCells.forEach((cell) => {
      cell.addEventListener("dragover", (e) => {
        e.preventDefault(); // Allow drop
      });

      cell.addEventListener("drop", (e) => {
        e.preventDefault();
        const shipSize = e.dataTransfer.getData("text/plain");
        const row = parseInt(e.target.dataset.row, 10);
        const col = parseInt(e.target.dataset.col, 10);

        try {
          const shipPlaced = this.game.player.gameboard.placeShip(
            new Ship(parseInt(shipSize, 10)),
            row,
            col,
            this.isHorizontal
          );

          if (shipPlaced) {
            // Remove selected ship from ship selection
            const shipElementId = e.dataTransfer.getData("shipElementId");
            const shipNode = document.getElementById(shipElementId);
            if (shipNode) {
              shipNode.remove();
            }
            this.renderBoard(
              this.game.player.gameboard.board,
              this.game.player.type
            );

            this.setupPlayerBoardForShipPlacement();

            const remainingShips =
              document.querySelectorAll(".ship-select .ship");
            if (remainingShips.length === 0) {
              const rotateButton = document.querySelector(".rotate-btn");
              rotateButton.remove();
              const playButton = document.createElement("button");
              playButton.textContent = "Play Game!";
              playButton.addEventListener("click", () => this.playGame());
              const shipSelection = document.querySelector(".ship-select");
              shipSelection.appendChild(playButton);
            }
          }
        } catch (error) {
          console.error(error.message);
        }
      });
    });
  },

  playGame() {
    const shipContainer = document.querySelector(".ship-container");
    shipContainer.remove();
    this.game.setupComputerBoard();
    this.renderBoard(
      this.game.computer.gameboard.board,
      this.game.computer.type
    );
    this.setupBoardEventListeners();
  },

  rotateShips() {
    this.isHorizontal = !this.isHorizontal; // Toggle vertical or horizontal placement
    const shipSelection = document.querySelector(".ship-select");
    const ships = document.querySelectorAll(".ship");

    if (!this.isHorizontal) {
      shipSelection.style.flexDirection = "row";
      ships.forEach((ship) => {
        const shipElement = ship; 
        shipElement.style.flexDirection = "column";
      });
    } else {
      shipSelection.style.flexDirection = "column";
      ships.forEach((ship) => {
        const shipElement = ship; 
        shipElement.style.flexDirection = "row";
      });
    }
  },
};

export default dom;
