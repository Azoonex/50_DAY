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




console.log(initializedMap.values())
