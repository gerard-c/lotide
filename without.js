const assertArraysEqual = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🤢🤢🤢 Assertion Failed: ${arr1} and ${arr2} are not equal`)
      return;
    }
  }
  console.log(`😎😎😎 Assertion Passed: ${arr1} and ${arr2} are equal`);
};

const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const without = (source, remove) => {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if (remove.includes(source[i]) === false) {
      result.push(source[i]);
    }
  }
  return result;
};

//console.log(without([1, 2, 3], [1]));
//console.log(without(["1", "2", "3"], [1, 2, "3"]));
//console.log(without(["soda", "chocolate", "gum", "raisins", "chips"], ["chips", "gum"]));
//console.log(without([2, 5, 7, 8, 4, 43, 18, 2], [9, 18, 2]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);