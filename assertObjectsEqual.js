

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const eqArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };
  const keys1 = Object.keys(actual);
  const keys2 = Object.keys(expected);
  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (key of keys1) {
      if (Array.isArray(actual[key]) && Array.isArray(expected[key])) {
        return eqArrays(actual[key], expected[key]);
      }
      if (actual[key] !== expected[key]) {
        return false;
      }
    }
    return true;
  }
};