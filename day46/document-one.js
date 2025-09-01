var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var person = {
    ali: {
        status: function () { return false; },
        age: 22,
        work: "clear",
    },
    amir: {
        status: function () { return true; },
        age: 25,
        work: "devops",
    },
    jamal: {
        status: function () { return true; },
        age: 35,
        work: "fluter",
    },
};
var statusDoer = [];
for (var _c = 0, _d = Object.entries(person); _c < _d.length; _c++) {
    var _e = _d[_c], key = _e[0], value = _e[1];
    if (value.status()) {
        var newObject = {};
        newObject = __assign({ name: key }, value);
        statusDoer.push(newObject);
    }
}
var b = new Map([
    [1, "one"],
    [2, "two"],
    [4, "four"],
]);
var setValue = new Set();
setValue.add("app");
setValue.add("vehicle");
setValue.add("Trucks");
console.log("setValue", b.);
