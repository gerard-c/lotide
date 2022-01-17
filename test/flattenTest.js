const assert = require("chai").assert;
const _ = require("../index");

describe("#flatten", () => {
  it("should return [1, 2, 3, 4] for [[1], [2, 3, 4]]", () => {
    assert.deepEqual(_.flatten([[1], [2, 3, 4]]), [1, 2, 3, 4]);
  });

  it("returns [{x: 1}, {y: 2}, {z: 3}] for [[{x: 1}, {y: 2}], {z: 3}]", () => {
    assert.deepEqual(_.flatten([[{x: 1}, {y: 2}], {z: 3}]), [{x: 1}, {y: 2}, {z: 3}]); 
  });

  it("returns [2, 4, [6, 8]] for [[2, 4],[[6, 8]]]", () => {
    assert.deepEqual(_.flatten([[2, 4],[[6, 8]]]), [2, 4, [6, 8]]); 
  });
});