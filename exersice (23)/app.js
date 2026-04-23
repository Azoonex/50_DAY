var pElment = document.querySelectorAll('p');
pElment.forEach(function (counter) {
    counter.innerText = "0";
    // updateCounter
    var updateCounter = function () {
        var target = +counter.getAttribute("data-target");
        var c = +counter.innerText;
        var increment = target / 200;
        if (c < target) {
            counter.innerText = "".concat(Math.ceil(c + increment));
            setTimeout(updateCounter, 1);
        }
        else {
            counter.innerText = target;
        }
    };
    updateCounter();
});
