var _a;
var Person = /** @class */ (function () {
    function Person(key, value) {
        this.key = key;
        this.value = value;
    }
    Person.ArrayUtils = function (value) {
        return [value];
    };
    return Person;
}());
var newPerson = new Person("quantity", 22);
function fetching(url) {
    if (url == "all") {
        return { data: null, error: null };
    }
    return { data: null, error: null };
}
var allData = fetching("url");
(_a = allData.data) === null || _a === void 0 ? void 0 : _a.title;
// limit generic type
function create(size) {
    return size;
}
var createCircle = create("32");
// lesson 63 inherit class
// exercise 63
// keyof
// exercise 64
