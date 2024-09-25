// function content<T, U>(xs: T, u: U) {
//     return Object.assign(xs, u);
// }
function checkInteger(arr) {
    if (arr.length < 2)
        return false;
    var check = arr.includes(1 || 3);
    return check;
}
console.log(checkInteger([1, 2, 0, 5, 6, 7, 4]));
// solve the solution 79
