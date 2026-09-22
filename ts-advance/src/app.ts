// Frequency counting

function charFrequency(text: string) {
  const freqMap = new Map<string, number>();

  for (const char of text) {
    const currentCount = freqMap.get(char) ?? 0;

    freqMap.set(char, currentCount + 1);
  }

  return freqMap;
}

const text = "apple";

const result = charFrequency(text);

result.forEach((count, ch) => {
  console.log(`${ch} => ${count}`);
});

// character counter

function characterCounter(str: string) {
  const strMap = new Map<string, number>();

  for (const word of str.toLowerCase().split(" ")) {
    const wordCounter = strMap.get(word) ?? 0;

    strMap.set(word, wordCounter + 1);
  }

  return strMap;
}

characterCounter("this is a big restaurant").forEach((value, key) => {
  console.log(`${key} = ${value}`);
});

function counterNumberFrequency(array: number[]) {
  const frequencyMap = new Map<number, number>();
  for (const num of array) {
    const countNumber = frequencyMap.get(num) ?? 0;
    frequencyMap.set(num, countNumber + 1);
  }
  return frequencyMap;
}

counterNumberFrequency([1, 2, 3, 33, 5, 3, 3, 3, 3, 3]).forEach(
  (value, key) => {
    console.log(key, value);
  },
);

console.log("dddddddddddddddddd");

function mostFrequentChar(text: string) {
  const strMap = new Map<string, number>();

  for (const char of text) {
    const charCounter = strMap.get(char) ?? 0;
    strMap.set(char, charCounter + 1);
  }
  return strMap;
}
let larNumber = {
  key: "",
  size: 0,
};
mostFrequentChar("sdfjasldjfd").forEach((value, key) => {
  if (value > larNumber.size) {
    larNumber = {
      key,
      size: value,
    };
  }
});

console.log(larNumber);

function argAnagrams(a: string, b: string) {
  if (a.length !== b.length) {
    return `argument (a) is not equal arg (b)`;
  }

  const argMap = new Map();
  let isCheckEqual: boolean = true;

  for (const key of a) {
    const checkEqual = argMap.get(key) ?? true;
    argMap.set(key, checkEqual);
  }

  b.split("").forEach((value) => {
    isCheckEqual = argMap.get(value) ?? false;
  });

  return Boolean(isCheckEqual);
}

console.log(argAnagrams("ppale", "apple"));

function twoSumSorted(arr: number[], target: number): [number, number] | null {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    const sum = arr[l] + arr[r];
    if (sum === target) return [l, r];
    if (sum > target) r--;
    else l++;
  }
  return null;
}

// Example:
console.log(twoSumSorted([1, 2, 3, 4, 6, 8, 9], 10)); // [1, 5] -> 2 + 8

const newArray = [
  {
    name: "ali",
    age: 33,
  },
  {
    name: "reza",
    age: 24,
  },
];

const findAge = newArray.find((s) => s.age === 24);

if (findAge?.age) {
  findAge.age = 33;
}

console.log(findAge);

const person = { fname: "John", lname: "Doe", age: 25 };

let objText = "";
for (let x in person) {
  objText += x;
}

console.log(objText);

// for...in
// Object.keys(obj)
// Object.values(obj)
// Object.entries(obj)

const queryParams = {
  category: "laptop",
  brand: "asus",
  color: "",
  minPrice: 1000,
  maxPrice: undefined,
};

const mongoFilter: Record<string, any> = {};

const user = { name: "Azoonex", role: "admin" };

console.log(Object.entries(user));

for (const [key, value] of Object.entries(user)) {
  console.log("key", key, "value", value);
}

const updateBody = {
  name: "گوشی سامسونگ",
  price: 25000000,
  role: "admin",
  discount: undefined,
};

const allowedFields = ["name", "price", "description", "stock"];
const safeUpdates: Record<string, any> = {};



for(const [key,value] of Object.entries(updateBody)){
  if(allowedFields.includes(key) && !!value){
    safeUpdates[key] = value
  }
}

// query string shipping

const paymentParams = {
  merchant_id: '*******',
  amount: 500000,
  callback_url: 'https://myshop.com/verify',
  description: 'خرید سفارش #104'
};


const queryString = Object.entries(paymentParams).map(([key,value],index)=> {
  return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
}).join("&")

console.log(queryString)