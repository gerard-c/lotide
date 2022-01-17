const flatten = (nestedArray) => {
  let flattenedArray = []

  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      for (let item of nestedArray[i]) {
        flattenedArray.push(item);
      }
    } else {
      flattenedArray.push(nestedArray[i]);
    }
  }
  return flattenedArray;
}

module.exports = flatten;