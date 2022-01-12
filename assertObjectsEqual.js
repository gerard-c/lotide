const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const eqArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      return console.log(`🤢🤢🤢 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return console.log(`🤢🤢🤢 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
      }
    }
    return console.log(`😎😎😎 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  };
  const keys1 = Object.keys(actual);
  const keys2 = Object.keys(expected);
  if (keys1.length !== keys2.length) {
    return console.log(`🤢🤢🤢 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    for (key of keys1) {
      if (Array.isArray(actual[key]) && Array.isArray(expected[key])) {
        return eqArrays(actual[key], expected[key]);
      }
      if (actual[key] !== expected[key]) {
        return console.log(`🤢🤢🤢 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
      }
    }
    return console.log(`😎😎😎 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

const abc = { a: "1", b: "2", c: "3" };
const ab = { a: "1", b: "2" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(ab, ab);
assertObjectsEqual(ab, abc);
assertObjectsEqual(cd2, dc);
assertObjectsEqual(cd, dc);
