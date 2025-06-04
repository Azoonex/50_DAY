function find_missingNumber(arr) {
    if (!arr.length)
        return 1;
    var n = arr.length + 1;
    var expectedSum = (n * (n + 1)) / 2;
    var actualSum = arr.reduce(function (acc, current) { return acc + current; }, 0);
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
function formatPhoneNumber(phoneNumber) {
    if (!phoneNumber.length) {
        return "Phone  Number is Invalid";
    }
    var startCodeNumber = phoneNumber.slice(0, 3).join("");
    var middleCodeNumber = phoneNumber
        .slice(startCodeNumber.length, startCodeNumber.length + 3)
        .join("");
    var lastCodeNumber = phoneNumber.slice(-3).join("");
    return phoneNumber.length === 8
        ? "(".concat(startCodeNumber, ") ").concat(middleCodeNumber, "-").concat(lastCodeNumber)
        : "Value is not valid";
}
console.log(formatPhoneNumber([1, 3, 5, 1, 3, 1, 3, 2]));
// ValidateEmail
function validateEmail(email) {
    var _a = email.split(","), localPart = _a[0], domin = _a[1];
    console.log(localPart, domin);
    if (email.lastIndexOf("@") !== -1 && email.lastIndexOf(".") !== -1)
        return true;
    return false;
}
console.log(validateEmail("create react app@."));
var items = [
    {
        id: 1,
        name: "age",
    },
    {
        id: 2,
        name: "ali",
    },
];
var person1 = items[0], person2 = items[1];
console.log(person1, person2);
