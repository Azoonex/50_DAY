// The Assignment Operator = assigns values
// The Addition Operator + adds values
// The Multiplication Operator * multiplies values
// The Comparison Operator > compares values
// let a,b,c,content
// a = 22,
// b = 'string'
// c = true
// content = 'string'
// c = a + b;
// c = a * a;
// let t
// setInterval(()=>{
//     a = 5
//     t = a += 5
//     console.log(t);
// },200)
// let text1 = "C22";
// let text2 = "B";
// let result = text1 < text2;
// console.log(result);
// if(a <= 255){
//     console.log('yes this is ok');
// Note that strings are compared alphabetically: ------------- prefect
// let text1 = "What a very ";
// text1 += "nice day";
var sectionElemnt = document.querySelector("section");
var btn = document.querySelector("button");
var body = document.body;
var sytleBody = {
    padding: "0",
    margin: "0",
};
var styleForsection = {
    width: "100%",
    height: "100svh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#000",
};
var stylebutton = {
    padding: "30px 20px",
    background: "#800080",
    borderRadius: "0",
    border: "none",
    fontSize: "23px",
    color: "#fff",
};
Object.assign(body.style, sytleBody);
Object.assign(btn.style, stylebutton);
Object.assign(sectionElemnt.style, styleForsection);
btn.addEventListener("click", function (event) {
    // alert('yes clicked'
    var x = event.clientX;
    var y = event.clientY;
    var buttonTop = event.target.offsetTop;
    var buttonLeft = event.target.offsetLeft;
    var xInside = x - buttonLeft;
    var yInside = y - buttonTop;
    var circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';
    btn.appendChild(circle);
    setTimeout(function () {
        circle.remove();
    }, 20000);
});
