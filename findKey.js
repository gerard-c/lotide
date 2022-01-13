const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`😎😎😎 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (callback(object[key]) === true) {
      return key;
    }
  }
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), 'noma');

assertEqual(findKey({
  'Vanilla': {level: 60},
  'TBC': {level: 70},
  'Wrath': {level: 80},
  'Cataclysm': {level: 85},
  'MoP': {level: 90},
  'WoD': {level: 100}
}, x => x.level === 80), 'Wrath');

assertEqual(findKey({
  'me': {age: 28},
  'mom': {age: 61},
  'dad': {age: 65},
  'brother': {age: 31}
}, x => x.age === 31), 'brother');

assertEqual(findKey({
  'arbitrary': {value: 66},
  'meaningless': {value: 42},
  'excessive': {value: 69},
  'irrelevent': {value: 666},
  'needless': {value: 420},
  'unnecessary': {value: 4}
}, x => x.value === 43), undefined);