// JavaScript Basic: Exercise-113 with Solution
function sumN(num) {
    var num_s = 0;
    while (num > 0) {
        num_s += num;
        num = Math.floor(num / 2);
    }
    return num_s;
}
function CorrectSentence(str) {
    if (str.indexOf(".") !== -1 || str === str.toLowerCase()) {
        return true;
    }
    return false;
}
console.log(CorrectSentence("hello worlD"));
