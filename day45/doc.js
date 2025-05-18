function find_missingNumber(arr) {
    if (!arr.length)
        return 1;
    var n = arr.length + 1;
    var expectedSum = (n * (n + 1)) / 2;
    console.log(arr);
    var actualSum = arr.reduce(function (acc, current) { return acc + current; }, 0);
    console.log(actualSum, expectedSum);
    function findMissingAlpha(arr) {
        var allAlpha = "abcdefghijklmnopqrstuywxyz";
        var findIndexAlpha = allAlpha.indexOf(arr[0]);
        var missingAlpha = [];
        for (var i = 0; i < arr.length; i++) {
            findIndexAlpha += 1;
            console.log(findIndexAlpha);
            if (allAlpha[findIndexAlpha + 1] !== arr[i]) {
                missingAlpha.push(allAlpha[findIndexAlpha + 1]);
            }
        }
        return missingAlpha;
    }
    console.log(findMissingAlpha(["a", "b", "c", "d"]));
}
