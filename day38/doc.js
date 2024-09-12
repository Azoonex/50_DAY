function repetChar(s) {
    if (s.length <= 3)
        return "this is not Sentence";
    return /a...b/.test(s) || /b...a/.test(s);
}
console.log(repetChar("amirabas"));
// separated separeaeted separtated exactly exactly
function counterVowels(str) {
    return str.replace(/^aeiou/, "").length;
}
// solation
function counterVowelsNew(str) {
    return str.replace(/aiuoe/, "").length;
}
console.log(counterVowelsNew("amirabas"));
// solution 55
function checkTP(str) {
    var str_p = str.replace(/[^p]/g, "");
    var str_t = str.replace(/[^t]/g, "");
    var pnum = str_p.length;
    var tnum = str_t.length;
    if (pnum === tnum)
        return true;
    return false;
}
console.log("chckTp" + checkTP("amirabas top levele p and bastprogram"));
//ss
// solution 55
function divideNumbes(num, num2) {
    if (num === 0) {
        return "Cannot divide by zero";
    }
    var result = num / num2;
    var formateedResult = result.toLocaleString(undefined, {
        maximumFractionDigits: 2,
    });
    return formateedResult;
}
console.log(divideNumbes(22, 44));
var amirabasAdmin = {
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
var Department = /** @class */ (function () {
    function Department(n) {
        this.employes = [];
        this.name = n;
    }
    Department.prototype.addEmplyes = function (name) {
        this.employes.push(name);
    };
    Department.prototype.printeEmployes = function () {
        console.log(this.employes.length);
        console.log(this.employes);
    };
    return Department;
}());
var accounting = new Department("amirabas");
console.log(accounting);
accounting.addEmplyes("reza");
accounting.addEmplyes("hansan");
accounting.addEmplyes("jack");
accounting.addEmplyes("hossen");
accounting.printeEmployes();
function Animal(name) {
    if ("speed" in name)
        console.log(name.speed);
    switch (name.type) {
        case "brid":
            console.log("brid");
            break;
        case "house":
            console.log("house");
        default:
            console.log("others");
    }
}
console.log(Animal({ type: "brid", flyingSpeed: 33 }));
// solution 57
function copyString(str, n) {
    if (n < 1)
        return false;
    return str.repeat(n);
}
console.log(copyString("abas", 1 / 4));
function createString(str) {
    var newStr;
    if (str.length < 3)
        return false;
    newStr = str.substring(str.length - 3);
    return newStr.repeat(3);
}
console.log(createString("amirabas"));
// solution 59
function evenHelfStr(str) {
    if (str.length % 2 == 0)
        return false;
    var checkLenght;
    checkLenght = str.length / 2;
    return str.slice(0, str.length - checkLenght);
}
console.log(evenHelfStr("javascrip"));
// solution 60
function createNewString(str) {
    if (str.length < 3)
        return false;
    var firstCharacter = str.charAt(0);
    var lastCharacter = str.slice(-1);
    return firstCharacter + lastCharacter;
}
console.log(createNewString("items"));
function removeFirstChar(str1, str2) {
    if (str1.length < 1 || str2.length < 1)
        return false;
    return str1.slice(1, str1.length) + str2.slice(1, str2.length);
}
console.log(removeFirstChar("js", "python"));
