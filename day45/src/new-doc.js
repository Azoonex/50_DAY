// const value = [1, 341233, 134, 123, 23, 12, 1, 34, 1, 1, 3];
// const rawData = [
//   { id: 1, name: "Ali", age: "27", isActive: "true" },
//   { id: 2, name: "Sara", age: "unknown", isActive: "false" },
//   { id: 3, name: "Reza", age: "19", isActive: "true" },
//   { id: 4, name: "Fatemeh", age: "", isActive: "yes" },
//   { id: 5, name: "Amir", age: "25", isActive: "false" },
// ];
// // function editData(array:{ id: number; name: string; age: string; isActive: string; }[]){
//     return array.map(item =>({
//         id: item.id,
//         name: item.name,
//         age : isNaN(Number(item.age)) ? (()=>{  console.log(`Invalid age for user with id ${item.id}: "${item.age}"`);
//             return null
//         })()  : Number(item.age),
//         isActive: item.isActive === "true" ? true : false
//     ))
// }
// const entries = [
//   ["name", "Ali"],
//   ["age", 30],
//   ["isActive", true],
// ];
// const user = {
//   name: "Sara",
//   age: 28,
// };
// console.log(Object.fromEntries(entries));
// console.log(Object.entries(user).map((item) => console.log(item[1])));
// console.log(editData(rawData));
// Logarithmic Time (0(long n)) example Binary search | AVL Tree
// function MemoSearchRecursive(
//   arr: Array<number>,
//   x: number,
//   start: number,
//   end: number
// ) {
//   if (start > end) return false;
//   let mid = Math.floor((start + end) / 2);
//   // example [0,300] => 0 + 300 / 2 150;
//   if (arr[mid] === x) return true;
//   // [50] > 30
//   if (arr[mid] > x) {
//     console.log(arr[x]);
//     return MemoSearchRecursive(arr, x, start, mid - 1);
//   } else {
//     return MemoSearchRecursive(arr, x, mid + 1, end);
//   }
// }
// let arr = Array.from({ length: 3_000_000 }).map((_, i) => i);
// let x = 5;
// console.log(MemoSearchRecursive(arr, x, 0, arr.length - 1));
// let array = [1, 2.3, 4, 5, 6];
// function maxSubarraySum(arr: Array<number>, k: number) {
//   let maxSum = 0;
//   for (let i = 0; i < arr.length - k; i++) {
//     let currentSum = 0;
//     for (let j = i; j < i + k; j++) {
//       console.log(arr[j]);
//     }
//     maxSum = Math.max(maxSum, currentSum);
//   }
//   return maxSum
// }
// console.log(maxSubarraySum(array, 3));
//! Intel method JS
//  خلاصه سازه‌های اصلی Intl
// Intl.Collator → مقایسه رشته‌ها بر اساس قوانین زبان
// Intl.NumberFormat → قالب‌بندی اعداد، پول و واحدها
// Intl.DateTimeFormat → قالب‌بندی تاریخ و زمان
// Intl.PluralRules → انتخاب حالت جمع/مفرد درست بر اساس زبان
// Intl.RelativeTimeFormat → نمایش "5 minutes ago" یا "در ۵ دقیقه قبل"
// Intl.ListFormat → قالب‌بندی لیست‌ها ("A, B, and C")
// ~ compare language
// const collator = new Intl.Collator("sv")
// console.log(collator.compare("ب","z"))
// // ~ Intel.NumberFormat => this set number determine language and country
// const formatter = new Intl.NumberFormat("de-BE");
// console.log(formatter.format("13314234234"));
// // ~ Intl.DateTimeFormate => format Date determine language / county NICE
// const dateFormatter = new Intl.DateTimeFormat("fa-IR");
// console.log(dateFormatter.format(new Date()))
// // ~ Intl.NumberFormat => Unit of measurement
// // example 1 with Units
// const unitFormatter = new Intl.NumberFormat("en-US",{style:"unit",unit:"kilometer-per-hour"});
// console.log(unitFormatter.format(120))
// // example 2 with Currency nice
// const currencyFormatter = new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});
// console.log(currencyFormatter.format(54546546546546546563354))
// const dataMap = new Map([
//   ["leve1", 34],
//   ["level2", 23],
//   ["level3", 12],
// ]);
// dataMap.set("levne4", 43);
// dataMap.delete("level2")
//
// dataMap.forEach((value, key) => {
//   console.log(value, key);
// });
// console.log(dataMap.has())
// Iterating over a map
// for (let [key, value] of dataMap) {
//   console.log(key, value);
// }
// dataMap.clear()
function worldFrequencyCounter(str) {
    var newMapString = new Map();
    var stringToArray = str.split(" ").map(function (item, index) {
        newMapString.set(item, index + 1);
    });
    return newMapString;
}
console.log(worldFrequencyCounter("the app create by flutter"));
