const assert = require("chai").assert;
const _ = require("../index");

testArr = ['Guts', 'Shierke', 'Farnese', 'Puck', 'Ivalera', 'Puck', 'Guts', 'Isidro', 'Serpico', 'Guts', 'Casca']

describe("#countOnly", () => {
  it("should return {Casca: 1, Shierke: 1} for {Zodd: true, Casca: true, Shierke: true, Isidro: false}", () => {
    assert.deepEqual(_.countOnly(testArr, {Zodd: true, Casca: true, Shierke: true, Isidro: false}), {Casca: 1, Shierke: 1});
  });

  it("should return {Guts: 3, Puck: 2} for {Casca: false, Guts: true, Puck: true}", () => {
    assert.deepEqual(_.countOnly(testArr, {Casca: false, Guts: true, Puck: true}), {Guts: 3, Puck: 2});
  });
});