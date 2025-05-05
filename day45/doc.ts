function find_missingNumber(arr: number[]): number {
  if (!arr.length) return 1;

  let n = arr.length + 1;
  let expectedSum = (n * (n + 1)) / 2;

  console.log(arr)

  let actualSum = arr.reduce((acc, current) => acc + current, 0);


  console.log(actualSum,expectedSum)

  return expectedSum - actualSum;
}

console.log();

find_missingNumber([1, 2, 3, 5])