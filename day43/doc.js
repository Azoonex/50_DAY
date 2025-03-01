// const obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0};
// const toNumericPairs = input => {
//   const entries = Object.entries(obj);
//   entries.forEach(entry => entry[0] = +entry[0]);
//   return entries;
// }
// console.log(toNumericPairs(obj));
// const value = Object.assign({},['z','t','m'])
// console.log(value)
// function findCommon(arr1:Array<number>,arr2:Array<number>) {
//     for(arr1)
// }
// solution 101
// function check_uppercase_lowerCase(str: string) {
//   const hasOnlyLetters = !!str.match(/^[a-z]*$/i);
//   let findUpperCaseTrue: Array<boolean> = [];
//   let matches = str.match(/[A-Z]/g);
//   if (hasOnlyLetters) {
//     matches &&
//       matches.length > 0 &&
//       matches.map((item) => {
//         for (let x = 0; x < item.length; x++) {
//           let findStartLetter = str.indexOf(item) + 1;
//           let findEndLetter = str.indexOf(item) - 1;
//           if (
//             isLowerCase(str.split("")[findStartLetter]) &&
//             isLowerCase(str.split("")[findEndLetter])
//           ) {
//             findUpperCaseTrue.push(true);
//           } else {
//             findUpperCaseTrue.push(false);
//           }
//         }
//       });
//   } else {
//     throw new Error("Checked the text latin format");
//   }
//   return findUpperCaseTrue
// }
// console.log(check_uppercase_lowerCase("avJaScript"));
// function isLowerCase(str: string) {
//   if (str) {
//     return str === str.toLowerCase() && str !== str.toUpperCase();
//   }
// }
// solution 1003
// all method
// const all_array = [0, 1, 2, 3, 4, 5];
// function messed_up(arr: Array<number>) {
//   let first_value = arr[0];
//   let messed = arr.sort((acc, ic) => Math.random() - 5.0);
//   let finalArray = [first_value, ...messed];
//   return finalArray.filter((item, index) => finalArray.indexOf(item) === index);
// }
// console.log(messed_up(all_array));
var numbers = [4, 2, 9, 1, 5, 7, 10, 17, 12];
// console.log(
//   numbers.sort((a, b) => {
//     console.log(a, b);
//     return b - a;
//   })
// );
// let names = ["Ali", "Reza", "Zahra", "Mohammad"];
// names.sort()
// console.log(names)
function findDigitNumber(arr) {
    return arr.sort(function (a, b) {
        if (a % 2 === 0 && b % 2 !== 0)
            return -1;
        if (a % 2 !== 0 && b % 2 === 0)
            return 1;
        if (a % 2 === 0 && b % 2 === 0)
            return a - b;
        if (a % 2 !== 0 && b % 2 !== 0)
            return b - a;
        return 0;
    });
}
var numbers = [3, 1, 2, 8, 5, 4, 7, 6];
console.log(findDigitNumber(numbers));
