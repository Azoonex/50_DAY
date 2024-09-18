function content(xs, u) {
    return Object.assign(xs, u);
}
var mergeObject = content({
    name: "mmade",
    hibbites: "male",
}, {
    age: 33,
});
function cehckEndString(str) {
    if (str.substring(str.length - 6, str.length) === "Script") {
        return true;
    }
    return false;
    // 7 - 6 1,7
}
console.log(cehckEndString("amirabas"));
// solve the new solution 65
function checknameCity(str) {
    if (str.length <= 3)
        return false;
    else if (str.substring(0, 3) === "Los" || str.substring(0, 3) === "Now") {
        return true;
    }
    return false;
}
console.log(checknameCity("Now"));
// solve the solution 66
function checkP(str) {
    if (str.length <= 1)
        return false;
    var firstcharacter = str.substr(0, 1);
    var lastCharacter = str.substr(str.length - 1);
    if (firstcharacter === "p" || lastCharacter === "p")
        return true;
    return str;
}
console.log(checkP("php"));
// solve the solution 67
function newString(str, n) {
    var first = str.substring(0, n);
    var last = str.substring(str.length - n);
    return first + last;
}
console.log(newString('amirabas', 2));
// solve the soluation 67 compute compute compute compute compute compute computes
function compute(arr) {
    var sum = 0;
    // for(let i =0;i < arr.length ; i++ ){
    //     sum += arr[i]
    // }
    // arr.forEach(i => {
    //     sum += i
    // })
    sum = arr.reduce(function (x, y) {
        return x + y;
    }, 0);
    return sum;
}
console.log(compute([33, 44, 55]));
