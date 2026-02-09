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

let objString = ""
for(let val in obj){
 objString += !objString ? obj[val] : " " + obj[val]
}

console.log(objString.split(" ").reverse().join(" "))
