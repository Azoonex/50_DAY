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
function same(arr1, arr2) {
    if (!arr1 || !arr2 || arr1.length !== arr2.length) {
        return false;
    }
    for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
        var arr = arr1_1[_i];
        if (!arr2.includes(arr)) {
            return false;
        }
    }
    return true;
}
var obj = {
    name: "reza",
    age: 30,
    side: "left",
    category: "person",
};
// Object.keys(obj).map((value) => console.log(obj[value]));
var objString = "";
for (var val in obj) {
    objString += !objString ? obj[val] : " " + obj[val];
}
console.log(objString.split(" ").reverse().join(" "));
