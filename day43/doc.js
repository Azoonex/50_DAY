// const obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0};
// const toNumericPairs = input => {
//   const entries = Object.entries(obj);
//   entries.forEach(entry => entry[0] = +entry[0]);
//   return entries;
// }
// console.log(toNumericPairs(obj));
// const value = Object.assign({},['z','t','m'])
// console.log(value)
// function findCommon(arr1:Array<number>,arr2:Array<number>) {
//     for(arr1)
// }
// solution 101
function check_uppercase_lowerCase(str) {
    var hasOnlyLetters = !!str.match(/^[a-z]*$/i);
    var findUpperCaseTrue = [];
    var matches = str.match(/[A-Z]/g);
    if (hasOnlyLetters) {
        matches &&
            matches.length > 0 &&
            matches.map(function (item) {
                for (var x = 0; x < item.length; x++) {
                    var findStartLetter = str.indexOf(item) + 1;
                    var findEndLetter = str.indexOf(item) - 1;
                    if (isLowerCase(str.split("")[findStartLetter]) &&
                        isLowerCase(str.split("")[findEndLetter])) {
                        findUpperCaseTrue.push(true);
                    }
                    else {
                        findUpperCaseTrue.push(false);
                    }
                }
            });
    }
    else {
        throw new Error("Checked the text latin format");
    }
    return findUpperCaseTrue;
}
console.log(check_uppercase_lowerCase("avJaScript"));
function isLowerCase(str) {
    if (str) {
        return str === str.toLowerCase() && str !== str.toUpperCase();
    }
}
