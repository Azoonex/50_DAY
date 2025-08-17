interface MyObject {
  make?: string;
  model: string;
  year: number; // Marked as optional
}

const car: MyObject = { make: "toyota", model: "camry", year: 2020 };

delete car.make;

console.log(car);

// object.keys() => return enumerable قابل شمارهش

for (let key in car) {
  console.log(`${key} | ${car[key]}`);
}

const book = {
  title: "JavaScript Guide",
  author: "John Doe",
  pages: 350,
};

const entries = Object.entries(book);

console.log("tttttttttttttt", entries[0][0]);

for (const [key, value] of Object.entries(book)) {
  console.log(`${key}: ${value}`);
}

Object.entries(book).forEach(([key, value]) => {
  if (typeof value === "string") {
    console.log(`${key} has ${value.length} characters`);
  }
});

const bookMap = new Map(Object.entries(book));

console.log(bookMap.values());

// new map key as everything type boolean and string number everything

const initializedMap = new Map([
  ["key1", "value1"],
  ["text", "value2"],
]);

console.log(initializedMap.values());

const person = {
  ali: {
    status: () => false,
    age: 22,
    work: "clear",
  },
  amir: {
    status: () => true,
    age: 25,
    work: "devops",
  },
  jamal: {
    status: () => true,
    age: 35,
    work: "fluter",
  },
};

const statusDoer = [];

for (let [key, value] of Object.entries(person)) {
  if (value.status()) {
    let newObject = {};
    newObject = { name: key, ...value };
    statusDoer.push(newObject);
  }
}

console.log(statusDoer);
