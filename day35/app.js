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
