console.log('reza');
var array = [3, 2, 1];
function changePosition(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        var temp = arr[i];
        console.log(temp);
    }
}
changePosition(array);
