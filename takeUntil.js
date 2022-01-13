const assertArraysEqual = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🤢🤢🤢 Assertion Failed: ${arr1} and ${arr2} are not equal`);
      return;
    }
  }
  console.log(`😎😎😎 Assertion Passed: ${arr1} and ${arr2} are equal`);
};

const takeUntil = (array, callback) => {
  let result = [];
  for (const item of array) {
    if (!callback(item)) {
      result.push(item);
    } else {
      break;
    }
  }
  return result;
};

assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), ["I've", 'been', 'to', 'Hollywood']);
assertArraysEqual(takeUntil([15, 17, 91, 32, 42, 34, 56], x => x === 42), [15, 17, 91, 32]);
assertArraysEqual(takeUntil(['fish', 45, 5.5, 'pig', true, 'string', 99], x => typeof x === 'boolean'), ['fish', 45, 5.5, 'pig']);

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
