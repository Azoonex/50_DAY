var Size;
(function (Size) {
    Size["small"] = "sm";
    Size["medium"] = "md";
    Size["large"] = "lg";
})(Size || (Size = {}));
var newSize = Size.medium;
console.log(newSize);
function checkNumber(num, options) {
    if (options === void 0) { options = "amirabas"; }
    if (num) {
        return "amirabas";
    }
    if (num === undefined) {
        return options;
    }
    return "default value";
}
checkNumber(22);
function proccedItems(item) {
    if (typeof item === "string") {
        console.log("amir reza");
        return 1;
    }
    if (typeof item === "number") {
        console.log("amirabas");
        return 2;
    }
    return 2;
}
// type whide = {
//     uiSize: () => void
// }
// type hight = {
//     uxSize: () => void
// }
// let fun: whide & hight = {
//     uiSize(){
//     },
//     uxSize() {
//     },
// }
// let human : 20 | 30 = 30
// data types
var wrold = "we'll cover them in general and in the next chapter we'll talk about  each of them in detial";
//Number
var n = 111;
console.log("names" / 2);
var names = "john";
console.log("hello ".concat(names, " !"));
var ali = "22";
("object type not work to do that we can use the if statement and the ");
("the if () statement evaluates the expressions int he parentess ad converts the result tot a boolean ");
if (2233) {
    console.log("not found");
}
else if (2 > 1) {
    console.log('mmade');
}
else {
    console.log('not found');
}
var result = (22 > 33) ? console.log('value 1') : console.log("value 2");
var mes = (22 > 33) ? "hello man" : (33 < 22) ? "hello boy" : 22 > 33 ? "hello new" : "hello";
var api = ['data', 'items', 'caractrer', 1, 2, 3, 4, 1, 44, 66, 55, 5, 6, 7, 8];
var resposve = api.find(function (i) { return i === 'data'; });
var res2 = api.find(function (i) {
    if (i === 'amir') {
        return '1';
    }
    else {
        return '-1';
    }
});
var res3 = api.filter(function (i) { return i > 0; });
var setApi = new Set(api);
console.log(resposve, res2, res3);
console.log(setApi);
var items = api.entries();
console.log(items);
