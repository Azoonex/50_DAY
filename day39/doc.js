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
console.log(addPositive(113, 123));
// solve this
