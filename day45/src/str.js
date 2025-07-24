var strNew = new String("Hello StringNew");
var str = "        hello string    ";
// valueOf
console.log(strNew.valueOf());
// trim /  trimStart / trimEnd
console.log(str.trimEnd());
var strings = [
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
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var str_1 = strings_1[_i];
    console.log(str_1);
}
