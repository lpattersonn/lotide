const eqArrays = function(arr1, arr2) {
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
const takeUntil = function(array, callback) {
  let result = [];
  for (let elements of array) {
    if (callback(elements)) {
      break;
    } else {
      result.push(elements);
    }
  } return result;
};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = [1, 2,-1, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

assertArraysEqual(takeUntil(data1, x => x < 0), takeUntil(data1, x => x < 0)); // => true
assertArraysEqual(takeUntil(data1, x => x < 0), takeUntil(data2, x => x < 0)); // => false
