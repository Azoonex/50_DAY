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
var symbols = Symbol("11");
console.log(symbols);
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
