const _ = require('../index');

_.assertObjectsEqual({x: 1, y: 2, z: 3}, {x:1, y:2, z:3}); // true
_.assertObjectsEqual({cat: 'meow', dog: 'woof', bird: 'tweet'}, {cat: 'meow', dog: 'bark', bird: 'tweet'}); // false
_.assertObjectsEqual({a: 2, b: 4, c:6}, {b: 4, c: 6, a: 2}); // true
_.assertObjectsEqual({key1: 3, key2: 6, key3: 9}, {key1: 3, key2: 6, key3: '9'}); //false