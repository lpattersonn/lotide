const tail = require('../tail')
const assert = require('chai').assert
describe('#tail', () => {
  it("Should remove the first element of the array and return the array", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs'])
  });
});
