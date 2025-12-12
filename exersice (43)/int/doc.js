// Remove duplicate values from js array
// that may or may not contain duplicates
// let names = ["mike","mike","mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
var person = {
    name: "John",
    age: 29
};
// brake notation
person["name"] = "amir";
console.log(person);
// Increment
// Arithmetic / Arithmetic / Arithmetic / assignment / comparison / comparison / comparison
var x = 10;
x %= 6;
console.log(x++);
// strict Equality (type + value) === / Lose Equality ==
// Logical operator
// falsy (false) => undefined / null / 0 / false / '' / NaN
// Anything that is not falsy => truthy
// const userColor = undefined;
// const defaultColor = undefined
// Read / Write / Execute
// operators precedence
// swap value
var a = "red";
var b = "blue";
b = a;
a = b;
console.log(a);
// english
// ATTic / Basement / garage /
//Attic / Basement /
// 6 / 12 good morning
// 24 / 16 / good afternoon
var hour = 4;
if (hour >= 6 && hour < 12) {
    console.log('good morning');
}
else if (hour > 16 && hour < 23) {
    console.log('good afternoon');
}
else {
    console.log('good everything');
}
// for loop
// for(let i = 0; i < 5; i++){
//     console.log(`hello number ${i}`)
// }
var i = 20;
// while(i < 6){
//     console.log(`hello number while ${i}`)
//     i++
// }
// do while
do {
    console.log("hello number while ".concat(i));
    i++;
} while (i <= 4);
while (hour < 12) {
    console.log("hello number while ".concat(hour));
    hour += 1;
}
// for in loop
var aboutPerson = {
    name: "John",
    age: 29,
    status: "pending",
    skill: "admin"
};
// bracket notation
for (var key in aboutPerson) {
    console.log(key, aboutPerson[key]);
}
// for in loop for Abject
// for of loop for Array
function maxNumber(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return a > b ? a : b;
    }
    return "this is invalid";
}
console.log(maxNumber(5, 33));
function isLandscape(width, height) {
    return (width > height);
}
console.log(isLandscape(22, 33));
function carSpeed(speed) {
    var speedLimit = 70;
    var point = null;
    if (speed <= speedLimit) {
        return "ok";
    }
    else {
        point = (speed - speedLimit) / 5;
    }
    if (point > 12) {
        return "this suspended";
    }
    return point;
}
console.log(carSpeed(100));
function showNumber(num) {
    for (var i_1 = 0; i_1 < num; i_1++) {
        var mes = (i_1 % 2 === 0) ? "Even" : "Odd";
        console.log(i_1 + "-" + mes);
    }
}
showNumber(10);
function countTruthy(num) {
    var truthyCount = null;
    for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
        var value = num_1[_i];
        value && ++truthyCount;
    }
    return truthyCount;
}
console.log(countTruthy([null, "", false, 1, 2, 31, 1, 31]));
var movie = {
    title: "game",
    dateCreate: 2002,
    rating: 5,
    director: "b"
};
function showProperty(obj, _a) {
    for (var key in obj) {
        if (typeof obj[key] === "string")
            return key + obj[key];
    }
}
showProperty(movie);
function sum(num) {
    var sum = 0;
    for (var i_2 = 0; i_2 < num; i_2++)
        if (i_2 % 3 === 0 || i_2 % 5 === 0)
            sum++;
    return sum;
}
console.log(sum(10));
function calculateAverage(arr) {
    var sum = 0;
    var findalScor = null;
    if (arr.length !== 0) {
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var value = arr_1[_i];
            sum += value;
        }
        findalScor = sum / arr.length;
    }
    if (findalScor >= 59) {
        return "F";
    }
    else if (findalScor >= 60 && findalScor <= 69) {
        return "D";
    }
    else if (findalScor >= 70 && findalScor <= 79) {
        return "C";
    }
    else if (findalScor >= 80 && findalScor <= 89) {
        return "B";
    }
    else if (findalScor >= 90 && findalScor <= 100) {
        return "A";
    }
}
console.log("the average sum " + calculateAverage([80, 80, 80, 80]));
function showStar(star) {
    var stars = 0;
    for (var i_3 = 0; i_3 < star; i_3++) {
        ++stars;
        console.log(stars);
    }
}
showStar(2);
function factorize(num) {
    for (var factor = 2; factor < num; i++) {
        var isPrime = true;
        if (number % 2 === 0) {
            isPrime = false;
            break;
        }
        if (isPrime)
            console.log(number);
    }
}
function showPrimes(limit) {
    for (var number = 2; i < limit; i++)
        factorize(number);
}
showPrimes(5);
// factorize
