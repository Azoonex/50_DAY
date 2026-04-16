"use strict";
// const circleElement = document.getElementById("circle")!;
// class Motion {
//   ol: number = 0;
//   circleInterval: number = 0;
//   flag: boolean = false;
//   motion() {
//     this.ol++;
//     circleElement.style.marginLeft = `${this.ol}px`;
//     this.circleInterval = requestAnimationFrame(this.motion);
//   }
//   handleClick() {
//     if (this.flag) {
//       this.flag = false;
//       circleElement.style.backgroundColor = "red";
//       cancelAnimationFrame(this.circleInterval);
//     } else {
//       this.flag = true;
//       circleElement.style.backgroundColor = "aqua";
//       this.circleInterval = requestAnimationFrame(this.motion.bind);
//     }
//   }
// }
// const motion = new Motion();
// const handleClick = motion.handleClick;
// document.getElementById("switch")?.addEventListener("click", handleClick.bind(motion));
const obj = {
    name: "ali",
    say() {
        console.log(this.name);
    },
};
const say = obj.say.bind(this);
say();
