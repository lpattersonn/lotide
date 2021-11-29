const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle

