function strictly(arr: Array<number>) {
  // check increasing and decreasing

  if (arr.length === 1) {
    return true;
  }

  let arr_direction = arr[1] - arr[0];

  for (let x = 0; x < arr.length; x++) {
    if (arr_direction * (arr[x + 1] - arr[x]) <= 0) {
      return false
    }
  }

  return true;
}

console.log(strictly([2, 34, 1, 3, 1, 31, 1,2,3]));
