const assert = require("chai").assert;
const head = require("../head.js");

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([9]), 12);
// assertEqual(head([]), null);
// assertEqual(head(["Nerd"]), "Dork");
// assertEqual(head(["Pikachu", "Charmander", "Dog"]), "Pikachu");

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