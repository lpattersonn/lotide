const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`๐๐๐ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`๐ญ๐ญ๐ญAssertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(newString) {
  let result = {};
  for (let i = 0; i < newString.length; i++) {
    if (newString[i] !== " ") {
      if (result[newString[i]]) {
        result[newString[i]] += 1;
      } else {
        result[newString[i]] = 1;
      }
    }
  } console.log(result);
};
countLetters("lighthouse in the house");