// js determines the day of the week , and formats the current house

let today = new Date();

let day = today.getDay();

let daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

console.log("Today is:" + daylist[day] + ".");

let houre = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

let prepand = houre >= 12 ? " PM" : "Am";

if (houre === 0 && prepand === " PM") {
    if (minute === 0 && second === 0) {
        houre = 12;
        prepand = " Noon";
    } else {
        houre = 12;
        prepand = " PM";
    }
}

if (houre === 0 && prepand === " AM ") {
    if (minute === 0 && second === 0) {
        houre = 12;
        prepand = " midnight";
    } else {
        houre = 12;
        prepand = " AM ";
    }
}

console.log("Current Time:" + houre + prepand + ":" + minute + ":" + second);

// Explantions explanations Explanations Explanations Explantation

// js find the ara of a triangle where lenght of the three of its sides calculates calculats the ara of a triangle with sides

let side1 = 5;
let side2 = 6;
let side3 = 7;


let s = (side1 + side2 + side3 ) / 2;

let area = Math.sqrt(s * ((s-side1) * (s - side2) * (s - side3)))

console.log(area)

//JavaScript Basic: Exercise-4 with Solution program to find the area of a triangle 

const arr = [1,2,3,4,5];

for(let i = 0;i < arr.length; i++){
    if(i % 2 === 0){
        console.log(arr[i] + 'is odd')
    }else {
        console.log(arr[i] + 'is evan');
        
    }
}