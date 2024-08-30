var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var f = console.log.bind(console); // Still suspect, for a different reason
// waht is clean code ?
function notFound() {
    return false;
}
// fetch server components
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var res, data, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fetch("https://localhost.com/api/v1/components")];
                case 1:
                    res = _b.sent();
                    if (!res.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, res.json()];
                case 2:
                    _a = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    _a = null;
                    _b.label = 4;
                case 4:
                    data = _a;
                    if (!data || (data === null || data === void 0 ? void 0 : data.status) === 0) {
                        return [2 /*return*/, notFound()];
                    }
                    return [2 /*return*/, true];
            }
        });
    });
}
// nice fetching data
// get url
var paramse = "https://doctor/api/v1/components";
var formmatedUrl = paramse.substring(0, paramse.length - 1);
formmatedUrl = formmatedUrl.substring(formmatedUrl.lastIndexOf("/") + 1);
// solation 42
function checkThreeNumber(x, y, z) {
    if (y > x && z > y) {
        return "strict mode";
    }
    else if (z > y) {
        return "Soft mode";
    }
    return "undefinde";
}
console.log(checkThreeNumber(22, 33, 54));
// soaltion 43
function lessby20_others(x, y, z) {
    var isXEligible = x >= 20 && (x < y || x < z);
    var isYEligible = y >= 20 && (y < x || y < z);
    var isZEligible = z >= 20 && (z < x || z < y);
    return isXEligible || isYEligible || isZEligible;
}
console.log(lessby20_others(33, 44, 55));
// solution 45
// either | that
function checkforThey(x, y) {
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
function checkIntger(x, y) {
    if (x === 15 || y === 15 || x + y === 15 || Math.abs(x - y) === 15)
        return true;
    return false;
}
console.log(checkIntger(15, 25));
// solation 46
function cehckTwoIntger(x, y) {
    if (!(x % 7 === 0 || y % 7 === 0) && !(y % 7 === 0 || y % 10 === 0)) {
        return (x % 7 === 0 || y % 7 === 0) && !(y % 7 === 0 || y % 10 === 0);
    }
    return false;
}
console.log(cehckTwoIntger(14, 8));
// solution 47 satisfies satisfies im did not understand
function checkexists(x) {
    if (x < 40 || x < 10000) {
        return false;
    }
    else if (x >= 40 && x <= 10000) {
        return true;
    }
    return false;
}
console.log(checkexists(30000));
function reverceStrging(s) {
    // return s.split("").reverse().join("");
    var o = "";
    for (var i = s.length - 1; i >= 0; i--) {
        // console.log('this is charcerts = '+s[i])
        console.log(s[i]);
        o += s[i];
    }
    return o;
}
function reverseOne(s) {
    return s.split("").reverse().join("");
}
console.log(reverseOne("solve with one method"));
function reverseTwo(s) {
    var strn = "";
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
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
function reverceSt(s) {
    return s.split("").reverse().join("");
}
f(reverceSt("amir this bast programer"));
// what does this stement? console.log('this is bast')
// write a js to replace every character in a given string with the charchter following it in the alphabe covert vowels to upercase
function Letterchange(text) {
    var s = text.split("");
    for (var i = 0; i < s.length; i++) {
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
function capitalizeS(s) {
    var text = s.substring(1);
    var capitalize = s.charAt(0).toUpperCase();
    return capitalize + text;
}
f(capitalizeS("amirabas"));
function capitalizeFirstLetter(s) {
    var str = s.split(" ");
    var x = str.length;
    for (var i = 0; i < x; i++) {
        str[i] = str[i][0].toLocaleUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
}
f(capitalizeFirstLetter('amir abas'));
// new soluaion 51 
function appTransform(num) {
    var hours = Math.floor(num / 60);
    console.log(hours);
    var minutes = num % 60;
    console.log(minutes);
    return hours + ":" + minutes;
}
// 160 / 60 = * 2 = 160 - 120 
console.log(appTransform(88));
console.log(Math.floor(160 % 60));
console.log(Math.floor(200 % 60));
// solve the new solation 51    
function alphabe_soup(str) {
    return str.split('').sort().join('');
}
console.log(alphabe_soup('amirabas'));
// solve the new solation 52 // course typescript
function callBack(n, b, cn) {
    var result = n + b;
    cn(result);
}
console.log(callBack(22, 44, function (value) {
    console.log(value);
}));
// type unknown 
