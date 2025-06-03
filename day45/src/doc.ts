function find_missingNumber(arr: number[]): number {
  if (!arr.length) return 1;

  let n = arr.length + 1;
  let expectedSum = (n * (n + 1)) / 2;

  let actualSum = arr.reduce((acc, current) => acc + current, 0);
  console.log(actualSum, expectedSum);
  return expectedSum - actualSum;
}

// example missing alpha
// function findMissing_Alpha(arr: string[]): string[] | string {
//   if (!arr.length) return "String is Empty";
//   const allAlphabets = "abcdefghijklmnopqrstuvwxyz";
//   let findMissing = allAlphabets.indexOf(arr[0]);

//   for (let i = 0; i < arr.length; i++) {
//     const checkAlpa =
//   }
//   return findMissing;
// }

// console.log(findMissing_Alpha(["a", "b", "d", "e"])); // ["c"]

// format Phone number

function formatPhoneNumber(phoneNumber: Array<number>): string {
  if (!phoneNumber.length) {
    return "Phone  Number is Invalid";
  }

  const startCodeNumber = phoneNumber.slice(0, 3).join("");
  const middleCodeNumber = phoneNumber
    .slice(startCodeNumber.length, startCodeNumber.length + 3)
    .join("");
  const lastCodeNumber = phoneNumber.slice(-3).join("");

  return phoneNumber.length === 8
    ? `(${startCodeNumber}) ${middleCodeNumber}-${lastCodeNumber}`
    : "Value is not valid";
}

console.log(formatPhoneNumber([1, 3, 5, 1, 3, 1, 3, 2]));
