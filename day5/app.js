var counter = document.querySelector("h2");
var divFilter = document.querySelector('.fil');
var count = 0;
var init = setInterval(myFunc, 100);
var filter = 10;
var intFil = setInterval(initFil, 700);
var countFill = 0;
function initFil() {
    filter--;
    divFilter.style.backdropFilter = "blur(".concat(filter, "px)");
    console.log('filter', filter);
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
