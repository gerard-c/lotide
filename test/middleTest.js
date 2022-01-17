const assert = require("chai").assert;
const middle = require("../middle.js");

describe("#middle", () => {
  it("should return [6, 7] for [5, 6, 7, 8]", () => {
    assert.deepEqual(middle([5, 6, 7, 8]), [6, 7])
  });

  it("returns ['Lighthouse'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]); 
  });

  it("returns [] for [9]", () => {
    assert.deepEqual(middle([9]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });
});