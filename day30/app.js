// function error (mes:string):never {
//     throw new Error(mes);
// }
// function fall () {
//     return error("smothing failed")
// }
// fall()
var myArray = [3, 0, 2];
var myArray2 = [3, 0, 2];
var myArray3 = [3, 'amirabas'];
myArray.some(function (res) {
    return res === 3;
});
