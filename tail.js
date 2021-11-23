const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😭😭😭Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(arr) {
  let newArr  = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      newArr.push(arr[i]);
    }
  } return newArr;
}; console.log(tail(["Yo Yo", "Lighthouse", "Labs"]));