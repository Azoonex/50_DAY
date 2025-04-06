// let items = "item1,item2,item3";
// // console.log(items.search("item2"),items.lastIndexOf(","));
// // let new_items = items.substring(items.search("item2"),items.lastIndexOf(","));
// // let split_value = items.split(",")
// // console.log(split_value)
// // console.log(items.)
// // console.log(new_items)
// // check the number up
// // 12345
// // 5
// // JavaScript Basic: Exercise-118 with Solution
// function checkNumber(count: number, num: number) {
//   let counter = count.toString().split("");
//   for (let x = 0; x < counter.length - 1; x++) {
//     if (parseInt(counter[x]) >= parseInt(counter[x + 1])) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(checkNumber(123451, 4));
var words = ["apple", "banana", "apple", "orange", "banana", "apple"];
function findMaxNumber(arr) {
    var item = [];
    var items = arr.reduce(function (max, current) {
        arr[max] === current ? item.push(max) : undefined;
    }, arr[0]);
    console.log(item);
}
// console.log(findMaxNumber([3, 9, 2, 5, 12, 7]));
var items = [
    { id: 1, name: "Apple", price: 100 },
    { id: 2, name: "Banana", price: 50 },
    { id: 3, name: "Orange", price: 70 },
];
function arraytoobject(arr) {
    return arr.reduce(function (acc, current) {
        acc[current.id] = current;
        return acc;
    }, {});
}
console.log(arraytoobject(items));
