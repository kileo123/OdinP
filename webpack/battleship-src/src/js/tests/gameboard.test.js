import Gameboard from '../gameboard';
import Ship from '../ship';

describe('Gameboard Class', () => {
  let gameboard;
  let ship;

  beforeEach(() => {
    gameboard = new Gameboard();
    ship = new Ship(3);
  });

  test('Gameboard class is defined', () => {
    expect(gameboard).toBeDefined();
  });

  test('Gameboard places ships horizontally on the board', () => {
    gameboard.placeShip(ship, 0, 0, true);
    expect(gameboard.board[0][0]).toBe(ship);
    expect(gameboard.board[0][1]).toBe(ship);
    expect(gameboard.board[0][2]).toBe(ship);
  });

  test('Gameboard places ships vertically on the board', () => {
    gameboard.placeShip(ship, 0, 0, false);
    expect(gameboard.board[0][0]).toBe(ship);
    expect(gameboard.board[1][0]).toBe(ship);
    expect(gameboard.board[2][0]).toBe(ship);
  });

  test('Gameboard throws Error when placing ship out of bounds horizontally', () => {
    expect(() => gameboard.placeShip(ship, 1, 8, true)).toThrow(
      'Not a valid position!'
    );
  });

  test('Gameboard throws Error when placing ship out of bounds vertically', () => {
    expect(() => gameboard.placeShip(ship, 8, 1, false)).toThrow(
      'Not a valid position!'
    );
    expect(gameboard.ships).toEqual([]);
  });

  test('Gameboard throws Error when placing ship on an already occupoed cell horizontally', () => {
    const ship2 = new Ship(2);
    gameboard.placeShip(ship, 1, 1, true);
    expect(() => gameboard.placeShip(ship2, 1, 1, true)).toThrow(
      'Not a valid position!'
    );
  });

  test('Gameboard throws Error when placing ship on an already occupoed cell vertically', () => {
    const ship2 = new Ship(2);
    gameboard.placeShip(ship, 1, 1, false);
    expect(() => gameboard.placeShip(ship2, 1, 1, false)).toThrow(
      'Not a valid position!'
    );
  });

  test('Gameboard keeps track of ships placed on board', () => {
    gameboard.placeShip(ship, 1, 1, false);
    expect(gameboard.ships).toEqual([ship]);
  });

  // Test receiveAttack function
  test('Gameboard receiveAttack hits a ship', () => {
    gameboard.placeShip(ship, 1, 1, true);
    gameboard.receiveAttack(1, 1);
    expect(ship.hits).toBe(1);
    expect(gameboard.board[1][1]).toBe('hit');
  });

  test('Gameboard receiveAttack misses a ship', () => {
    gameboard.placeShip(ship, 1, 1, true);
    gameboard.receiveAttack(0, 1);
    expect(ship.hits).toBe(0);
    expect(gameboard.board[0][1]).toBe('miss');
  });

  test('Gameboard receiveAttack throws an error when inputting out of bounds coordinates', () => {
    gameboard.placeShip(ship, 1, 1, true);
    expect(() => gameboard.receiveAttack(1, 10)).toThrow('Not a valid attack!');
    expect(() => gameboard.receiveAttack(-1, 0)).toThrow('Not a valid attack!');
  });

  test('Gameboard receiveAttack throws an error when attacking already attacked position', () => {
    gameboard.placeShip(ship, 1, 1, true);
    gameboard.receiveAttack(1, 1);

    expect(() => gameboard.receiveAttack(1, 1)).toThrow(
      'Position already attacked!'
    );
  });

  test('Gameboard does not record duplicate missed attacks', () => {
    gameboard.receiveAttack(0, 0);
    expect(() => gameboard.receiveAttack(0, 0)).toThrow(
      'Position already attacked!'
    );
    expect(gameboard.board[0][0]).toBe('miss');
  });

  // Tests for allShipsSunk() method
  test('Gameboard allShipsSunk reports if all ships are sunk', () => {
    gameboard.placeShip(ship, 0, 0, true);
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(0, 1);
    gameboard.receiveAttack(0, 2);

    expect(gameboard.allShipsSunk()).toBe(true);
  });

  test('Gameboard allShipsSunk returns false not all ships are sunk', () => {
    gameboard.placeShip(ship, 0, 0, true);

    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(0, 1);
    gameboard.receiveAttack(0, 2);
    const ship1 = new Ship(2);
    gameboard.placeShip(ship1, 3, 3, false);
    expect(gameboard.allShipsSunk()).toBe(false);
  });

  test('Gameboard allShipsSunk returns false if no ships are present', () => {
    expect(gameboard.allShipsSunk()).toBe(false);
  });

  test('Gameboard allShipsSunk returns false with varying lengths of ships in which some are sunk', () => {
    gameboard.placeShip(ship, 0, 0, true);
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(0, 1);
    gameboard.receiveAttack(0, 2);

    const ship1 = new Ship(2);
    gameboard.placeShip(ship1, 3, 3, false);
    gameboard.receiveAttack(3, 3);
    gameboard.receiveAttack(4, 3);

    const ship2 = new Ship(4);
    gameboard.placeShip(ship2, 8, 5, true);
    gameboard.receiveAttack(8, 5);

    expect(gameboard.allShipsSunk()).toBe(false);
  });
});
