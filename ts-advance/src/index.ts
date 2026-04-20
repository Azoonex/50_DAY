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
  id: number
  price: number
}

const order: Order[] = [
  { id: 1, price: 120 },
  { id: 2, price: 80 },
  { id: 3, price: 200 },
  { id: 4, price: 50 }
]

const calculatePrice = order.reduce((acc,curr)=>{
  return acc += curr.price
},0);

console.log(calculatePrice);


// method two is very short 

const calculatePrice_b = order.reduce((acc,{price})=> acc += price,0);

console.log(calculatePrice_b)