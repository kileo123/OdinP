/**
 * @jest-environment jsdom
 */
import Game from '../game';
import Ship from '../ship';

describe('Game Class', () => {
  let game;
  beforeEach(() => {
    game = new Game();
  });
  test('Game class is defined', () => {
    expect(game).toBeDefined();
  });

  test('Game startGame() intitalizes players, gameboards, and sets up initial state', () => {
    game.startGame();
    expect(game.player).toBeDefined();
    expect(game.computer).toBeDefined();
    expect(game.currentTurn).toBe(game.player);
  });

  test('Game should handle player attack and switch turns', () => {
    game.startGame();

    // Simulate a player attack
    game.playTurn(0, 0);

    // Check if the turn switched to the computer
    expect(game.currentTurn).toBe(game.computer);
  });

  test('Game should handle computer attack and switch turns', () => {
    game.startGame();

    // Simulate a turn where it's the computer's attack
    game.currentTurn = game.computer; // Force set turn to computer
    game.playTurn();

    // Check if the turn switched back to the player
    expect(game.currentTurn).toBe(game.player);
  });

  test('Game should declare game over when all ships are sunk', () => {
    game.startGame();

    const playerBoard = game.player.gameboard;
    playerBoard.placeShip(new Ship(3), 0, 0, true);
    // Simulate sinking all ships of one player
    playerBoard.receiveAttack(0, 0);
    playerBoard.receiveAttack(0, 1);
    playerBoard.receiveAttack(0, 2);

    // Check if the game is over
    expect(game.isGameOver()).toBe(true);
    // Optionally, check if DOM.displayGameOver was called
  });

  test('Game should not declare game over when not all ships are sunk', () => {
    game.startGame();
    const playerBoard = game.player.gameboard;
    // Simulate sinking all ships of one player
    playerBoard.receiveAttack(0, 0);
    playerBoard.receiveAttack(0, 1);

    // Check if the game is over
    expect(game.isGameOver()).toBe(false);
    // Optionally, check if DOM.displayGameOver was called
  });

  test('Game should correctly identify the winner', () => {
    game.startGame();
    const computerBoard = game.computer.gameboard;

    // Mock placing ships to ensure they exist in these locations
    computerBoard.placeShip(new Ship(3), 0, 0, true); // Place a ship horizontally at (0,0)

    // Simulate sinking all ships of the computer
    computerBoard.receiveAttack(0, 0);
    computerBoard.receiveAttack(0, 1);
    computerBoard.receiveAttack(0, 2);

    // Check if the player is the winner
    expect(game.endGame()).toBe(game.player);
  });
});
