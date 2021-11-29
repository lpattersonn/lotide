const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
console.log(eqArrays([1, 2, 4, 0], [1, 2, 4])); // => true