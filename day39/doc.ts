// const item = document.getElementById("animate")!;
// const btn: HTMLElement | null = document.getElementById("button");
// const demo = document.getElementById("demo")! as HTMLElement;
// const btnStopDate = document.getElementById("stopDate")!;

// const myInterVale = setInterval(setDate, 1000);

// function setDate(): number | void {
//     const date = new Date();
//     demo.innerHTML = date.toLocaleString();
//     console.log(date.toLocaleString());
// }

// btnStopDate.onclick = handleStop;

// function handleStop() {
//     clearInterval(myInterVale);
// }

// function mymove() {
//     let id: number | null = null;
//     let pos = 0;
//     if (id) clearInterval(id);
//     id = setInterval(famer, 5);

//     function famer() {
//         if (pos === 500) {
//             if (id) clearInterval(id);
//         } else if (pos === 500) {
//             pos--;
//             item.style.top = pos + "px";
//             item.style.left = pos + "px";
//         } else {
//             pos++;
//             item.style.top = pos + "px";
//             item.style.left = pos + "px";
//         }
//     }
// }

// if (btn) btn.onclick = mymove;

const item = 10;
const teamp = String(10)
const teamp2 = String([1,2,4,5]);
const teamp3 = (100).toString()

console.log(item,teamp,teamp2,teamp3)

let a = "5"
let b = "10"

console.log(Number(a) + Number(b))