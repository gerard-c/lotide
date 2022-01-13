const assertArraysEqual = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🤢🤢🤢 Assertion Failed: ${arr1} and ${arr2} are not equal`)
      return;
    }
  }
  console.log(`😎😎😎 Assertion Passed: ${arr1} and ${arr2} are equal`);
};

const map = (array, callback) => {
  const results = []
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

assertArraysEqual(map([1, 2, 3, 4], num => num * 2), [2, 4, 6, 8]);
assertArraysEqual(map(['cat', 'dog', 'tree', 'house'], word => word[0]), ['c', 'd', 't', 'h']);
assertArraysEqual(map([3, 6, 9, 12], num => num + num), [6, 12, 18, 24]);
assertArraysEqual(map(['lamp', 'fish', 'bird', 'cage'], word => word.toUpperCase()), ['LAMP', 'FISH', 'BIRD', 'CAGE']);