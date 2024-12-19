function checkEquleArray(arr, arr2) {
    var checkEqule = [];
    var i = 0;
    if (arr.length == arr2.length) {
        do {
            if (arr[i] === arr2[i]) {
                checkEqule.push(true);
            }
            else {
                checkEqule.push(false);
            }
            i += 1;
        } while (i < arr.length);
    }
    else {
        return "Agrument not Equle length !";
    }
    var result = checkEqule.filter(function (i) { return !!i; });
    if (result.length) {
        return ['fix this'];
    }
}
checkEquleArray([1, 2, 41], [1, 2, 4]);
