var f = console.log.bind(console); // Still suspect, for a different reason
// waht is clean code ?

function notFound() {
    return false;
}

// fetch server components
async function fetchData() {
    let res = await fetch(`https://localhost.com/api/v1/components`);
    const data = res.ok ? await res.json() : null;

    if (!data || data?.status === 0) {
        return notFound();
    }
    return true;
}

// nice fetching data
// get url

let paramse = "https://doctor/api/v1/components";

let formmatedUrl = paramse.substring(0, paramse.length - 1);
formmatedUrl = formmatedUrl.substring(formmatedUrl.lastIndexOf("/") + 1);

// solation 42

function checkThreeNumber(x: number, y: number, z: number) {
    if (y > x && z > y) {
        return "strict mode";
    } else if (z > y) {
        return "Soft mode";
    }
    return "undefinde";
}

console.log(checkThreeNumber(22, 33, 54));

// soaltion 43

function lessby20_others(x: number, y: number, z: number) {
    const isXEligible = x >= 20 && (x < y || x < z);
    const isYEligible = y >= 20 && (y < x || y < z);
    const isZEligible = z >= 20 && (z < x || z < y);

    return isXEligible || isYEligible || isZEligible;
}

console.log(lessby20_others(33, 44, 55));

// solution 45
// either | that

function checkforThey(x: number, y: number) {
    if (x === 15 || y === 15 || x + y === 15 || Math.abs(x - y) === 15) {
        return true;
    }
    return false;
}
// () function checkforthey(x,y)
// <>    if (x === 15 || y === 15 || x + y === 15 || Math.abs(x - y) === 15)
// [] return true
// [] return false
// END

function checkIntger(x: number, y: number) {
    if (x === 15 || y === 15 || x + y === 15 || Math.abs(x - y) === 15)
        return true;
    return false;
}

console.log(checkIntger(15, 25));

// solation 46

function cehckTwoIntger(x: number, y: number) {
    if (!(x % 7 === 0 || y % 7 === 0) && !(y % 7 === 0 || y % 10 === 0)) {
        return (x % 7 === 0 || y % 7 === 0) && !(y % 7 === 0 || y % 10 === 0);
    }
    return false;
}

console.log(cehckTwoIntger(14, 8));

// solution 47 satisfies satisfies im did not understand

function checkexists(x: number) {
    if (x < 40 || x < 10000) {
        return false;
    } else if (x >= 40 && x <= 10000) {
        return true;
    }
    return false;
}

console.log(checkexists(30000));

function reverceStrging(s: string) {
    // return s.split("").reverse().join("");

    let o = "";
    for (let i = s.length - 1; i >= 0; i--) {
        // console.log('this is charcerts = '+s[i])
        console.log(s[i]);
        o += s[i];
    }

    return o;
}

function reverseOne(s: string) {
    return s.split("").reverse().join("");
}

console.log(reverseOne("solve with one method"));

function reverseTwo(s: string) {
    let strn = "";
    for (let char of s) {
        strn = char + s;
    }
    return strn;
}
// thresse this

console.log(reverseTwo("iam king "));

// let = 0 / for ( let i = s.lenght - 1; i >= 0;i-- ){
// o += s[i]}

console.log(reverceStrging("amir abas"));

// this is bast solation perfomance perfomance performance performace of these implementation ot these

function reverceSt(s: string) {
    return s.split("").reverse().join("");
}

f(reverceSt("amir this bast programer"));

// what does this stement? console.log('this is bast')
// write a js to replace every character in a given string with the charchter following it in the alphabe covert vowels to upercase

function Letterchange(text: string) {
    let s = text.split("");

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case " ":
                break;
            case "z":
                s[i] = "a";
                break;
            case "Z":
                s[i] = "A";
                break;
            default:
                s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
        }
    }
}

// solve the solation 49

function capitalizeS(s: string) {
    let text = s.substring(1);
    let capitalize = s.charAt(0).toUpperCase();

    return capitalize + text;
}

f(capitalizeS("amirabas"));

function capitalizeFirstLetter(s: string) {
    let str = s.split(" ");
    let x: number = str.length;
    for (let i = 0; i < x; i++) {
        str[i] = str[i][0].toLocaleUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

f(capitalizeFirstLetter('amir abas'))

// new soluaion 51 

function appTransform(num :number){
    let hours = Math.floor(num / 60)
    console.log(hours);

    let minutes = num % 60;
    console.log(minutes);

    return hours + ":" + minutes
}

// 160 / 60 = * 2 = 160 - 120 

console.log(appTransform(88))
console.log(Math.floor(160 % 60))
console.log(Math.floor(200 % 60))

// solve the new solation 51    

function alphabe_soup(str:string){
    return str.split('').sort().join('')
}

console.log(alphabe_soup('amirabas'))

// solve the new solation 52 // course typescript

function callBack(n:number,b:number,cn:(num: number)=> void){
    let result = n + b;
    cn(result)
}

console.log(callBack(22,44,(value)=>{
    console.log(value)
}))

// type unknown 
// How do i connect to the internet!
// How do i chnage the color?
// How do i walk?
// How do i sleep?
// How to read a book?
// this bag is so nice
// i dont know that woman
// i saw that movie again today
// This is a rally good book
// These are you new colleagues
// This is Bob
// These are my friends Bob and Mary.
// This These / That / Those
// What is that?
// Those are very expensive shooes
// This is my book 
// This book is mine
// This book is mine
// How Do i do that? 
// How do i do that?

