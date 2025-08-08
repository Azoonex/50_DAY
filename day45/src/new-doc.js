var value = [1, 341233, 134, 123, 23, 12, 1, 34, 1, 1, 3];
var rawData = [
    { id: 1, name: "Ali", age: "27", isActive: "true" },
    { id: 2, name: "Sara", age: "unknown", isActive: "false" },
    { id: 3, name: "Reza", age: "19", isActive: "true" },
    { id: 4, name: "Fatemeh", age: "", isActive: "yes" },
    { id: 5, name: "Amir", age: "25", isActive: "false" },
];
// function editData(array:{ id: number; name: string; age: string; isActive: string; }[]){
//     return array.map(item =>({
//         id: item.id,
//         name: item.name,
//         age : isNaN(Number(item.age)) ? (()=>{  console.log(`Invalid age for user with id ${item.id}: "${item.age}"`);
//             return null
//         })()  : Number(item.age),
//         isActive: item.isActive === "true" ? true : false
//     ))
// }
var entries = [
    ["name", "Ali"],
    ["age", 30],
    ["isActive", true],
];
var user = {
    name: "Sara",
    age: 28,
};
console.log(Object.fromEntries(entries));
console.log(Object.entries(user).map(function (item) { return console.log(item[1]); }));
// console.log(editData(rawData));
// Logarithmic Time (0(long n)) example Binary search | AVL Tree
function MemoSearchRecursive(arr, x, start, end) {
    if (start > end)
        return false;
    var mid = Math.floor((start + end) / 2);
    // example [0,300] => 0 + 300 / 2 150;
    if (arr[mid] === x)
        return true;
    // [50] > 30
    if (arr[mid] > x) {
        console.log(arr[x]);
        return MemoSearchRecursive(arr, x, start, mid - 1);
    }
    else {
        return MemoSearchRecursive(arr, x, mid + 1, end);
    }
}
var arr = Array.from({ length: 3000000 }).map(function (_, i) { return i; });
var x = 5;
console.log(MemoSearchRecursive(arr, x, 0, arr.length - 1));
