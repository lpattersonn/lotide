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
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
}; console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("lighthouse in the house"), {l:0, i:2, g:1, h:5})