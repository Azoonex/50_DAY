const nums = [5, 10, 2];
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum);

const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
];

const arrayToObject = users.reduce(
  (acc, current) => {
    acc[current.id] = current;
    return acc;
  },
  {} as Record<number, { id: number; name: string }>,
);

console.log(arrayToObject);

const orders = [
  { userId: 1, amount: 200 },
  { userId: 2, amount: 50 },
  { userId: 1, amount: 100 },
];

const sortingByGroup = orders.reduce(
  (acc, curr) => {
    if (!acc[curr.userId]) acc[curr.userId] = [];
    acc[curr.userId].push(curr);
    return acc;
  },
  {} as Record<number, any[]>,
);
console.log(sortingByGroup);

// remove duplicate value from array

const arr = [1, 2, 2, 3, 3, 3, 4];

console.log(arr.length);

const newArray = arr.reduce((acc, curr) => {
  if (!acc.includes(curr)) acc.push(curr);
  return acc;
}, [] as number[]);

const avg = arr.reduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);

console.log((avg / arr.length).toFixed());

let num = [3, 7, 2, 9];

const updateNum = num.reduce((acc, cur) => {
  return (acc += cur);
}, 0);
console.log(updateNum);

const fruit = ["apple", "banana", "apple", "orange", "banana", "apple"];

const sortFruit = fruit.reduce(
  (acc, curr) => {
    acc[curr] = (acc[curr] ?? 0) + 1;
    return acc;
  },
  {} as Record<string, number>,
);

console.log(sortFruit);

// 3) Build a user map by id

type Order = {
  id: number;
  price: number;
};

const order: Order[] = [
  { id: 1, price: 120 },
  { id: 2, price: 80 },
  { id: 3, price: 200 },
  { id: 4, price: 50 },
];

const calculatePrice = order.reduce((acc, curr) => {
  return (acc += curr.price);
}, 0);

console.log(calculatePrice);

// method two is very short

const calculatePrice_b = order.reduce((acc, { price }) => (acc += price), 0);

console.log(calculatePrice_b);

const allUser = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Nima" },
];

const newAllUser = allUser.reduce(
  (acc, current) => {
    acc[current.id] = current;
    return acc;
  },
  {} as Record<number, { id: number; name: string }>,
);

console.log(newAllUser);

const nums2 = [5, 3, 8, 2, 7];

const calculateNum = nums2.reduce((acc, curr) => (acc += curr), 0);
console.log(calculateNum);

const products = [
  { title: "Book", price: 20 },
  { title: "Pen", price: 5 },
  { title: "Laptop", price: 0 },
];

const checkProduct = products.every(function (item) {
  if (item.price > 0) {
    return true;
  }
  return false;
});

console.log(checkProduct);

const scores = [17, 20, 14, 19];

const avgScore = scores.reduce((acc, curr) => (acc += curr), 0) / scores.length;

console.log(avgScore);

const names = ["ali", "sara", "mehdi", "li"];

const checkLength = names.every((value) => value.length > 0);

console.log(checkLength);

const items = [
  { type: "fruit", name: "apple" },
  { type: "vegetable", name: "carrot" },
  { type: "fruit", name: "banana" },
];

const groupItems = items.reduce(
  (acc, current) => {
    if (!acc[current.type]) {
      acc[current.type] = [];
    }
    acc[current.type].push(current);

    return acc;
  },
  {} as Record<string, { type: string; name: string }[]>,
);

console.log(groupItems);

const cars = [
  { brand: "BMW", color: "red" },
  { brand: "Audi", color: "black" },
  { brand: "BMW", color: "blue" },
  { brand: "Kia", color: "red" },
];

const calculateSizeCar = cars.reduce(
  (acc, { brand }) => {
    acc[brand] = (acc[brand] || 0) + 1;
    return acc;
  },
  {} as Record<string, number>,
);

console.log(calculateSizeCar);

const productsSize = [
  { name: "Phone", price: 500 },
  { name: "Laptop", price: 2000 },
  { name: "Watch", price: 300 },
];

const findByPrice = productsSize.reduce((acc, curr) => {
  acc = acc < curr.price ? curr.price : acc;
  return acc;
}, 0);

const findByPriceTwo = productsSize.reduce(
  (acc, { price }) => Math.max(acc, price),
  0,
);

console.log("findByPrice", findByPriceTwo);

const values = [2, 3, 3, 5, 2, 8, 5];

const removeDuplicate = values.reduce((acc, curr) => {
  if (!acc.includes(curr)) acc.push(curr);
  return acc;
}, [] as number[]);

console.log(removeDuplicate);

const students = [
  { name: "Ali", age: 19, score: 18 },
  { name: "Sara", age: 21, score: 16 },
  { name: "Reza", age: 17, score: 19 },
];

const specialStudentCheckAgeScore = students.every((value) => {
  return value.age > 18 && value.score > 15;
});

console.log(specialStudentCheckAgeScore);

// remove duplicate num of array with method reduce

let removeDuplicateTwo = values.reduce((acc, curr) => {
  acc.add(curr);
  return acc;
}, new Set<number>());

console.log(Array.from(removeDuplicateTwo));

const unique = [...new Set(values)];

console.log(unique);

const person = new Map();

person.set(1, "ali");
console.log(person.has(1));
person.delete(1);
const usersNew = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
];


