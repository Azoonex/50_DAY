function Component(constructor: Function) {
  constructor.prototype.uniqId = Date.now();
  constructor.prototype.insertInDom = function () {
    console.log("inserting in Component in the Dom");
  };
}
@Component
class ProfileComponent {}

// console.log("Hello")

function identity<T>(arg: T): T {
  return arg;
}

const num = identity(4);

function getLengthT<T extends { v: number; value: string; label: [] }>(
  item: T
) {
  return item.v;
}

function getItem<V extends number>(item: V): V {
  return item;
}

// function padLeft(padding: number | string, input: string): string {
//   if (typeof padding == "number") {
//     return "".repeat(padding) + input;
//   }
//   return padding + input;
// }
// console.log(padLeft(213, "sfd"));

// function Logger(constructor: Function) {
//   console.log("Class Created", constructor.name);
// }

// @Logger
class User {
  name = "Amir";
}

// Hello world
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// Create Source Object
const person2 = { firstName: "Anne", lastName: "Smith" };

// Assign Source to Target
const newAssign = Object.assign(person1, person2);
console.log(newAssign);

const user = {
  accessibility: "yes",
  getAccess() {
    return this.accessibility;
  },
};

console.log(user.getAccess());

console.log(this);

const users = {
  name: "Amir",
  getName() {
    console.log(this.name);
  },
};

console.log("00000--------------------00000");

// pure function is the just dependency of parameter ,is n't change any objects or variables that existed before is was called. same input , same output;

function safe(v: number, h: number) {
  console.log(v + h);
}

let a = 10;
let b = a;

b = 20;

console.log(a === 10, b === 20);
// number; string; boolean; null; undefined; symbol; bigint;
// Reference type Object array function data map / set
let obj1 = { name: "Ali" };
let obj2 = obj1;
obj2.name = "Reza";

console.log(obj1);

// چون هر دو به یه آدرس تو حافظه اشاره می‌کنن

let a2 = { x: 1 };
let b2 = { x: 1 };

a2 === b2; // false ❌ چون آدرس‌ها فرق دارن

// prototypes

function Person(name: string) {
  this.name = name;
}

const name1 = new Person("Ali");
const name2 = new Person("Reza");
Person.prototype.sayHi = function () {
  console.log("Hi" + this.name);
};

console.log(name1);

const userItem = {
  name: "Ali",
};

function sayHi(this: any) {
  console.log(this.name);
}

console.log(sayHi());
console.log(sayHi.call(userItem));
console.log(sayHi.apply(user));

const boundFun = sayHi.bind(getItem);
console.log(boundFun());

const numbers = ["1", "2", "3"];
console.log(numbers.map(parseInt))

const date= new Date();

console.log(date.toString)