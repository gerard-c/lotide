const assertArraysEqual = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🤢🤢🤢 Assertion Failed: ${arr1} and ${arr2} are not equal`)
      return;
    }
  }
  console.log(`😎😎😎 Assertion Passed: ${arr1} and ${arr2} are equal`);
};


const middle = (array) => {
  let middleArray = [];

  const forEven = (array) => {
    middleArray.push(array[array.length / 2 - 1]);
    middleArray.push(array[(array.length / 2)]);
  }

  const forOdd = (array) => {
    middleArray.push(array[Math.floor(array.length / 2)]);
  }

  const oddOrEven = (array) => {
    if (array.length % 2 === 0) {
      forEven(array);
    } else {
      forOdd(array);
    }
  }

  const hasMiddle = (array) => {
    if (array.length === 1 || array.length === 2) {
      return;
    } else {
      oddOrEven(array);
    }
  };

  hasMiddle(array);
  return middleArray;
};


console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArraysEqual(middle([2, 4, 6, 8, 10]), [6]));
console.log(assertArraysEqual(middle([15]), []));
console.log(assertArraysEqual(middle([4, 2]), []));