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
}

console.log(hightScoringWord("hello world And string to array"));

// choose chat gpt
let max = -Infinity;


