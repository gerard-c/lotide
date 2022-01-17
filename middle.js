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

module.exports = middle;