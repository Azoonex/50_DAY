var hourEl = document.querySelector(".hour");
var minuteEl = document.querySelector(".minute");
var secondEl = document.querySelector(".second");
var timeEl = document.querySelector(".time");
var dateEl = document.querySelector(".date");
var toggle = document.querySelector(".toggle");
var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
toggle.addEventListener("click", function (e) {
    var html = document.querySelector("html");
    if (html === null || html === void 0 ? void 0 : html.classList.contains("dark")) {
        e.target.innerHTML = "Dark mode";
    }
    else {
        html === null || html === void 0 ? void 0 : html.classList.add("dark");
        e.target.innerHTML = "Light mode";
    }
});
function setTime() {
    var time = new Date();
    var month = time.getMonth();
    var day = time.getDay();
    var date = time.getDate();
    var hours = time.getHours();
    var hoursForClock = hours % 12;
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var ampm = hours >= 12 ? "PM" : "AM";
    hourEl.style.transform = "translate(-50%, -100%) rotate(".concat(scale(hoursForClock, 0, 11, 0, 360), "deg)");
    minuteEl.style.transform = "translate(-50%, -100%) rotate(".concat(scale(minutes, 0, 59, 0, 360), "deg)");
    secondEl.style.transform = "translate(-50%, -100%) rotate(".concat(scale(seconds, 0, 59, 0, 360), "deg)");
    timeEl.innerHTML = "".concat(hoursForClock, ":").concat(minutes < 10 ? "0".concat(minutes) : minutes, " ").concat(ampm);
    dateEl.innerHTML = "".concat(days[day], ", ").concat(months[month], " <span class=\"circle\">").concat(date, "</span>");
}
var scale = function (num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
setTime();
setInterval(setTime, 1000);
