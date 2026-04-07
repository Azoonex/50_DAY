
const circleElement = document.getElementById("circle")!;
console.log(circleElement)

var ol = 0;
var circleInterval = 0;
function circleAnimation(time: number) {
  ol++;
  
  console.log(time,ol);
  
  
  if (time < 4000) {
    circleInterval = requestAnimationFrame(circleAnimation);
    circleElement.style.marginLeft = `${ol}px`; 
  } else {
    circleElement.style.backgroundColor = "red";
    cancelAnimationFrame(circleInterval);
  }
}

circleInterval = requestAnimationFrame(circleAnimation);
