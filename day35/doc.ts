// js determines the day of the week , and formats the current house

let today = new Date()

let day = today.getDay()


let daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

console.log('Today is:' + daylist[day] + ".");

let houre= today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

let prepand = (houre>= 12) ? " PM" : "Am";

if(houre=== 0 && prepand === ' PM'){
    if(minute === 0 && second === 0){
        houre= 12;
        prepand = ' Noon'
    } else {
        houre= 12;
        prepand = ' PM'
    }
}

if (houre === 0 && prepand === ' AM '){
    if(minute === 0 && second === 0){
        houre = 12;
        prepand = ' midnight'
    }else {
        houre = 12;
        prepand = ' AM '
    }
}

console.log('Current Time:' + houre + prepand + ":" + minute + ":" + second);

// Explantions explanations Explanations Explanations Explantation

