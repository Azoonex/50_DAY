// Exercise-119 with Solution
function checkOf_digit(num) {
    var arr_num = num.toString().split("");
    for (var x = 0; arr_num.length > 0; x++) {
        if (parseInt(arr_num[x]) >= parseInt(arr_num[x + 1])) {
            return false;
        }
    }
    return true;
}
console.log(checkOf_digit(1235));
