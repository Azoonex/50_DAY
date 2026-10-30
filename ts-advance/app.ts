function palindromeNum(x: number): Boolean {
  console.log(x);
  if (typeof x === "undefined") return false;

  const toString = x.toString().split("").reverse().join("");

  return Number(toString) === x;
}

const resultPalindrome = palindromeNum(0);
console.log(resultPalindrome);

// Median of Two Sorted Arrays

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

function findMedianSortedArrays(nums1: number[], nums2: number[]) {
  const integrate = nums1.concat(nums2);
  console.log(integrate);

  integrate.sort();

  const middle = Math.max(integrate.length / 2).toFixed();

  return integrate[Number(middle) - 1];
}

// console.log(findMedianSortedArrays([1, 2, 3, 65, 3, 4, 6], [7,8,9]));

// skip

// Zigzag Conversion

function convert(s: string, numRows: number) {
  if (numRows == 1 || s.length <= numRows) return s;
  let currentRow = 0;
  let goingDown = false;
  const rows: string[] = new Array(numRows).fill("");

  console.log(rows);

  for (const char of s) {
    rows[currentRow] += char;
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }

    currentRow += goingDown ? 1 : -1;
  }
  return rows.join("");
}

console.log(convert("PAYPALISHIRING", 3));

function twoSum(array: number[], target: number) {
  let mapOfNumbers: Record<string, number> = {};
  let twoIndexes = [];
  for (let i = 0; i < array.length; i++) {
    mapOfNumbers[array[i]] = i;
  }

  console.log(mapOfNumbers);

  for (let i = 0; i < array.length; i++) {
    let goal = target - array[i];
    console.log("goal", goal);
    if (mapOfNumbers[target] !== null && mapOfNumbers[target] !== i) {
      twoIndexes.push(i);
      twoIndexes.push(mapOfNumbers[target]);
    }
  }
  return twoIndexes;
}
console.log(twoSum([5, 3, 5, 8], 13));

// console.log(Math.sign(-4))
// console.log(Math.sign(0))
// console.log(Math.sign(4))
// console.log(Math.pow(8,2))

function twoPointers(nums: number[], target: number) {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    console.log(complement);
    console.log(map);
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }
  return Array.from(map).map((v) => v);
}

let nums = [3, 2, 4];
let target = 6;

console.log("two sum", twoPointers(nums, target));

class Solution {
  hasDuplicate(nums: number[]) {
    const map = new Map();
    for (let key of nums) {
      if (!map.has(key)) {
        map.set(key, key);
      } else {
        return false;
      }
    }
    return true;
  }
  groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();

    for (const word of strs) {
      const key = word.split("").sort().join("");

      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key)!.push(word);
    }

    const result: string[][] = [];
    for (const group of map.values()) {
      result.push(group.sort());
    }

    return result.sort((a, b) => a[0].localeCompare(b[0]));
  }
}
const solution = new Solution();
console.log(solution.hasDuplicate([1, 2, 3, 4, 5, 1, 2]));
console.log(
  solution.groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]),
);
