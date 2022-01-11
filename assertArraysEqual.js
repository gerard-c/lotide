const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🤢🤢🤢 Assertion Failed: ${arr1} and ${arr2} are not equal`)
      return; //"break" and "continue" both allow the pass message to print and "process.exit()" prevents future test calls
    }
  }
  console.log(`😎😎😎 Assertion Passed: ${arr1} and ${arr2} are equal`);
};

eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3], [1, 2, '3']);
eqArrays(['1', 2, '3'], ['1', 2, '3']);
eqArrays([1, 2, 3], [2, 1, 3]);