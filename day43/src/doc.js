// let object = {test :1}
// console.log(object["test"])
function findUniqueNumber(arr) {
    var count = arr.reduce(function (acc, num) {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
    return Object.keys(count).find(function (key) { return count[key] === 1; });
}
var numbers = [5, 5, 10];
console.log(findUniqueNumber(numbers));
