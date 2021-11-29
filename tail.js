const assertEqual = require('./assertEqual')

const tail = function(arr) {
  let newArr  = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      newArr.push(arr[i]);
    }
  } return newArr;
}; console.log(tail(["Yo Yo", "Lighthouse", "Labs"]));
module.exports = tail