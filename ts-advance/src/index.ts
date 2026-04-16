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
    return acc
  },
  {} as Record<number, any[]>,
);
console.log(sortingByGroup);

// remove duplicate value from array 

const arr = [1,2,2,3,3,3,4];

console.log(arr.length);

const newArray = arr.reduce((acc,curr)=>{
  if(!acc.includes(curr)) acc.push(curr);
  return acc
},[]as number[]);

const avg = arr.reduce((acc,curr)=>{
  acc += curr;
  return acc
},0)

console.log((avg / arr.length).toFixed())