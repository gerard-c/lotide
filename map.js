const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = []
  for (let item of array) {
    console.log('item BEFORE ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
}

const results = map(words, word => word[0]);

console.log(results);