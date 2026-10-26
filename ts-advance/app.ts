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

console.log(findMedianSortedArrays([1, 2, 3, 65, 3, 4, 6], [7,8,9]));

// skip
