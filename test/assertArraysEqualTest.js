const assertArraysEqual = require("../assertArraysEqual.js")

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, '3']);
assertArraysEqual(['1', 2, '3'], ['1', 2, '3']);
assertArraysEqual([1, 2, 3], [2, 1, 3]);
assertArraysEqual([3, 6, 9], [3, 6, 9, 12]);