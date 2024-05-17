// let Years = ["2", "amirabas", "weekind"];
// if (Years[2].length === 7) {
//     console.log("nice ok");
// } else {
//     console.log("error");
// }
// const fruits = ["banana", "apple", "peach"];
// console.log(Object.keys(fruits)); // increasring / exteds
// fruits.forEach((i, o) => {
//     console.log(o + 1 + ":", i);
// });
// console.log(fruits.reverse());
// const newFruits = fruits.keys();
// for(const key of newFruits){
//     console.log(`${key} : ${fruits[key]}`)
// }
// let nums = [-1, 0, 1, 2, -1, -4];
// for(let i = 0 ; i < nums.length;i++){
//     console.log(nums[i] + 3 )
// }
// Array Search
var fruits = ["Apple", "Orange", "Banana", "Mango"];
// let position = fruits.indexOf("Apple");
// let positionnew = fruits.lastIndexOf("Apple");
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fru = fruits_1[_i];
    switch (fru) {
        case "Apple":
            console.log("reza");
            break;
        case "5":
            console.log("True");
            break;
        default:
            console.log("unknowfrutes");
            break;
    }
}
if (fruits.includes("Apple")) {
    console.log("this is bast frutis");
}
// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);
// interface TypeNumber {
//     value: number;
//     index: number;
// }
// async function myFunction({ value, index }: TypeNumber) {
//     return value > 18;
// }
// myFunction({value: 1,index: 1})
// const numbers = [4, 9, 16, 25, 29];
// interface TypeNumber {
//     value: number;
//     index: number;
// }
// let first = numbers.find((value, index) => myFunction({ value, index }));
// function myFunction({ value, index }: TypeNumber): boolean {
//     return value > 18;
// }
// console.log(myFunction({ value: 1, index: 1 }));
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);
function myFunction() {
    return function (value, index) { return value > 18; };
}
console.log(myFunction(1, 1));
