const eqArrays = require('./eqArrays')

const assertArraysEqual = function(newArr, newArr2) {
  if (eqArrays(newArr, newArr2)) {
    console.log("The arrays are equal!");
  } else {
    console.log("The arrays are not equal!");
  }
}; module.exports = assertArraysEqual
