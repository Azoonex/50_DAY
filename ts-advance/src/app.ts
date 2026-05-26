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
    isCheckEqual =  argMap.get(value) ?? false 
  });

  return Boolean(isCheckEqual);
}

console.log(argAnagrams("ppale","apple"))
