var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
var product = numbers.reduce(function (accumulator, currentValue) {
    return accumulator * currentValue;
});
var maxNumber = numbers.reduce(function (accumulator, currentValue) {
    return Math.max(accumulator, currentValue);
});
var word = ["tehran", "shiraz"];
var newWorld = word.reduce(function (accumulator, currentValue) {
    return accumulator + "+" + currentValue;
});
console.log(newWorld);
