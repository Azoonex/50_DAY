var btn = document.querySelector('button');
var inputElement = document.querySelector('input');
btn.onclick = function () {
    inputElement.classList.toggle('active');
};
