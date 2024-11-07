/**
 * @jest-environment jsdom
 */
import DOM from "../dom";

describe("DOM module", () => {
  beforeEach(() => {
    // Set up the initial DOM state if necessary
    document.body.innerHTML = ""; // Clear the document body before each test
    DOM.init(); // Initialize the DOM
  });

  afterEach(() => {
    // Clean up after each test if necessary
    document.body.innerHTML = ""; // Clear the document body after each test
  });

  test("init() sets up the initial game UI correctly", () => {
    // Check that necessary DOM elements are created
    expect(document.querySelector(".heading").textContent).toBe("battlesh!p");
    expect(document.querySelector(".human-board-container")).not.toBeNull();
    expect(document.querySelector(".computer-board-container")).not.toBeNull();
    expect(document.querySelector(".start-game-btn")).not.toBeNull();
    expect(document.querySelector(".reset-game-btn")).not.toBeNull();
  });

  test("renderBoard() renders the board correctly", () => {
    const mockBoard = [
      ["", "", "hit"],
      ["miss", "", ""],
      ["hit", "miss", ""],
    ];

    DOM.renderBoard(mockBoard, "human");

    // Check if board is rendered correctly
    const playerBoard = document.querySelector(".human-board");
    expect(playerBoard).not.toBeNull();

    // Check specific cell states
    const cells = playerBoard.querySelectorAll(".board-cell");
    expect(cells.length).toBe(9);
    expect(cells[0].classList.contains("cell-occupied")).toBe(false);
    expect(cells[2].classList.contains("cell-hit")).toBe(true);
    expect(cells[3].classList.contains("cell-miss")).toBe(true);
  });

  test("startGame() initializes the game and removes the start button", () => {
    const startButton = document.querySelector(".start-game-btn");
    startButton.click();

    expect(DOM.game).not.toBeNull();
    expect(document.querySelector(".start-game-btn")).toBeNull();
    expect(document.querySelector(".ship-container")).not.toBeNull(); // Ensure ship selection is displayed
  });

  test("handleBoardClick() triggers player attack correctly", () => {
    jest.useFakeTimers();

    document.body.innerHTML = `
    <div class="player-board-container"></div>
    <div class="computer-board-container"></div>
  `;
    // Mock the game object structure
    DOM.game = {
      playTurn: jest.fn(),
      isGameOver: jest.fn(),
      computer: {
        gameboard: {
          board: [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
          ],
        },
        type: "computer",
      },
      player: {
        gameboard: {
          board: [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
          ],
        },
        type: "player",
      },
    };

    // Simulate a click event
    const cell = document.createElement("div");
    cell.dataset.row = "1";
    cell.dataset.col = "1";
    DOM.handleBoardClick({ target: cell });

    // Check if playTurn is called with correct arguments for the player
    expect(DOM.game.playTurn).toHaveBeenCalledWith(1, 1);
    jest.advanceTimersByTime(500);
    // Check if playTurn is called again (for the computer"s turn)
    expect(DOM.game.playTurn).toHaveBeenCalledTimes(2);
    jest.useRealTimers();
  });

  test("resetGame() resets the UI and game state", () => {
    DOM.startGame(); // Simulate starting the game
    DOM.resetGame(); // Call reset

    expect(DOM.game).toBeNull();
    expect(document.querySelector(".start-game-btn")).not.toBeNull();
    expect(document.querySelector(".ship-container")).toBeNull();
  });

  test("playGame() starts the game and allows interaction with the computer board", () => {
    // Simulate setup of player ships and clicking Play Game
    DOM.startGame();
    DOM.playGame();

    // Ensure ship container is removed and computer board is displayed
    expect(document.querySelector(".ship-container")).toBeNull();
    expect(document.querySelector(".computer-board")).not.toBeNull();

    // Check if computer board cells are interactive
    const computerCells = document.querySelectorAll(
      ".computer-board .board-cell"
    );
    expect(computerCells.length).toBeGreaterThan(0);
  });

  test("rotateShips() toggles ship orientation in the ship selection area", () => {
    DOM.startGame(); // Start the game to display the ship selection

    const rotateButton = document.querySelector(".rotate-btn");
    rotateButton.click(); // Simulate rotating ships

    const shipSelection = document.querySelector(".ship-select");
    expect(shipSelection.style.flexDirection).toBe("row"); // Ships should be vertical

    rotateButton.click(); // Rotate again
    expect(shipSelection.style.flexDirection).toBe("column"); // Ships should be horizontal
  });
});
