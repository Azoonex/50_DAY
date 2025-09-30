// function longestConsoluteSequence(array: number[]) {
//   const convertToSet = new Set(array);
//   const findMaxValueInSet = Math.max(...array);
//   let findLetterNumber = new Set();
//   for (let x = 0; x < findMaxValueInSet; x++) {
//     if (convertToSet.has(x)) {
//       findLetterNumber.add(x);
//     }
//   }
//   let covertToArray = Array.from(findLetterNumber);
//   return (covertToArray[covertToArray.length - 1] as number) + 1;
// }
// function longestConsoluteSequence(array: number[]) {
//   const convertToSet = new Set(array);
//   let findLongerNumber = 0;
//   for (let value of convertToSet) {
//     if (convertToSet.has(value - 1)) {
//       let currentNum = value;
//       let numSequence = 1;
//       while (convertToSet.has(currentNum + 1)) {
//         currentNum++;
//         numSequence++;
//       }
//       findLongerNumber = Math.max(findLongerNumber,currentNum)
//     }
//   }
// }
// console.log(longestConsoluteSequence([1, 3, 5, 7, 8, 9, 4, 2, 6]));
var newArray = [1, 3, 2, 1, 45, 423, 12];
var modify = [12, 4, 32, 1, 35, 5, 24, 22, 512, 4];
var arr = [1, 2, 3, 4, 61, 3, 2];
arr.splice(2, 2);
var newArrayTwo = ["reza", "hasan", "mojtaba", "kamran"];
newArrayTwo.splice(2, 1, "abas");
newArrayTwo.splice(2, 0, "mojtaba");
var newValue = [];
newArrayTwo.forEach(function (v) {
    newValue.push(v);
});
console.log(newValue);
var users = [
    { name: "ali", role: "admin" },
    { name: "sara", role: "user" },
    { name: "mamad", role: "admin" },
];
// let groupByRole = users.reduce((acc, curr) => {
//   acc[curr.role] = acc[curr.role] || [];
// });
var LoremIpsum = "hell world ? Thank you God and thank you everyBody!";
var covertToIntegrate = LoremIpsum.split(" ").reduce(function (acc, current) { return acc + "" + current + " "; }, "");
console.log(covertToIntegrate);
// Min and max in array
var arrayNumber = [
    1, 45, 2, 41, 4, 3, 32, 2, 4, 5, 88, 45, 3, 24, 2, 4, 2, 2, 26, 67, 7,
];
var maximumInArray = arrayNumber.reduce(function (acc, curr) {
    return Math.max(acc, curr);
}, arrayNumber[0]);
console.log(maximumInArray);
var duplicateValue = [
    "true",
    "true",
    "true",
    "true",
    "false",
    "false",
    "false",
    "true",
    "false",
];
var findDuplicate = duplicateValue.reduce(function (acc, curr) {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});
console.log(findDuplicate);
