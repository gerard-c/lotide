const assertArraysEqual = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🤢🤢🤢 Assertion Failed: ${arr1} and ${arr2} are not equal`)
      return;
    }
  }
  console.log(`😎😎😎 Assertion Passed: ${arr1} and ${arr2} are equal`);
};

const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++){
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i)
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
}

assertArraysEqual(letterPositions('hello').e, [1]);