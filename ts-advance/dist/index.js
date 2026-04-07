"use strict";
var _a;
const circleElement = document.getElementById("circle");
console.log(circleElement);
var ol = 0;
var circleInterval = 0;
var flag = false;
function circleAnimation(time) {
    ol++;
    circleElement.style.marginLeft = `${ol}px`;
    circleInterval = requestAnimationFrame(circleAnimation);
}
function mouseClick() {
    if (flag) {
        flag = false;
        circleElement.style.backgroundColor = "red";
        cancelAnimationFrame(circleInterval);
    }
    else {
        flag = true;
        circleElement.style.backgroundColor = "aqua";
        circleInterval = requestAnimationFrame(circleAnimation);
    }
}
(_a = document.getElementById("switch")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", mouseClick);
// circleInterval = requestAnimationFrame(circleAnimation);
