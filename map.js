const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(newArr, newArr2) {
  if (eqArrays(newArr, newArr2)) {
    console.log("The arrays are equal!");
  } else {
    console.log("The arrays are not equal!");
  }
};
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const words = ["ground", "control", "to", "major", "tom"];
const wordsTwo = ["ground", "control", "to", "major"];
const wordsThree = ["ground", "control", "to", "major", "tom"];
const result1 = map(words, word => word[0]);
console.log(result1)

assertArraysEqual(map(words, word => word[0]), map(wordsTwo, word => word[0])); // => false
assertArraysEqual(map(words, word => word[0]), map(wordsThree, word => word[0])); // => true
assertArraysEqual(map(wordsTwo, word => word[0]), map(wordsThree, word => word[0])); // => false