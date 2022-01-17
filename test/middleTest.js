const assertArraysEqual = require("../assertArraysEqual.js");
const middle = require("../middle.js");

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([2, 4, 6, 8, 10]), [6]);
assertArraysEqual(middle([15]), []);
assertArraysEqual(middle([4, 2]), []);