// js determines the day of the week , and formats the current house
var today = new Date();
var day = today.getDay();
var daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
console.log('Today is:' + daylist[day] + ".");
var houre = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (houre >= 12) ? " PM" : "Am";
if (houre === 0 && prepand === ' PM') {
    if (minute === 0 && second === 0) {
        houre = 12;
        prepand = ' Noon';
    }
    else {
        houre = 12;
        prepand = ' PM';
    }
}
if (houre === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        houre = 12;
        prepand = ' midnight';
    }
    else {
        houre = 12;
        prepand = ' AM ';
    }
}
console.log('Current Time:' + houre + prepand + ":" + minute + ":" + second);
