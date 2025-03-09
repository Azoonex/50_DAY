// function sort array for digit
function lenghtSortArray(array) {
    var sortDigit = [];
    for (var x = 0; array.length > x; x++) {
        if (array[x + 1]) {
            var sort = [array[(array[0], x + 1)]];
            sortDigit.push(sort);
        }
    }
    return sortDigit.length;
}
console.log(lenghtSortArray([1, 2, 4, 5, 7, 81]));
function twoGiven(arr1, arr2) {
    var vectors = [0];
    // for(let value of arr1 ){
    //     vectors.push(arr1[])
    // }
    arr1.reduce(function (_, current, index) {
        if (current && index) {
            vectors.push(arr1[index] + arr2[index]);
        }
    });
    var sumArray = 0;
    if (vectors.length) {
        sumArray = vectors.reduce(function (a, s) {
            return a += s;
        }, 0);
    }
    console.log(sumArray);
}
twoGiven([1, 3, 14, 1, 4], [2, 1, 41, 4, 1]);
