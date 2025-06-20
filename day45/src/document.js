function countDown(num) {
    if (num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
function sumUpTo(n) {
    if (n === 1)
        return 1;
    // console.log(n + sumUpTo(n - 1))
    return n + sumUpTo(n - 1);
}
console.log(sumUpTo(3));
function reverseString(str) {
    var method = [];
    // method one
    var stringToArray = str.split("");
    method[0] = stringToArray.reverse();
    // method two
}
function reverseString2(str) {
    if (str == "")
        return "";
    return reverseString2(str.substr(1)) + str.charAt(0);
}
reverseString2("str");
