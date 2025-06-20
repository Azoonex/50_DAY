"use strict";
// function find_missingNumber(arr: number[]): number {
//   if (!arr.length) return 1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyzeCarMileage = void 0;
exports.hightScoringWord = hightScoringWord;
exports.validAnagram = validAnagram;
exports.generateHashtag = generateHashtag;
exports.isValidIpv4 = isValidIpv4;
//   let n = arr.length + 1;
//   let expectedSum = (n * (n + 1)) / 2;
//   let actualSum = arr.reduce((acc, current) => acc + current, 0);
//   console.log(actualSum, expectedSum);
//   return expectedSum - actualSum;
// }
// // example missing alpha
// // function findMissing_Alpha(arr: string[]): string[] | string {
// //   if (!arr.length) return "String is Empty";
// //   const allAlphabets = "abcdefghijklmnopqrstuvwxyz";
// //   let findMissing = allAlphabets.indexOf(arr[0]);
// //   for (let i = 0; i < arr.length; i++) {
// //     const checkAlpa =
// //   }
// //   return findMissing;
// // }
// // console.log(findMissing_Alpha(["a", "b", "d", "e"])); // ["c"]
// // format Phone number
// function formatPhoneNumber(phoneNumber: Array<number>): string {
//   if (!phoneNumber.length) {
//     return "Phone  Number is Invalid";
//   }
//   const startCodeNumber = phoneNumber.slice(0, 3).join("");
//   const middleCodeNumber = phoneNumber
//     .slice(startCodeNumber.length, startCodeNumber.length + 3)
//     .join("");
//   const lastCodeNumber = phoneNumber.slice(-3).join("");
//   return phoneNumber.length === 8
//     ? `(${startCodeNumber}) ${middleCodeNumber}-${lastCodeNumber}`
//     : "Value is not valid";
// }
// console.log(formatPhoneNumber([1, 3, 5, 1, 3, 1, 3, 2]));
// // ValidateEmail
// function validateEmail(email: string): boolean {
//   const [localPart, domin] = email.split(",");
//   console.log(localPart, domin);
//   if (email.lastIndexOf("@") !== -1 && email.lastIndexOf(".") !== -1)
//     return true;
//   return false;
// }
// console.log(validateEmail("create react app@."));
// const items = [
//   {
//     id: 1,
//     name: "age",
//   },
//   {
//     id: 2,
//     name: "ali",
//   },
// ];
// const [person1,person2] = items;
// console.log(person1,person2)
// sumOfEvenSquares
function sumOfEvenSquares(number) {
    if (!number.length)
        return false;
    // one method
    // return number.reduce((acc, current) => {
    //   if (current % 2 === 0) {
    //     return acc + current;
    //   }
    //   return acc;
    // }, 0);
    // two method
    // let sum = 0;
    // number
    //   .filter((item) => item % 2 == 0)
    //   .forEach((item) => {
    //     sum += item;
    //   });
    // return sum;
    // method three
}
// total tax
// const totalProducts = [
//   { name: "lab-tab", price: 0.2, qunit: 200 },
//   { name: "peen", price: 0.5, qunit: 200 },
// ];
// function totalTax(
//   arr: { name: string; price: number; qunit: number }[],
//   tax: number
// ) {
//   const some = arr.reduce((acc, current) => {
//     acc = current.price * current.qunit;
//     return acc;
//   }, 0);
//   const totalTax = (some * tax) / 100;
//   return tax + totalTax;
// }
// console.log(totalTax(totalProducts,10));
// solution hightScoring Word
function hightScoringWord(str) {
    if (!str.length)
        return "Invalid string and writing This.";
    var stringTo_array = str.split(" ");
    var largeLength = stringTo_array.reduce(function (acc, curr) { return Math.max(acc, curr.length); }, 0);
    return stringTo_array.find(function (v) { return v.length === largeLength; });
    // let max = -Infinity;
    // let index = -1;
    // const sum = stringTo_array.forEach(function (a, i) {
    //   if (a.length > max) {
    //     max = a.length;
    //     index = i;
    //   }
    // });
    // return sum;
}
// console.log(hightScoringWord("hello world And string to array"));
// choose chat gpt
var minNegative = -Infinity;
// console.log(max < -1000);
// validAnagrams
function validAnagram(oneStr, towStr) {
    var letterWord = oneStr.slice(0, 1);
    var checkTheLetter = towStr.split("").includes(letterWord);
    return checkTheLetter;
}
console.log(validAnagram("ttt", "mmt"));
function validAnagram2(oneStr, towStr) {
    var letterWord = oneStr.slice(0, 1);
    var checkTheLetter = towStr
        .split("")
        .reduce(function (acc, cur) {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    return Object.keys(checkTheLetter).some(function (i) { return i === letterWord; });
}
console.log(validAnagram2("ete", "gte"));
//generateHashtag
function generateHashtag(str) {
    if (str.length > 140 || str.length === 0)
        return false;
    // const stringToArray =
    //   "$" +
    //   str
    //     .split(" ")
    //     .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    //     .join(" ")
    //     .replace(/[^A-Za-z]/g, "");
    // return stringToArray;
    // with method 2
    var strToArray = str.split(" ");
    return strToArray.reduce(function (acc, curr) {
        return acc + curr.charAt(0).toUpperCase() + curr.substring(1);
    }, "#");
}
console.log(generateHashtag("hello world"));
function isValidIpv4(ip) {
    if (!ip.length)
        return false;
    var stringToArray = ip.split(".");
    switch (true) {
        case stringToArray.length < 4:
            return false;
        case stringToArray[0].length > 1:
            return stringToArray.every(function (item) { return item.length > 1; });
        default:
            return true;
    }
}
console.log(isValidIpv4("1.2.3.4"));
var AnalyzeCarMileage = /** @class */ (function () {
    function AnalyzeCarMileage(cars) {
        this.cars = cars;
    }
    AnalyzeCarMileage.prototype.averageMileage = function () {
        var sum = this.cars.reduce(function (acc, curr) {
            return acc + curr.mileage;
        }, 0) / this.cars.length;
        return Math.floor(sum);
    };
    AnalyzeCarMileage.prototype.totalMileage = function () {
        var result = this.cars.reduce(function (acc, curr) {
            return acc + curr.mileage;
        }, 0);
        return result;
    };
    // find_eldest_mileage() {
    //   const findItem = Math.max(...this.cars.map((o) => o.mileage));
    //   return this.cars.filter((item) => item.mileage == findItem);
    // }
    AnalyzeCarMileage.prototype.find_eldest_mileage = function () {
        return this.cars.reduce(function (acc, cur) {
            return acc.mileage > cur.mileage ? acc : cur;
        }, this.cars[0]);
    };
    AnalyzeCarMileage.prototype.find_lost_mileage = function () {
        return this.cars.reduce(function (acc, curr) {
            return acc.mileage < curr.mileage ? acc : curr;
        }, this.cars[0]);
        return this.cars.filter(function (item) { return item.mileage == findItem; });
    };
    return AnalyzeCarMileage;
}());
exports.AnalyzeCarMileage = AnalyzeCarMileage;
var analyzeCars = new AnalyzeCarMileage([
    {
        make: "bmw",
        mileage: 3000,
        model: "2019",
    },
    {
        make: "toyota",
        mileage: 1500,
        model: "2000",
    },
    {
        make: "audi",
        mileage: 100,
        model: "2019",
    },
]);
console.log(analyzeCars.averageMileage());
console.log(analyzeCars.totalMileage());
console.log(analyzeCars.find_eldest_mileage());
console.log(analyzeCars.find_lost_mileage());
