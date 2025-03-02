var value = [1, 2, 3, 41, 2, 14, 10];
var newValue = value.map(function (i) { return i; });
var circle = 1 /* Size.sm */;
console.log(circle);
var action = {
    drag: function () { },
    resize: function () { },
};
// nullish coalescing operator
var speed = null;
var ride = {
    ride: speed !== null && speed !== void 0 ? speed : 30,
};
function checkNumber(link) {
    if (link !== undefined)
        return 33;
    return 0;
}
var input = document.getElementById("input");
// unknown type unknown unknown unknown unknown unknown types
function checkDocument(document) {
    if (typeof document === "string") {
        return document.length;
    }
    return "Hold";
}
