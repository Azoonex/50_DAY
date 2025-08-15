var car = { make: "toyota", model: "camry", year: 2020 };
delete car.make;
console.log(car);
// object.keys() => return enumerable قابل شمارهش
for (var key in car) {
    console.log("".concat(key, " | ").concat(car[key]));
}
var book = {
    title: "JavaScript Guide",
    author: "John Doe",
    pages: 350,
};
var entries = Object.entries(book);
console.log("tttttttttttttt", entries[0][0]);
for (var _i = 0, _a = Object.entries(book); _i < _a.length; _i++) {
    var _b = _a[_i], key = _b[0], value = _b[1];
    console.log("".concat(key, ": ").concat(value));
}
Object.entries(book).forEach(function (_a) {
    var key = _a[0], value = _a[1];
    if (typeof value === "string") {
        console.log("".concat(key, " has ").concat(value.length, " characters"));
    }
});
var bookMap = new Map(Object.entries(book));
console.log(bookMap.values());
// new map key as everything type boolean and string number everything
var initializedMap = new Map([
    ["key1", "value1"],
    ["text", "value2"],
]);
console.log(initializedMap.values());
