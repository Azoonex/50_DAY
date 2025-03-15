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
var students = ["Ali", "Reza", "Sara", "Ali", "Reza", "Ali"];
function repeat_Name(arr) {
    var all_student = null;
    if (arr.length > 0) {
        all_student = arr.reduce(function (acc, current) {
            acc[current] = (acc[current] || 0) + 1;
            return acc;
        }, {});
    }
    return all_student;
}
console.log(repeat_Name(students));
