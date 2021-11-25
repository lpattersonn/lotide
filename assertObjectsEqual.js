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
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } for (let keys of Object.keys(object1)) {
    if (Array.isArray(object1[keys]) === true && Array.isArray(object2[keys]) === true) {
      eqArrays(object1, object2);
    } else if (object1[keys] !== object2[keys]) {
      return false;
    } return true;
  }
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    return (`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } return (`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
}; const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba));