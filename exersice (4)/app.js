var child = document.querySelector('.child');
var progres = document.querySelectorAll('.progres');
var next = document.querySelector('#next');
var prive = document.querySelector('#prive');
var active = document.querySelector('.active');
var crentActive = 1;
next.addEventListener('click', function () {
    crentActive++;
    if (crentActive > progres.length) {
        crentActive = progres.length;
    }
    update();
});
prive.addEventListener('click', function () {
    crentActive--;
    if (crentActive < 1) {
        crentActive = 1;
    }
    update();
});
var update = function () {
    progres.forEach(function (item, idx) {
        if (idx < crentActive) {
            item.classList.add('active');
        }
        else {
            item.classList.remove('active');
        }
    });
    child.style.width = (crentActive - 1) / (progres.length - 1) * 100 + '%';
    if (crentActive === 1) {
        prive.classList.add('disabled');
    }
    else if (crentActive === progres.length) {
        next.classList.add('disabled');
    }
    else {
        prive.classList.remove('disabled');
        next.classList.remove('disabled');
    }
};
