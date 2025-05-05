function find_missingNumber(arr) {
    if (!arr.length)
        return 1;
    var n = arr.length + 1;
    var expectedSum = (n * (n + 1)) / 2;
    console.log(arr);
    var actualSum = arr.reduce(function (acc, current) { return acc + current; }, 0);
    console.log(actualSum, expectedSum);
    return expectedSum - actualSum;
}
console.log();
find_missingNumber([1, 2, 3, 5]);
