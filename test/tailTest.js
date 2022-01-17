const assertEqual = require("../assertEqual.js")
const tail = require("../tail.js");

const test1 = [1, 2, 3, 4, 5];
console.log(tail(test1));
assertEqual(test1.length, 5);

const test2 = ["cat", "dog", "mouse", "house"];
console.log(tail(test2));
assertEqual(test2.length, 4);

const test3 = [42];
console.log(tail(test3));
assertEqual(test3.length, 1);

const test4 = ["tree", 3, "bird", 99, "fire", -15];
console.log(tail(test4));
assertEqual(test4.length, 6);