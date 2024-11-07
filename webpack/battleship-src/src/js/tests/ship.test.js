import Ship from "../ship";

describe("Ship Class", () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(3); // Create a new ship instance with a length of 3 before each test
  });

  test("Ship class is defined", () => {
    expect(ship).toBeDefined();
  });

  test("Ship has hit function that increases the number of hits", () => {
    ship.hit();
    expect(ship.hits).toBe(1);
    ship.hit();
    expect(ship.hits).toBe(2);
  });

  test("Ship has isSunk function that correctly identifies a sunk ship", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  test("Ship is not sunk if hits are less than length", () => {
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });

  test("Ship is sunk if hits equal length", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  // Additional test for edge case
  test("Ship with length 0 is immediately sunk", () => {
    const zeroLengthShip = new Ship(0);
    expect(zeroLengthShip.isSunk()).toBe(true);
  });
});
