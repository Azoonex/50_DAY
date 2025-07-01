function countDown(num) {
    if (num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
function sumUpTo(n) {
    if (n === 1)
        return 1;
    // console.log(n + sumUpTo(n - 1))
    return n + sumUpTo(n - 1);
}
// console.log(sumUpTo(3));
function reverseString(str) {
    var method = [];
    // method one
    var stringToArray = str.split("");
    method[0] = stringToArray.reverse();
    // method two
}
function reverseString2(str) {
    if (str == "")
        return "";
    return reverseString2(str.substr(1)) + str.charAt(0);
}
// reverseString2("str");
function pageNation(size) {
    var array = [];
    var current_page = 3;
    for (var x = 0; x < size; x++) {
        var firstSize = x <= 2;
        var centerSize = size / current_page;
        if (firstSize) {
            array.push(x);
        }
        else if (current_page - 3 && x == 4) {
            array.push("...");
        }
    }
    return array;
}
// console.log(pageNation(30));
// else if (size === x + 1) {
//       array.push(x, x + 1);
//     }
function fibonacci(num) {
    if (num < 2) {
        return num;
    }
    // 6 - 1 5 + 4
    //
    return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(6));
function factorial(num) {
    if (num < 2)
        return 1;
    var value = [];
    if (num !== 0) {
        factorial(num - 1);
        value.push(factorial(num - 1));
    }
    return value;
}
// console.log(factorial(22));
// breadCrumb logic home>login>...>make
var asPath = [{ name: "auth" }, { name: "admin" }, { name: "login" }];
var breadCrumb = "";
for (var x in asPath) {
    if (Number(x) !== asPath.length) {
        breadCrumb += asPath[x] + ">";
        console.log(breadCrumb += asPath[x] + ">");
    }
    ;
    console.log(asPath[x].name);
}
console.log(breadCrumb);
