const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`๐๐๐ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`๐ญ๐ญ๐ญAssertion Failed: ${actual} !== ${expected}`);
  }
};
const  findKeyByValue = function(objectName, valueName) {
  for (let objectValue in objectName) {
    if (objectName[objectValue] === valueName) {
      return objectValue;
    }
  }
};
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);