function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let maxLen = 0;

  const set = new Set<string>();

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
console.log("first", lengthOfLongestSubstring("pwwkew"));

const newArray = new Array(0, 1, 3, 2).concat(203, [2]);

console.log("new array", newArray);

// Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

function findDifference<arrayT>(array: arrayT[], array2: arrayT[]) {
  const differenceMap = new Set();

  for (const key of array) {
    if (array2.includes(key)) {
      differenceMap.add(key);
    }
  }

  console.log(Array.from(differenceMap));
  return differenceMap;
}
findDifference(["d", "m", "d", "b"], ["b", "j", "t"]);


function differenceBy<arrayT,targetT> (arr:arrayT[],arr2:arrayT[],target:targetT){
  const differenceMap:arrayT[] = new Map();

  for(const item of arr){
    if(arr2.includes(item) === target){
      differenceMap.set(item)
    }
  }
}