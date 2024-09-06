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
console.log("chckTp" + checkTP("amirabas top levele p and bastprogram"));
//ss
// solution 55

function divideNumbes(num: number, num2: number) {
    if (num === 0) {
        return "Cannot divide by zero";
    }

    let result = num / num2;
    let formateedResult = result.toLocaleString(undefined, {
        maximumFractionDigits: 2,
    });

    return formateedResult;
}

console.log(divideNumbes(22, 44));
// typescript

interface director {
    age: number;
    name: string;
    access: boolean;
}

interface manager {
    code: number;
    command: string;
}

interface admin extends director, manager {}

let amirabasAdmin: admin = {
    age: 28,
    name: "amir",
    code: 33,
    command: "dirctor",
    access: true,
};

// use type
// type admin
// type admin : dirctor & manger

// type react= string{}

// function checkFrame(a: react){
//     if('ts' in a.lan){
//         console.log('this is base')
//     }
// }

// object orantede program

class Department {
    public name: string;
    private employes: string[] = [];

    constructor(n: string) {
        this.name = n;
    }

    addEmplyes(name: string) {
        this.employes.push(name);
    }

    printeEmployes() {
        console.log(this.employes.length);
        console.log(this.employes);
    }
}

let accounting = new Department("amirabas");
console.log(accounting);

accounting.addEmplyes("reza");
accounting.addEmplyes("hansan");
accounting.addEmplyes("jack");
accounting.addEmplyes('hossen')
accounting.printeEmployes();
