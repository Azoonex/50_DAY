// Write a JavaScript program to add two positive integers without carrying.
// this work the 2 positive
function addPositive(n1, n2) {
    var result = 0;
    var x = 1;
    while (n1 > 0 && n2 > 0) {
        result += x * ((n1 + n2) % 10);
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
        x *= 10;
    }
    return result;
}
// console.log(addPositive(113,123))
// Write a JavaScript program to find the longest string from a given array of strings. 83
function findeLongest(array) {
    var max = array[0].length;
    array.map(function (i) { return max = Math.max(max, i.length); });
    var result = array.filter(function (i) { return i.length == max; });
    return result;
}
console.log(findeLongest(["22", "sdklfjksdjf", "22"]));
// solve the soluation 83 prefecte
