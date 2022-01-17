const findKey = (object, callback) => {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (callback(object[key]) === true) {
      return key;
    }
  }
};

module.exports = findKey;