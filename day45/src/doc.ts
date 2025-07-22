// function find_missingNumber(arr: number[]): number {
//   if (!arr.length) return 1;

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

function sumOfEvenSquares(number: Array<number>) {
  if (!number.length) return false;

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
function hightScoringWord(str: string) {
  if (!str.length) return "Invalid string and writing This.";

  const stringTo_array = str.split(" ");
  const largeLength = stringTo_array.reduce(
    (acc, curr) => Math.max(acc, curr.length),
    0
  );
  return stringTo_array.find((v) => v.length === largeLength);

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
let minNegative = -Infinity;

// console.log(max < -1000);

// validAnagrams

function validAnagram(oneStr: string, towStr: string) {
  const letterWord = oneStr.slice(0, 1);
  let checkTheLetter = towStr.split("").includes(letterWord);
  return checkTheLetter;
}

console.log(validAnagram("ttt", "mmt"));

export { hightScoringWord, validAnagram };

function validAnagram2(oneStr: string, towStr: string) {
  const letterWord = oneStr.slice(0, 1);
  let checkTheLetter = towStr
    .split("")
    .reduce((acc: Record<string, number>, cur: string) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
  return Object.keys(checkTheLetter).some((i) => i === letterWord);
}

console.log(validAnagram2("ete", "gte"));

//generateHashtag

function generateHashtag(str: string) {
  if (str.length > 140 || str.length === 0) return false;

  // const stringToArray =
  //   "$" +
  //   str
  //     .split(" ")
  //     .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
  //     .join(" ")
  //     .replace(/[^A-Za-z]/g, "");

  // return stringToArray;

  // with method 2

  const strToArray = str.split(" ");

  return strToArray.reduce(function (acc, curr) {
    return acc + curr.charAt(0).toUpperCase() + curr.substring(1);
  }, "#");
}

console.log(generateHashtag("hello world"));

function isValidIpv4(ip: string) {
  if (!ip.length) return false;
  const stringToArray = ip.split(".");

  switch (true) {
    case stringToArray.length < 4:
      return false;

    case stringToArray[0].length > 1:
      return stringToArray.every((item) => item.length > 1);
    default:
      return true;
  }
}

console.log(isValidIpv4("1.2.3.4"));

type TypeCars = { make: string; model: string; mileage: number };

export class AnalyzeCarMileage {
  constructor(public cars: TypeCars[]) {}

<<<<<<< HEAD
// console.log(Object.entries(obj));

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };
// const create = { g1: 4, z: 5 };

// const returnTarget = Object.assign(target,source,create)

// const person = {
//   isHuman: false,
//   printIntroduction: function () {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   },
// };

// const we = Object.create(person)

// we.isHuman = false

// console.log(person)

// title case

// function TitleCase(str:string){
//   let newString = str.split(" ");
//   let setString:string[]= [];
//   newString.forEach(item =>{
//     let letterWorld = item.slice(0,1).toUpperCase()
//     setString.push(letterWorld + item.slice(1).toLowerCase())

//   })
//   return setString.join(" ")
// }

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
=======
  averageMileage() {
    const sum =
      this.cars.reduce((acc, curr) => {
        return acc + curr.mileage;
      }, 0) / this.cars.length;

    return Math.floor(sum);
  }

  totalMileage() {
    const result = this.cars.reduce((acc, curr) => {
      return acc + curr.mileage;
    }, 0);
    return result;
  }

  // find_eldest_mileage() {
  //   const findItem = Math.max(...this.cars.map((o) => o.mileage));
  //   return this.cars.filter((item) => item.mileage == findItem);
  // }

  find_eldest_mileage() {
    return this.cars.reduce((acc, cur) => {
      return acc.mileage > cur.mileage ? acc : cur;
    }, this.cars[0]);
  }

  find_lost_mileage() {
    return this.cars.reduce((acc, curr) => {
      return acc.mileage < curr.mileage ? acc : curr;
    }, this.cars[0]);
  }
}
>>>>>>> 24483fdb573e5429f52683b837fb9781d7ff4a72

const analyzeCars = new AnalyzeCarMileage([
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

<<<<<<< HEAD
 for(const char of str){
  saveCharacter[char] = (saveCharacter[char] || 0) + 1;
 }

 const findBigSizeObject = Math.max(...Object.values(saveCharacter));

 console.log(findBigSizeObject)
=======
export { generateHashtag, isValidIpv4 };
>>>>>>> 24483fdb573e5429f52683b837fb9781d7ff4a72

//  TYPES START ___++++++++++++++++//

enum StatusTotal_check_travel {
  "GOOD",
  "MIDDLE",
  "VERY_GOOD",
}

console.log(findFirstRepeatCharacters("hello"))

const value = {
  id : 1,
  name: 2
}

console.log(Object.keys(value))

// chunk array

function chunk(arra: Array<number>, size: number) {
  let firstIndex = 0;
  const resultArray: Array<Array<number>> = [];
  for (let x = 0; x  < arra.length; x++) {
    console.log(x);
    let newArra = arra.slice(firstIndex, size);
    (firstIndex += 2), (size += 2);
    if (newArra && newArra.length > 0) resultArray.push(newArra);
  }
  return resultArray;
}

console.log(chunk([1, 3, 41, 2, 9, 5, 4, 7, 8, 9], 2));
