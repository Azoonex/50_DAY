// problem-solving

// 1) understand the Problem
// 2) Explore concrete Examples
//

function charCount(str: string) {
  const char: { [key: string]: number } = {};
  const convertStr = str.split(" ").toString();

  for (let x = 0; x < str.length; x++) {
    const charName = str[x].toLowerCase().trim();
    if (!char[charName]) {
      char[charName] = 1;
    } else {
      char[charName]++;
    }
  }
  return convertStr;
}

// console.log(charCount("Hello world"));

const value = [1, 32, 1, 32, 4];

// console.log(value.splice(0,8));

function same(arr1: string, arr2: string) {
  if (!arr1 || !arr2 || arr1.length !== arr2.length) {
    return false;
  }

  for (let arr of arr1) {
    if (!arr2.includes(arr)) {
      return false;
    }
  }
  return true;
}

let obj = {
  name: "reza",
  age: 30,
  side: "left",
  category: "person",
};

// Object.keys(obj).map((value) => console.log(obj[value]));

let objString = "";
for (let val in obj) {
  objString += !objString ? obj[val] : " " + obj[val];
}

console.log(objString.split(" ").reverse().join(" "));

function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = myGenerator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

function* counter() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const c = counter();

console.log("c", c.next());
console.log("c", c.next());
console.log("c", c.next());
console.log("c", c.next());
console.log("c", c.next());
console.log("c", c.next());

function* fruits() {
  const list = ["🍎", "🍌", "🍓"];
  for (const item of list) {
    yield item;
  }
}

for (const fruit of fruits()) {
  console.log(fruit);
}

const bigUserList = Array.from({ length: 100 }).map((v, index) => {
  return { id: index };
});

console.log(bigUserList);
// yield it take : "Wait a minute...take this...we'll continue later";

function processUser(users) {
  return users.map((u) => {
    console.log(u);
    return u.id;
  });
}

function* processUserYield(users) {
  for (const user of users) {
    yield user.id;
  }
}

const gen = processUserYield(bigUserList);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// step-by-step is very import i handle the generate function

type userType = {
  id: number;
};

function* processUserBatch(users: Array<userType>, batchSize = 100) {
  let batch = [];

  for (const user of users) {
    batch.push(user.id);

    if (batch.length === batchSize) {
      yield batch;
      batch = [];
    }
  }

  if (batch.length) yield batch;
}

const genTwo = processUserBatch(bigUserList);

console.log(genTwo.next());
// frame by frame
(function run() {
  const { value, done } = genTwo.next();
  if (done) return;
  console.log(value);
  // requestAnimationFrame(run);
})();

// example two
function* pagination(items: userType[], pageSize: number) {
  for (let i = 0; i < items.length; i += pageSize) {
    yield items.slice(i, i + pageSize);
  }
}

const pages = pagination(bigUserList, 10);

console.log(pages.next());

function* timer() {
  let seconds = 0;
  while (true) {
    yield seconds++;
  }
}

const t = timer();

//stateful iteration 

setInterval(() => {
  console.log(t.next().value);
}, 1000);
