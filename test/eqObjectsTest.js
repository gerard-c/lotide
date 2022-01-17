const assert = require('chai').assert; 
const _ = require("../index");

describe("#eqObjects", () => {
  it("should return true for {x: 1, y: 2, z: 3} and {x: 1, y: 2, z: 3}", () => {
    assert.isTrue(_.eqObjects({x: 1, y: 2, z: 3}, {x: 1, y: 2, z: 3}), true);
  });

  it("should return false for {cat: 'meow', dog: 'woof', bird: 'tweet'} and {cat: 'meow', dog: 'bark', bird: 'tweet'}", () => {
    assert.isFalse(_.eqObjects({cat: 'meow', dog: 'woof', bird: 'tweet'}, {cat: 'meow', dog: 'bark', bird: 'tweet'}), true);
  });

  it("should return false for {a: 2, b: 4, c:6} and {a: 2, b: 4, c:6}", () => {
    assert.isTrue(_.eqObjects({a: 2, b: 4, c:6}, {a: 2, b: 4, c:6}), true);
  });
});