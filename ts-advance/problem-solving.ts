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

// frequency Counter
function same(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  

}
