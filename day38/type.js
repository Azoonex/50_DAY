function content(xs, u) {
    return Object.assign(xs, u);
}
var mergeObject = content({
    name: "mmade",
    hibbites: "male"
}, {
    age: 33
});
function cehckEndString(str) {
    if (str.length <= 6)
        return false;
    var Scr = "Script";
    return str.slice(-6) === Scr;
}
console.log(cehckEndString("javaScript"));
// solve the new solution 65
