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
// solve the solution 36
