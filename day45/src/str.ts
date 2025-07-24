let strNew = new String("Hello StringNew");
let str = "        hello string    ";
// valueOf
console.log(strNew.valueOf());

// trim /  trimStart / trimEnd

console.log(str.trimEnd());

const strings = [
  // Lone leading surrogate
  "ab\uD800",
  "ab\uD800c",
  // Lone trailing surrogate
  "\uDFFFab",
  "c\uDFFFab",
  // Well-formed
  "abc",
  "ab\uD83D\uDE04c",
];

for (let str of strings) {
  console.log(str);
}

