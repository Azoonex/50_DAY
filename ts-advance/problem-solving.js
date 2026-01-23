"use strict";
// problem-solving
// 1) understand the Problem
// 2) Explore concrete Examples
//
function charCount(str) {
    var char = {};
    var convertStr = str.split(" ").toString();
    for (var x = 0; x < str.length; x++) {
        var charName = str[x].toLowerCase().trim();
        if (!char[charName]) {
            char[charName] = 1;
        }
        else {
            char[charName]++;
        }
    }
    return convertStr;
}
// console.log(charCount("Hello world"));
var value = [1, 32, 1, 32, 4];
// console.log(value.splice(0,8));
// frequency Counter
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
}
