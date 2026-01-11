console.log("make item");

function Component(constructor: Function) {
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
function Component2(value: number) {
  return function (constructor: Function) {
    console.log("Constructor");
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.options = value;
  };
}

function Pipe(constructor: Function) {
  console.log("Pipe");
  constructor.prototype.pip = true;
}

// @Component2(1)
// @Pipe

// Symbols


const score = [50, 39, 0, 1, 32, 40];

for (let i = 0; i < score.length; i++) {
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

const grade: string = "";

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

let htmlLink = ``;
const personName = ["mike", "Allen", "Jon", "Ali"];

personName.forEach(handleMergeHtmlLink);

function handleMergeHtmlLink(value: string, index: number) {
  htmlLink += `${value} + ${index} / `;
}
console.log(htmlLink);

const newNamePerson = personName.sort();
const newScore = score.sort();
console.log(newNamePerson, newScore);

// score.sort((a, b) => b - a);
score.sort()
score.reverse()

console.log(score);

const area = 7.55

console.log(Math.round(area));
console.log(Math.floor(area))
console.log(Math.ceil(area));
console.log(Math.trunc(area))

const random = Math.random();

console.log(random)
console.log(Math.round(random * 100))
console.log()

const result = score.reduce((acc,curr)=>{
  if(curr > 30){
    acc++
  }
  return acc;
},0 )

const listPlayer = [
  {name :"Elham",score:30},
    {name : "Jon",score:30},
    {name : "Ali",score:30},
    {name : "Jon",score:30},
    {name : "Ali",score:30},
    {name : "Jon",score:30},
    {name : "Elham",score:70},
]

const scoreElham = listPlayer.reduce((acc,cur)=>{
  if(cur.name === "Elham"){
    acc += cur.score
  }
  return acc;
},0);

console.log(`Score Elham: ${scoreElham}`);