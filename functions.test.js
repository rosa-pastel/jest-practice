import {
  caesarCipher,
  capitalize,
  reverseString,
  calculator,
  analyzeArray,
} from "./functions";
it("Capitalizes first letter", () => {
  expect(capitalize("michael")).toBe("Michael");
});
it("Reverses string", () => {
  expect(reverseString("michael")).toBe("leahcim");
});
it("Sums two numbers", () => {
  expect(calculator.add(10, 2)).toBe(12);
});
it("Subtracts two numbers", () => {
  expect(calculator.subtract(10, 2)).toBe(8);
});
it("Divides two numbers", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});
it("Multiplies two numbers", () => {
  expect(calculator.multiply(10, 2)).toBe(20);
});
it("Shifts word by one", () => {
  expect(caesarCipher("michael", 1)).toBe("njdibfm");
});
it("Shifts word containing z by one", () => {
  expect(caesarCipher("ez", 1)).toBe("fa");
});
it("Shifts word containing z by two", () => {
  expect(caesarCipher("ez", 2)).toBe("gb");
});
it("Shifts word containing uppercase letters", () => {
  expect(caesarCipher("mIchaeL", 1)).toBe("nJdibfM");
});
it("Shifts string with many words", () => {
  expect(caesarCipher("Michael is gone", 1)).toBe("Njdibfm jt hpof");
});
it("Shifts string with punctuation", () => {
  expect(caesarCipher("Michael is gone!?", 1)).toBe("Njdibfm jt hpof!?");
});
it("Analyzes array", () => {
  const obj = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(obj.average).toBe(4);
  expect(obj.min).toBe(1);
  expect(obj.max).toBe(8);
  expect(obj.length).toBe(6);
});
