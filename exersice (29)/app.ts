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

const sectionElemnt = document.querySelector("section")!;
const btn = document.querySelector("button")!;
const body = document.body;

let sytleBody = {
    padding: "0",
    margin: "0",
};

let styleForsection = {
    width: "100%",
    height: "100svh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#000",
};

let stylebutton = {
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

btn.addEventListener("click", (event: MouseEvent ) => {
    // alert('yes clicked'
    const x = event.clientX;
    const y = event.clientY;

    const buttonTop = (event.target as HTMLElement).offsetTop;
    const buttonLeft = (event.target as HTMLElement).offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement('span')
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    btn.appendChild(circle)
    setTimeout(() => {
        circle.remove()
    }, 20000);
});
