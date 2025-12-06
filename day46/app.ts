function strictly(arr: Array<number>) {
  // check increasing and decreasing

  if (arr.length === 1) {
    return true;
  }

  let arr_direction = arr[1] - arr[0];

  for (let x = 0; x < arr.length; x++) {
    if (arr_direction * (arr[x + 1] - arr[x]) <= 0) {
      return false
    }
  }

  return true;
}

console.log(strictly([2, 34, 1, 3, 1, 31, 1,2,3]));
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

const newArray = [1, 3, 2, 1, 45, 423, 12];
let modify = [12, 4, 32, 1, 35, 5, 24, 22, 512, 4];

let arr = [1, 2, 3, 4, 61, 3, 2];
arr.splice(2, 2);

let newArrayTwo = ["reza", "hasan", "mojtaba", "kamran"];

newArrayTwo.splice(2, 1, "abas");
newArrayTwo.splice(2, 0, "mojtaba");
let newValue: string[] = [];
newArrayTwo.forEach((v) => {
  newValue.push(v);
});

console.log(newValue);

let users = [
  { name: "ali", role: "admin" },
  { name: "sara", role: "user" },
  { name: "mamad", role: "admin" },
];

// let groupByRole = users.reduce((acc, curr) => {
//   acc[curr.role] = acc[curr.role] || [];
// });

const LoremIpsum = "hell world ? Thank you God and thank you everyBody!";

const covertToIntegrate = LoremIpsum.split(" ").reduce(
  (acc, current) => acc + "" + current + " ",
  ""
);

console.log(covertToIntegrate);

// Min and max in array

const arrayNumber = [
  1, 45, 2, 41, 4, 3, 32, 2, 4, 5, 88, 45, 3, 24, 2, 4, 2, 2, 26, 67, 7,
];

const maximumInArray = arrayNumber.reduce((acc, curr) => {
  return Math.max(acc, curr);
}, arrayNumber[0]);
console.log(maximumInArray);

const duplicateValue = [
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

const findDuplicate = duplicateValue.reduce(
  (acc: { [key: string]: number }, curr: string) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  },
  {}
);

console.log(findDuplicate);

// flat Array
let nestedArray = [[1, 2], [3, 4], [5, 6], [[2, 3, 1, 3]]];

let flatArray = nestedArray.reduce((acc, curr) => {
  return curr.flat();
}, []);

let orders = [
  { id: 1, amount: 100 },
  { id: 2, amount: 200 },
  { id: 3, amount: 300 },
];

const AmountOrder = orders.reduce((acc, curr) => {
  return acc + curr.amount;
}, 0);

console.log(AmountOrder);
