"use strict";
// problem-solving
// 1) understand the Problem
// 2) Explore concrete Examples
//
// function charCount(str) {
//   var char = {};
//   var convertStr = str.split(" ").toString();
//   for (var x = 0; x < str.length; x++) {
//     var charName = str[x].toLowerCase().trim();
//     if (!char[charName]) {
//       char[charName] = 1;
//     } else {
//       char[charName]++;
//     }
//   }
//   return convertStr;
// }
// console.log(charCount("Hello world"));

function charCount(str) {
  var obj = {};
  for (let char of str) {
    char = char.toLowerCase().trim();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

console.log(charCount("hello world ! !"));
