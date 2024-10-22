import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./odin.js"

test("capitalize", () => {
  expect(capitalize("hello")).toBe("Hello")
});
test("capitalize", () => {
  expect(capitalize("Hey")).toBe("Hey")
});
test("capitalize empty string", () => {
    expect(capitalize("")).toBe("Input empty")
});
test("capitalize number", () => {
  expect(capitalize(123)).toBe("Input NOT a string")
});
test("capitalize boolean", () => {
  expect(capitalize(true)).toBe("Input NOT a string")
});

test("reverseString", () => {
  expect(reverseString("hello")).toBe("olleh")
});
test("reverseString", () => {
  expect(reverseString("Hey")).toBe("yeH")
});
test("reverseString empty string", () => {
  expect(reverseString("")).toBe("Input empty")
});
test("reverseString number", () => {
  expect(reverseString(123)).toBe("Input NOT a string")
});
test("reverseString boolean", () => {
  expect(reverseString(true)).toBe("Input NOT a string")
});

test("test calculator add a and b", () => {
  expect(calculator.add(1, 2)).toBe(3)
});
test("test calculator adding string to number", () => {
  expect(calculator.add(1, "a")).toBe("Input NOT a number")
});
test("test calculator adding number to empty string", () => {
  expect(calculator.add("", 3)).toBe("Input NOT a number")
});
test("test calculator subtraction", () => {
  expect(calculator.subtract(1, 2)).toBe(-1)
});
test("test calculator multiplication", () => {
  expect(calculator.multiply(2, 3)).toBe(6)
});
test("test calculator division", () => {
  expect(calculator.divide(1, 2)).toBe(0.5)
});
test("test calculator divide by zero", () => {
  expect(calculator.divide(2, 0)).toBe("ERROR Divided by zero")
});
test("test caesarCipher xyz", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc")
});
test("test caesarCipher Hello, World!", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
});
test("test caesarCipher input non string", () => {
  expect(caesarCipher(4479, 3)).toBe("Input NOT a string")
});
test("test caesarCipher shift string", () => {
  expect(caesarCipher("xyz", "3")).toBe("Shift NOT a number")
});
test("test caesarCipher empty input", () => {
  expect(caesarCipher("", 3)).toBe("Input empty")
});
test("test caesarCipher empty input", () => {
  expect(caesarCipher("xyz", )).toBe("Input empty")
});
test("Test analyzeArray: average, min, max, length", () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
  });
})
test("Test analyzeArray: empty input", () => {
  expect(analyzeArray()).toBe("Input empty or input NOT a number");
})
test("Test analyzeArray: string input", () => {
  expect(analyzeArray(["s",2,3])).toBe("Input empty or input NOT a number");
})