const _ = require("../index")

_.assertArraysEqual([1, 2, 3], [1, 2, 3]);
_.assertArraysEqual([1, 2, 3], [1, 2, '3']);
_.assertArraysEqual(['1', 2, '3'], ['1', 2, '3']);
_.assertArraysEqual([1, 2, 3], [2, 1, 3]);
_.assertArraysEqual([3, 6, 9], [3, 6, 9, 12]);