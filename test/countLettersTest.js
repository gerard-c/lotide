const assert = require('chai').assert;
const _ = require('../index');

describe("#countLetters", () => {
  it("should return {e: 2, i: 2, o:2} for 'eeiioo'", () => {
    assert.deepEqual(_.countLetters("eeiioo"), {e: 2, i: 2, o:2});
  });

  it("should return {h: 1, o: 2, t:1, d: 1, g: 1} for 'hot dog'", () => {
    assert.deepEqual(_.countLetters("hot dog"), {h: 1, o: 2, t:1, d: 1, g: 1});
  });

  it("should return { M: 1, I: 2, S: 2, s: 2, i: 2, p: 2 } for 'MISSIsippi'", () => {
    assert.deepEqual(_.countLetters("MISSIssippi"), { M: 1, I: 2, S: 2, s: 2, i: 2, p: 2 });
  });
});