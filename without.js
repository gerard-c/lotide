const without = (source, remove) => {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if (remove.includes(source[i]) === false) {
      result.push(source[i]);
    }
  }
  return result;
};

module.exports = without;