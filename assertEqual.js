const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`😎😎😎 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual('Lighthouse Labs', "Bootcamp");
assertEqual(1, 1);
assertEqual(4, 5);
assertEqual(3.3, 3.3);
assertEqual('dog', 'cat');
assertEqual('fish', 'fish');