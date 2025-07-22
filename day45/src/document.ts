// function chunk(array: Array<number>, size: number) {
//   let firstIndex = 0;
//   const resultArray: Array<Array<number>> = [];
//   for (let x = 0; x < array.length; x++) {
//     let newArray = array.slice(firstIndex, size);
//     (firstIndex += 2), (size += 2);
//     if (newArray && newArray.length > 0) resultArray.push(newArray);
//   }
//   return resultArray;
// }

// console.log(chunk([1, 3, 41, 2, 9, 5, 4, 7, 8, 9], 2));

function compact<T>(array: Array<T>) {
  let result: Array<T> = [];

  array.map((item) => {
    if (!!item === true) {
      result.push(item);
    }
  });
  return result;
}

function concat<T>(array1: Array<T>, array2: Array<T>) {
  // method one
  let result = [...array1, ...array2];
  let result2 = array1.concat(array2);
  return {
    methodOne: result,
    methodTwo: result2,
  };
}

// console.log(compact([1, 2, 3, "", false, 0, 10, " ", "create"]));

// Remove as comment
// function difference(array: Array<number>, stack: Array<number>) {
//   let methodOne = array.reduce((acc: number[], item: number) => {
//     if (!stack.includes(item)) {
//       acc.push(item);
//     }
//     return acc;
//   }, []);
//   let methodTwo = array.filter((item) => !stack.includes(item));

//   // let methodThree = array

//   let dataMethodThree: Array<number> = [];
//   for (let [i, val] of array.entries()) {
//     if (array[i - 1] === stack[i -1]) {
//      dataMethodThree.push(i)
//     }
//   }

//   return {
//     methodOne: methodOne,
//     methodTwo: methodTwo,
//     dataMethodThree: dataMethodThree,
//   };
// }

// console.log(difference([1, 0, 2, 3, 4, 5, 6], [1, 2, 3]));

// Array Constructor

// const makeArray = new Array(5).fill(null);

// console.log(makeArray)

// Time

const time = new Date().toISOString();

// console.log(time)

// finish three method lodash top function

// solution 42 recursion function;

function arraySum(arr: Array<number>) {
  // method one
  // if (!arr.length) return "Ampty Array";
  // let result: number | null = 0;
  // for (let x = arr.length - 1; x > -1; x--) {
  //   if (arr[x]) {
  //     result += arr[x];
  //   }
  // }
  // return result;

  // method

  if (arr.length == 0) {
    return 0;
  }

  return arr[0] + arraySum(arr.slice(1));
}

console.log(arraySum([2, 2, 2, 2]));

// check this

// Factorial
function recursionArray(num: number): number {
  if (num == 0) {
    return 1;
  }

  return num * recursionArray(num - 1);
}

// fibonacci

function fibonacci(num: number):number {
  switch (num) {
    case 0:
      return 0;
    case 1:
      return 1;
    default:
      return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

console.log(recursionArray(3));


console.log(typeof 0 === "number")