var container = document.querySelectorAll(".panel");
container.forEach(function (item) {
    item.addEventListener('click', function (tiem) {
        removeHandler();
        item.classList.add('active');
    });
});
var removeHandler = function () {
    container.forEach(function (item) {
        item.classList.remove('active');
    });
};
