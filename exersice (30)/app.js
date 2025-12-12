// let x = 10;
// let y = 2;
// console.log(x / y);
// if(9 % 2 == 0){
//     console.log('reza');   
// }
// let x = 100 + 50 * 3;
// let z = Math.pow(x, 2);
// console.log(z)
var fill = document.querySelector('.fill');
var empties = document.querySelectorAll('.empty');
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);
for (var _i = 0, empties_1 = empties; _i < empties_1.length; _i++) {
    var empty = empties_1[_i];
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}
function dragStart() {
    var _this = this;
    this.className += ' hold';
    setTimeout(function () {
        _this.className = 'invisible';
    }, 0);
}
function dragEnd() {
    this.className = "fill";
}
function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
    this.className += " hovered";
}
function dragLeave() {
    this.className = "empty";
}
function dragDrop() {
    this.className = "empty";
    this.append(fill);
}
