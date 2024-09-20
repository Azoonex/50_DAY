var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function content(xs, u) {
    return Object.assign(xs, u);
}
var mergeObject = content({
    name: "mmade",
    hibbites: "male",
}, {
    age: 33,
});
function cehckEndString(str) {
    if (str.substring(str.length - 6, str.length) === "Script") {
        return true;
    }
    return false;
    // 7 - 6 1,7
}
console.log(cehckEndString("amirabas"));
// solve the new solution 65
function checknameCity(str) {
    if (str.length <= 3)
        return false;
    else if (str.substring(0, 3) === "Los" || str.substring(0, 3) === "Now") {
        return true;
    }
    return false;
}
console.log(checknameCity("Now"));
// solve the solution 66
function checkP(str) {
    if (str.length <= 1)
        return false;
    var firstcharacter = str.substr(0, 1);
    var lastCharacter = str.substr(str.length - 1);
    if (firstcharacter === "p" || lastCharacter === "p")
        return true;
    return str;
}
console.log(checkP("php"));
// solve the solution 67
function newString(str, n) {
    var first = str.substring(0, n);
    var last = str.substring(str.length - n);
    return first + last;
}
console.log(newString("amirabas", 2));
// solve the soluation 67 compute compute compute compute compute compute computes
function compute(arr) {
    var sum = 0;
    // for(let i =0;i < arr.length ; i++ ){
    //     sum += arr[i]
    // }
    // arr.forEach(i => {
    //     sum += i
    // })
    sum = arr.reduce(function (x, y) {
        return x + y;
    }, 0);
    return sum;
}
console.log(compute([33, 44, 55]));
// rotate array
// function rotateArray(arr: string[],rotate : boolean){
//     if(rotate) arr.unshift(arr.pop())
// }
//
function checkArry(str) {
    var posend = str.length - 1;
    if (str.length <= 1)
        return false;
    if (str[0] === 1 || str[posend] === 1) {
        return "this is ok";
    }
    else
        return false;
}
console.log(checkArry([1, 3, 5, 3, 3, 1]));
function middleArry(arr1, arr2) {
    var middleArry = Math.floor(arr1.length / 2);
    var middleArry2 = Math.floor(arr2.length / 2);
    return arr1[middleArry] + arr2[middleArry2];
}
console.log(middleArry([1, 3, 5, 6, 3, 2, 4, 5, 3], [1, 3, 5, 6, 3, 2, 4, 5, 3]));
// class object oraneted programing
var ampoinment = /** @class */ (function () {
    function ampoinment(n) {
        this.employees = [];
        this.name = n;
    }
    ampoinment.prototype.addempoees = function (add) {
        this.employees.push(add);
    };
    ampoinment.prototype.prientemployees = function () {
        console.log(this.employees);
    };
    return ampoinment;
}());
var itDeparment = /** @class */ (function (_super) {
    __extends(itDeparment, _super);
    function itDeparment(name) {
        var _this = _super.call(this, "content") || this;
        _this.allTeame = [];
        return _this;
    }
    itDeparment.prototype.addEmploes = function (n) {
        this.allTeame.push(n);
    };
    return itDeparment;
}(ampoinment));
var it = new itDeparment(['amirabas']);
it.addEmploes('reza');
console.log(it);
var arrcitve = new ampoinment("contecting");
arrcitve.addempoees("max");
console.log(arrcitve);
