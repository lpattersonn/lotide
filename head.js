const assertEqual = require('./assertEqual')
const head = function(arr) {
  if (arr[0] >= 0) {
    return arr[0];
  }
}; 
module.exports = head;