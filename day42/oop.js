console.log('reza');
var circle = {
    a: "t",
    base: "test",
    not: "contact",
    draw: function () {
        console.log(this.a);
    }
};
circle.draw();
//
if ('test' in circle) {
    console.log(circle.a);
}
