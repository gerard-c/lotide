const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`😎😎😎 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = (array) => {
  const newArray = array.slice(1);
  return newArray;
};

console.log(tail([1, 2, 3, 4]));
console.log(tail([5]));
console.log(tail(['cat', 'dog', 'fish', 'mouse']));
console.log(tail(['elephant']));

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!