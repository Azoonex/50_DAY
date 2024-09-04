function repetChar(s: string) {
    if (s.length <= 3) return "this is not Sentence";

    return /a...b/.test(s) || /b...a/.test(s);
}

console.log(repetChar("amirabas"));

// separated separeaeted separtated exactly exactly

function counterVowels(str: string) {
    return str.replace(/^aeiou/, "").length;
}

// solation

function counterVowelsNew(str: string) {
    return str.replace(/aiuoe/, "").length;
}

console.log(counterVowelsNew("amirabas"));

// solution 55

function checkTP(str: string) {
    let str_p = str.replace(/[^p]/g, "");
    let str_t = str.replace(/[^t]/g, "");

    let pnum = str_p.length;
    let tnum = str_t.length;

    if (pnum === tnum) return true;
    return false;
}
console.log("chckTp" + checkTP('amirabas top levele p and bastprogram'));
//ss
// solution 55

function divideNumbes(num:number,num2:number){
    if(num === 0){
        return "Cannot divide by zero"
    }

    let result = num / num2
    let formateedResult = result.toLocaleString(undefined,{
        maximumFractionDigits: 2
    })

    return formateedResult
}

console.log(divideNumbes(22,44))