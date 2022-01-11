const assertArraysEqual = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🤢🤢🤢 Assertion Failed: ${arr1} and ${arr2} are not equal`)
      return;
    }
  }
  console.log(`😎😎😎 Assertion Passed: ${arr1} and ${arr2} are equal`);
};

const flatten = (nestedArray) => {
  let flattenedArray = []

  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      for (let item of nestedArray[i]) {
        flattenedArray.push(item);
      }
    } else {
      flattenedArray.push(nestedArray[i]);
    }
  }
  return flattenedArray;
}

assertArraysEqual(flatten([1, 2, 3, [4, 5], 6, [7]]), [1, 2, 3, 4, 5, 6, 7]);
assertArraysEqual(flatten([[1, 2], 3, [4, 5], [6], [7]]), [1, 2, 3, 4, 5, 6, 7]);
assertArraysEqual(flatten([[11, 12, 13], 14, 15, [16], [17]]), [11, 12, 13, 14, 15, 16, 17]);