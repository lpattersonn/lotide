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
const middle = function(arrayMiddle) {
  let middleNum = [];
  if (arrayMiddle.length > 2) {
    if (arrayMiddle.length % 2 === 0) {
      middleNum.push(arrayMiddle[(arrayMiddle.length / 2) - 1]);
      middleNum.push(arrayMiddle[(arrayMiddle.length / 2)]);
      return middleNum;
    } else {
      middleNum.push(arrayMiddle[((arrayMiddle.length + 1) / 2) - 1 ]);
      return middleNum;
    }
  } return middleNum;
};

console.log(middle([1])); // => []
console.log(middle([1, 2]));
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6]));

assertArraysEqual(middle([1, 2, 3, 4]), [1, 2, 3, 4]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);