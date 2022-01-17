const assert = require('chai').assert; 
const _ = require("../index");

describe("#eqArrays", () => {
  it("should return true for [5, 6, 7, 8] and [5, 6, 7, 8]", () => {
    assert.isTrue(_.eqArrays([5, 6, 7, 8], [5, 6, 7, 8]), true);
  });

  it("should return false for [2, 4, 6] and [2, 4, 6, 8]", () => {
    assert.isFalse(_.eqArrays([2, 4, 6], [2, 4, 6, 8]), true);
  });

  it("should return true for ['cat','dog' ,'hat', 'man'] and ['cat','dog' ,'hat', 'man']", () => {
    assert.isTrue(_.eqArrays(['cat','dog' ,'hat', 'man'], ['cat','dog' ,'hat', 'man']), true);
  });
});