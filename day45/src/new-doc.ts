const value = [1, 341233, 134, 123, 23, 12, 1, 34, 1, 1, 3];

const rawData = [
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

const entries = [
  ["name", "Ali"],
  ["age", 30],
  ["isActive", true],
];

const user = {
  name: "Sara",
  age: 28,
};

console.log(Object.fromEntries(entries));
console.log(Object.entries(user).map((item) => console.log(item[1])));

// console.log(editData(rawData));

// Logarithmic Time (0(long n)) example Binary search | AVL Tree

function MemoSearchRecursive(
  arr: Array<number>,
  x: number,
  start: number,
  end: number
) {
  if (start > end) return false;

  let mid = Math.floor((start + end) / 2);
  // example [0,300] => 0 + 300 / 2 150;

  if (arr[mid] === x) return true;

  // [50] > 30
  if (arr[mid] > x) {
    console.log(arr[x]);
    return MemoSearchRecursive(arr, x, start, mid - 1);
  } else {
    return MemoSearchRecursive(arr, x, mid + 1, end);
  }
}

let arr = Array.from({ length: 3_000_000 }).map((_, i) => i);
let x = 5;

console.log(MemoSearchRecursive(arr, x, 0, arr.length - 1));
