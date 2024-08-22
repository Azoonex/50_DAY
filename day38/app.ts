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
        console.log("this is I " + i);
        console.log("this  S " + s);
        // console.log('this is charcerts = '+s[i])
        console.log(s[i]);
        o += s[i];
    }

    return o;
}

function reverseOne(s: string) {
    return s.split('').reverse().join('')
}

console.log(reverseOne('solve with one method'))

// thresse this

// let = 0 / for ( let i = s.lenght - 1; i >= 0;i-- ){
// o += s[i]}

console.log(reverceStrging("amir abas"));

// this is bast solation perfomance perfomance performance performace of these implementation ot these
