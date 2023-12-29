var left = document.querySelector(".left");
var right = document.querySelector(".right");
var container = document.querySelector(".container");
left.addEventListener("mouseenter", function () {
    return container.classList.add("hover-left");
});
left.addEventListener("mouseleave", function () {
    return container.classList.remove("hover-left");
});
right.addEventListener("mouseenter", function () {
    return container.classList.add("hover-right");
});
right.addEventListener("mouseleave", function () {
    return container.classList.remove("hover-right");
});
