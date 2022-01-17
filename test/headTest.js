const assert = require("chai").assert;
const _ = require("../index");

describe("#head", () => {
  it("should return 5 for [5, 6, 7]", () => {
    assert.strictEqual(_.head([5, 6, 7]), 5)
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(_.head(["Hello", "Lighthouse", "Labs"]), 'Hello'); 
  });

  it("returns 9 for [9]", () => {
    assert.strictEqual(_.head([9]), 9);
  });

  it("returns undefined for []", () => {
    assert.strictEqual(_.head([]), undefined);
  });
});