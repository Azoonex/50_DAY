// function content<T, U>(xs: T, u: U) {
//     return Object.assign(xs, u);
// }
function findLarge_small(arr) {
    var first = arr[0];
    var last = arr[arr.length - 1];
    if (first > last) {
        return Array.from({ length: 3 }).map(function (i, index) {
            if (i === void 0) { i = first; }
            return [i];
        }).flat();
    }
    else if (first < last) {
        return Array.from({ length: 3 }).map(function (i, index) {
            if (i === void 0) { i = last; }
            return [i];
        }).flat();
    }
}
console.log(findLarge_small([2, 2, 4, 5, 6, 7, 83, 3, 85]));
// solve the new solution 74
