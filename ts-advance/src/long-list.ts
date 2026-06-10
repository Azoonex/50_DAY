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

function findDifference<arrayT>(array: arrayT[]) {
  const difference: string | number;
  const 

  for(const key of array){
    
  }
}
findDifference(["d"]);
