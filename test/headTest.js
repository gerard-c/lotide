const assert = require("chai").assert;
const head = require("../head.js");

describe("#head", () => {
  it("should return 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5)
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), 'Hello'); 
  });

  it("returns 9 for [9]", () => {
    assert.strictEqual(head([9]), 9);
  });

  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
});