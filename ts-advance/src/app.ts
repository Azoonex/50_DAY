type Activity = {
  userId: string;
  points: number;
};

const activities: Activity[] = [
  { userId: "u1", points: 10 },
  { userId: "u2", points: 20 },
  { userId: "u1", points: 15 },
  { userId: "u3", points: 5 },
  { userId: "u2", points: 10 },
  { userId: "u3", points: 30 },
];

function getTopUsers(activities: Activity[], topN: number) {
  const userTotals: Record<string, number> = {};
  for (const activity of activities) {
    if (userTotals[activity.userId]) {
      userTotals[activity.userId] += activity.points;
    } else {
      userTotals[activity.userId] = activity.points;
    }
  }

  const usersArray = Object.entries(userTotals).map(([userId, total]) => {
    return { userId, total };
  });

  usersArray.sort((a, b) => b.total - a.total);

  return usersArray.slice(0, topN);
}
console.log(getTopUsers(activities, 1));

//  Schwartzian Transform

const data = ["delta", "alpha", "charlie", "bravo"];

function someSlowOperation(str: string) {
  console.log("processing", str);
  return str.length;
}

data.sort((a, b) => {
  return someSlowOperation(a) - someSlowOperation(b);
});

const mapped = data.map((v, i) => ({
  i,
  value: someSlowOperation(v),
}));

console.log(mapped);

console.log(mapped.sort((a, b) => a.value - b.value));

const result = mapped.map((v) => data[v.i]);

console.log(result);

const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a: number, b: number) => (a > b ? 1 : 0);
arr.sort(compareFn);
console.log(arr);

const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};

const arrayLinking = Array.prototype.sort.call(arrayLike);

console.log(arrayLinking);

// Precompute Search

const users = ["Ali Reza", "Sara Mohammadi", "Amir Hossein"];

function search(query: string) {
  return users.filter((user) =>
    user.toLowerCase().includes(query.toLowerCase()),
  );
}

// Start

const indexedUsers = users.map((name) => ({
  original: name,
  searchValue: name.toLowerCase(),
}));

console.log(indexedUsers);

function searchCharacter(query: string) {
  const q = query.toLowerCase();
  return indexedUsers
    .filter((user) => user.searchValue.includes(q))
    .map((v) => v.original);
}

console.log(searchCharacter("reza"));

//  Map Index Pattern

const person = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Amir" },
];

function getUser(id: number) {
  return person.find((u) => u.id === id);
} // O(n)

const userMap = new Map(person.map((item) => [item.id, item]));

console.log(userMap.get(2));

// Memoization Time Complexity

function slowFunction(n: number) {
  console.log("calculating...");
  return n * n;
}

const cache = new Map();

function memoized(n: number) {
  if (cache.has(n)) {
    return cache.get(n);
  }

  const result = slowFunction(n);
  cache.set(n, result);

  return result;
}

console.log(memoized(4));

function debounce(fn: any, delay: number) {
  let timer: number;

  return function <T>(...args: T[]) {
    clearInterval(timer);

    timer = setInterval(() => {
      fn(...args);
    }, delay);
  };
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) break;

  console.log(i);
}

const user = {
  name: "Ali",
  age: 20,
};
console.log("name " in user);

const myArray = [1];

console.log(0 in myArray);

console.log(myArray instanceof Date);

if (myArray instanceof Array) {
  console.log(12);
}

console.log(Infinity);

let names = "guesss";

names ||= "guest";

console.log(names);

const userFreeze = Object.freeze({
  name: "Ali",
});

const obj = {
  user: {
    name: "Ali",
  },
};

const copy = { ...obj };
const bestCopy = structuredClone(obj)
console.log(bestCopy);
