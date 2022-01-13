const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {

  console.log('array:', array);
  console.log('callback:', callback);

  const results = []
  return results;
}

const results = map(words, word => word[0]);

console.log(results);