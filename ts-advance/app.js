console.log("make item");
function Component(constructor) {
    console.log("constructor");
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertToDom = function () {
        console.log("Insert to Dom in the Dom");
    };
}
// to way smilier
// class Component {
//
// }
// extends Component
// Decorator factor
function Component2(value) {
    return function (constructor) {
        console.log("Constructor");
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.options = value;
    };
}
function Pipe(constructor) {
    console.log("Pipe");
    constructor.prototype.pip = true;
}
// @Component2(1)
// @Pipe
// Symbols
var score = [50, 39, 0, 1, 32, 40];
for (var i = 0; i < score.length; i++) {
    if (score[i] === 0) {
        console.log("I find you", score[i]);
        continue;
    }
    //   if (score[i] === 39) {
    //     console.log("Final score", score[i]);
    //     break;
    //   }
    console.log(score[i]);
}
var grade = "";
switch (grade) {
    case "A":
        console.log(100);
        break;
    case "B":
        console.log("Good");
        break;
    default:
        console.log("Very bad");
}
var htmlLink = "";
var personName = ["mike", "Allen", "Jon", "Ali"];
personName.forEach(handleMergeHtmlLink);
function handleMergeHtmlLink(value, index) {
    htmlLink += "".concat(value, " + ").concat(index, " / ");
}
console.log(htmlLink);
var newNamePerson = personName.sort();
var newScore = score.sort();
console.log(newNamePerson, newScore);
// score.sort((a, b) => b - a);
score.sort();
score.reverse();
console.log(score);
var area = 7.55;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));
var random = Math.random();
console.log(random);
console.log(Math.round(random * 100));
console.log();
var result = score.reduce(function (acc, curr) {
    if (curr > 30) {
        acc++;
    }
    return acc;
}, 0);
var listPlayer = [
    { name: "Elham", score: 30 },
    { name: "Jon", score: 30 },
    { name: "Ali", score: 30 },
    { name: "Jon", score: 30 },
    { name: "Ali", score: 30 },
    { name: "Jon", score: 30 },
    { name: "Elham", score: 70 },
];
var scoreElham = listPlayer.reduce(function (acc, cur) {
    if (cur.name === "Elham") {
        acc += cur.score;
    }
    return acc;
}, 0);
console.log("Score Elham: ".concat(scoreElham));
// -----------------------------------------------
// Date and time
var now = new Date();
console.log();
console.log(now.getFullYear());
var before = new Date("February 1 2019 7:30:59");
console.log(before.getTime());
var diff = now.getTime() - before.getTime();
console.log(diff);
var mains = Math.round(diff / 100 / 60);
var hordes = Math.round(mains / 60);
var days = Math.round(hordes / 60);
var months = Math.round(days / 30);
var years = Math.round(months / 12);
console.log(mains, hordes, days, months, years);
