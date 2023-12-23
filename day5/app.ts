let counter: HTMLElement = document.querySelector("h2")!;
let divFilter: HTMLElement = document.querySelector(".fil")!;

let count: number = 0;
let init = setInterval(myFunc, 100);
let filter = 10;
let intFil = setInterval(initFil, 700);

function initFil() {
    filter--;
    divFilter.style.backdropFilter = `blur(${filter}px)`;
    console.log("filter", filter);

    if (filter === 0) {
        clearInterval(intFil);
    }
}

function myFunc() {
    count++;
    counter.innerText = count.toString();
    if (count === 100) {
        clearInterval(init);
    }
}
