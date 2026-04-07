const circleElement = document.getElementById("circle")!;
console.log(circleElement);

var ol = 0;
var circleInterval = 0;
var flag = false;
function circleAnimation(time: number) {
  ol++;
  circleElement.style.marginLeft = `${ol}px`;
  circleInterval = requestAnimationFrame(circleAnimation);
}

function mouseClick() {
  if (flag) {
    flag = false;
    circleElement.style.backgroundColor = "red";
    cancelAnimationFrame(circleInterval);
  } else {
    flag = true;
    circleElement.style.backgroundColor = "aqua";
    circleInterval = requestAnimationFrame(circleAnimation);
  }
}

document.getElementById("switch")?.addEventListener("click", mouseClick);
// circleInterval = requestAnimationFrame(circleAnimation);
