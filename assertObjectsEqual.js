const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  // eqArrays in defined in the function instead of required in order to account for inspect
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

module.exports = assertObjectsEqual;
