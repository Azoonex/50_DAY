"There was a who was so who was so lazy,he couldn't  even other bother to change his clothes one da he saw that the apple tree in their yar was full of fruits he wanted to eat some applesbut he was too lazy so he lay downunderneath so he lay so he lay down underneath underneath waited waited for the fruitls to fall off reza waited and waited until he was very hungry but the apples never fell laziness can get you nowhere laziness can get you nowhere if you want somtething ";

// solution 5 exrcise exerciese

// const demoTage = document.getElementById("demo") as HTMLElement;

// function animate_string(elemetn: HTMLElement): void {
//     let textNode = demoTage.childNodes[0] as Text;
//     let text = textNode.data;

//     setInterval(function () {
//         text = text[text.length - 1] + text.substring(0, text.length - 1);
//         textNode.data = text;
//     }, 100);
// }
// if(demoTage){
//     animate_string(demoTage)
// }

// 6 : Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

// lightweight lightweight lanuage language language inside provide provide programmatic approach

// to check if the 1st january of a year is a sunday we can use the date obect js create a date object for the 1 set january of each year and

// for(let year = 2014 ; year <= 2050;year++){
//     let d = new Date(year,0,1)

//     if(d.getDay() === 0){
//         console.log('1set january is beging a sunday ' + year)
//     }
// }

// glowchart soluation 8

// let num = Math.ceil(Math.random() * 10);
// // let sum = math.ceil(math.radom() * 10)
// let progmet = 10

// if(num === progmet){
//     console.log('this nice work!')
// } else{
//     console.log('not matched ,the number was' + num);
// }
// remain . kill . reach . remain . cut . fall . stay . build . build . expect . sende . die . serve . wait . serve . die . send . wait . buy . appear . consider . appear . buy . wait . love . remember . offer . win . walk . walk . open .grow . spend . add .allow . win . offer . remember . love consider . consider appear . but . read . speak create . stop . follow . watch understand . lead . change . learn set continue . incluse meet pay lose stand . sit . provide . write . bring . hold hold . believe . live . like happen . must . provide . sit .stand .lose .pay . live . like write . provide . sit . stand . lose . pay . meet include . continue . set . lean

let today = new Date();

var cmas = new Date(today.getFullYear(), 11, 25);

if (today.getMonth() === 11 && today.getDay() > 25) {
    cmas.setFullYear(cmas.getFullYear() + 1);
}

var one_day = 1000 * 60 * 60 * 24;

console.log(
    Math.ceil((cmas.getTime() - today.getTime()) / one_day) +
        " days left until Christmas!"
);

let filename = "sstem.php.token.base.createing.bonde";

console.log(filename.split("."));
let names = "search&search&items&city&specialty";

console.log(names.split("&"));

function difference(n: number) {
    if (n <= 13) {
        return 13 - n;
    } else {
        return (n - 13) * 2;
    }
}

console.log(difference(55));

// solation 15 create

function testhundred(num: number) {
    let news = Math.abs(100 - num) <= 20 || Math.abs(400 - num) <= 20;

    return news;
}

console.log(testhundred(5));
// compute to compute the sum of the two given integers if the two value are the same,then return triple their sum to triple
// same / triple / their / demonstrates / conditional / determine / whether / equal / perform / appropriate / compuation / compuation / accordingly / acoordingly

type Typesum = {
    numone: number;
    numtwo: number;
};

function sum({ numone, numtwo }: Typesum) {
    if (numone === numtwo) {
        return 3 * (numone + numtwo);
    } else {
        return numone + numtwo;
    }
}

console.log(
    sum({
        numone: 22,
        numtwo: 22,
    })
);

// algorithm solatiion 16
// () function sum
// <> x === y
// [] return 3 * (x + y)
// [] return (x + y)
// END

// solation 17
// compute the absolute difference between a specified number and 19
// specified / approprate / compution

function computeSum(num: number) {
    if (num <= 19) {
        return 19 - num;
    } else {
        return (num - 19) * 3;
    }
}

console.log(computeSum(17));
// algorithm
// () funciton computesum
// <> n < 19 ?
// []  reutnr 19 -n 
// []  return n -19 * 3
// END
