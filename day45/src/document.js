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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// console.log(chunk([1, 3, 41, 2, 9, 5, 4, 7, 8, 9], 2));
function compact(array) {
    var result = [];
    array.map(function (item) {
        if (!!item === true) {
            result.push(item);
        }
    });
    return result;
}
function concat(array1, array2) {
    // method one
    var result = __spreadArray(__spreadArray([], array1, true), array2, true);
    var result2 = array1.concat(array2);
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
var time = new Date().toISOString();
// console.log(time)
// finish three method lodash top function
// solution 42 recursion function;
function arraySum(arr) {
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
function recursionArray(num) {
    if (num == 0) {
        return 1;
    }
    return num * recursionArray(num - 1);
}
// fibonacci
function fibonacci(num) {
    switch (num) {
        case 0:
            return 0;
        case 1:
            return 1;
        default:
            return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
<<<<<<< HEAD
function printTree(node) {
    console.log(node.name);
    node.children.forEach(function (child) { return printTree(child); });
}
console.log(printTree());
=======
console.log(recursionArray(3));
console.log(typeof 0 === "number");
<<<<<<< HEAD
var myArray = ["abas", "game", "test"];
var entriesArray = myArray.entries();
for (var _i = 0, entriesArray_1 = entriesArray; _i < entriesArray_1.length; _i++) {
    var _a = entriesArray_1[_i], value = _a[0], index = _a[1];
    console.log(index, value);
}
=======
>>>>>>> d0c073df7727fdab4218f37b34c4f698e4586abe
>>>>>>> 1b46266c56c453d372f59f0ec6b6c653f9f17e16
