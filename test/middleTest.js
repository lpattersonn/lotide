const middle = require('../middle');
const assert = require('chai').assert

describe('#middle', () => {
  it('Return an empty array "[]" if the array has less the two numbers', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it('Should return the middle number if array length is odd', () =>{
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('Should return the two middle numbers if array length is even', () =>{
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
