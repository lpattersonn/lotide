// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`๐๐๐ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`๐ญ๐ญ๐ญAssertion Failed: ${actual} !== ${expected}`);
  }
}; 
module.exports = assertEqual;
// TEST CODE