const assert = require("chai").assert;
const _ = require("../index");

describe("#tail", () => {
  it("should return [6, 7] for [5, 6, 7]", () => {
    assert.deepEqual(_.tail([5, 6, 7]), [6, 7])
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(_.tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); 
  });

  it("returns [] for [9]", () => {
    assert.deepEqual(_.tail([9]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(_.tail([]), []);
  });
});