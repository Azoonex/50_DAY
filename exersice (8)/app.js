var boxes = document.querySelectorAll('.item');
console.log(boxes);
window.addEventListener('scroll', myFunctionCheckItem);
myFunctionCheckItem();
function myFunctionCheckItem() {
    var triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach(function (box) {
        var boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        }
        else {
            box.classList.remove('show');
        }
    });
}
