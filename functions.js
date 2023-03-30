export function capitalize(s) {
  return s.at(0).toUpperCase() + s.slice(1);
}
export function reverseString(s) {
  return s.split("").reverse().join("");
}
export const calculator = (function () {
  function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function divide(a, b) {
    return a / b;
  }
  function multiply(a, b) {
    return a * b;
  }
  return { add, subtract, divide, multiply };
})();
function shiftChar(char, num) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let shiftedChar = char;
  alphabet.map((letter, index) => {
    if (letter !== char.toLowerCase()) return;
    if (alphabet[index + num]) shiftedChar = alphabet[index + num];
    else {
      shiftedChar = alphabet[num - (alphabet.length - index)];
    }
  });
  return shiftedChar;
}
export function caesarCipher(string, num) {
  const shiftedString = string
    .split("")
    .map((char) => {
      let isLowerCase = char.toLowerCase() === char;
      return isLowerCase
        ? shiftChar(char, num)
        : shiftChar(char, num).toUpperCase();
    })
    .join("");
  return shiftedString;
}
export function analyzeArray(array) {
  return {
    average: array.reduce((prev, curr) => prev + curr) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}
