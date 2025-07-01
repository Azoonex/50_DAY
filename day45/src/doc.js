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
<<<<<<< HEAD
// console.log(TitleCase("amir reza Abas"))
// reverse string
// function reverseString (str:string){
//   // return str.split("").reverse().join("")
//   const newString = str.split("");
//   let arrayString:string[] = []
//   for(let x = newString.length - 1; x >= 0 ; x--){
//     arrayString.push(newString[x])
//   }
//   return arrayString.join("")
// }
// console.log(reverseString("tehran"))
// console.log("items".length)
// count vowels
// function countVowels(str: string) {
//   const Alphabet = ["a", "b", "c", "i", "y"];
//   const newArray = str.split("");
//   let findVowels: string[] = [];
//   for (let x = 0; newArray.length > x; x++) {
//     if (Alphabet[x] && Alphabet[x] === newArray[x]) {
//       findVowels.push("yes");
//     }
//   }
//   return findVowels.length
// }
// console.log(countVowels("abas"));
// function removeDuplicate (arr:number[]){
//   // one solution
//   let one = arr.filter((value,index)=> arr.indexOf(value) === index);
//   // two solution
//   let two = [...new Set(arr)]
//   // three solution
//   let unique:number[] = [];
//   arr.forEach(element=>{
//     if(!unique.includes(element)){
//       unique.push(element)
//     }
//   })
//   // fore solution
//   arr.reduce((prevous,curren)=>{
//     if(prevous.index(prevous) < 0) prevous.push(curren)
//     return prevous
//   })
// }
// function findMissingAlpha(arr: string[]) {
//   let allAlpha = "abcdefghijklmnopqrstuywxyz";
//   let findIndexAlpha = allAlpha.indexOf(arr[0]);
//   let missingAlpha: Array<string> = [];
//   for (let i = 0; i < arr.length; i++) {
//     findIndexAlpha += 1;
//     console.log(findIndexAlpha);
//     if (allAlpha[findIndexAlpha + 1] !== arr[i]) {
//       missingAlpha.push(allAlpha[findIndexAlpha + 1]);
//     }
//   }
//   return missingAlpha;
// }
// console.log(findMissingAlpha(["a", "b","c", "d"]));
// function allCharacterUnique(str: string) {
//   const charCount = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (charCount[char]) {
//       return false;
//     }
//     charCount[char] = true;
//   }
//   return charCount;
// }
// method 2
// export function allCharacterUnique(str: string) {
//   const charSet = new Set();
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (charSet.has(char)) {
//       return false;
//     }
//     charSet.add(char);
//   }
//   return Array.from(charSet);
// }
// console.log(allCharacterUnique("amir"));
// function checkDuplicate(str:string){
//   const checkStr:{[key : string]:boolean} = {};
//   for(let i =0;i < str.length;i++){
//     if(checkStr[str[i]]){
//       return false
//     }
//     checkStr[str[i]] = true
//   }
//   return checkStr
// }
// function checkDuplicate(str:string){
//   const checkStr:{[key : string]:boolean} = {};
//   for(let i =0;i < str.length;i++){
//     if(checkStr[str[i]]){
//       return false
//     }
//     checkStr[str[i]] = true
//   }
//   return checkStr
// }
function findFirstRepeatCharacters(str) {
    var saveCharacter = {};
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        saveCharacter[char] = (saveCharacter[char] || 0) + 1;
    }
    var findBigSizeObject = Math.max.apply(Math, Object.values(saveCharacter));
    console.log(findBigSizeObject);
}
console.log(findFirstRepeatCharacters("hello"));
var value = {
    id: 1,
    name: 2
};
console.log(Object.keys(value));
=======
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
//  TYPES START ___++++++++++++++++//
var StatusTotal_check_travel;
(function (StatusTotal_check_travel) {
    StatusTotal_check_travel[StatusTotal_check_travel["GOOD"] = 0] = "GOOD";
    StatusTotal_check_travel[StatusTotal_check_travel["MIDDLE"] = 1] = "MIDDLE";
    StatusTotal_check_travel[StatusTotal_check_travel["VERY_GOOD"] = 2] = "VERY_GOOD";
})(StatusTotal_check_travel || (StatusTotal_check_travel = {}));
// TYPE END ___++++++++++++++++++++//
var TravelCompony = /** @class */ (function () {
    // !! admin access
    function TravelCompony(Employs, price_person, travel_of_month) {
        this.Employs = Employs;
        this.price_person = price_person;
        this.travel_of_month = travel_of_month;
    }
    Object.defineProperty(TravelCompony.prototype, "all_data", {
        get: function () {
            return {
                Employs: this.Employs,
                price_person: this.price_person,
                travel_of_month: this.travel_of_month,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TravelCompony.prototype, "sizeEmploys", {
        get: function () {
            return this.Employs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TravelCompony.prototype, "average_price_person", {
        get: function () {
            return (this.price_person.reduce(function (acc, curr) { return acc + curr; }, 0) /
                this.price_person.length);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TravelCompony.prototype, "total_check_travel", {
        get: function () {
            var status;
            var travel_of_month = this.travel_of_month;
            var sumSizeTravel = this.travel_of_month.reduce(function (acc, curr) {
                return acc + curr.size;
            }, travel_of_month[0].size);
            if (sumSizeTravel < 5)
                status = "BAD";
            else if (sumSizeTravel >= 10 && sumSizeTravel <= 20)
                status = "GOOD";
            else if (sumSizeTravel > 20)
                status = "VERY_GOOD";
            else {
                status = "VERY_GOOD";
            }
            return status;
        },
        enumerable: false,
        configurable: true
    });
    return TravelCompony;
}());
var TravelCompony_one = new TravelCompony(120, [500000000, 30000000], [
    { month: 1, size: 100 },
    { month: 4, size: 77 },
]);
console.log(TravelCompony_one.total_check_travel);
console.log("New Challenge ------------------------------------");
// Missing letter
function missingLetter(letter) {
    var alpha = "abcdefg".split("");
    var arrayTostring = letter.join("");
    var result = alpha.filter(function (item, index) { return item !== arrayTostring.charAt(index); });
    return result.length ? "Alpha Invalid" : "OK. This alpha is Truth";
}
console.log(missingLetter(["a", "b", "c", "d", "e", "f"]));
>>>>>>> 24483fdb573e5429f52683b837fb9781d7ff4a72
