function twoSumSorted(arr: number[], target: number): [number, number] | null {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    console.log('l=', l,"r=",r)
    const sum = arr[l] + arr[r];
    if (sum === target) return [l, r];
    if (sum > target) r--;
    else l++;
  }
  return null;
}

// Example:
console.log(twoSumSorted([1, 2, 3, 4, 6, 8, 9], 10)); // [1, 5] -> 2 + 8
