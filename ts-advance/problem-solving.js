"use strict";
// problem-solving
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
// 1) understand the Problem
// 2) Explore concrete Examples
//
function charCount(str) {
    var char = {};
    var convertStr = str.split(" ").toString();
    for (var x = 0; x < str.length; x++) {
        var charName = str[x].toLowerCase().trim();
        if (!char[charName]) {
            char[charName] = 1;
        }
        else {
            char[charName]++;
        }
    }
    return convertStr;
}
// console.log(charCount("Hello world"));
var value = [1, 32, 1, 32, 4];
// console.log(value.splice(0,8));
function same(arr1, arr2) {
    if (!arr1 || !arr2 || arr1.length !== arr2.length) {
        return false;
    }
    for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
        var arr = arr1_1[_i];
        if (!arr2.includes(arr)) {
            return false;
        }
    }
    return true;
}
var obj = {
    name: "reza",
    age: 30,
    side: "left",
    category: "person",
};
// Object.keys(obj).map((value) => console.log(obj[value]));
var objString = "";
for (var val in obj) {
    objString += !objString ? obj[val] : " " + obj[val];
}
console.log(objString.split(" ").reverse().join(" "));
function myGenerator() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, 1];
            case 1:
                _a.sent();
                return [4 /*yield*/, 2];
            case 2:
                _a.sent();
                return [4 /*yield*/, 3];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
var gen = myGenerator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
function counter() {
    var i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                i = 0;
                _a.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 3];
                return [4 /*yield*/, i++];
            case 2:
                _a.sent();
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
var c = counter();
console.log("c", c.next());
console.log("c", c.next());
console.log("c", c.next());
console.log("c", c.next());
console.log("c", c.next());
console.log("c", c.next());
function fruits() {
    var list, _i, list_1, item;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                list = ["🍎", "🍌", "🍓"];
                _i = 0, list_1 = list;
                _a.label = 1;
            case 1:
                if (!(_i < list_1.length)) return [3 /*break*/, 4];
                item = list_1[_i];
                return [4 /*yield*/, item];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}
for (var _i = 0, _a = fruits(); _i < _a.length; _i++) {
    var fruit = _a[_i];
    console.log(fruit);
}
var bigUserList = Array.from({ length: 1000000 }).map(function (v, index) {
    return { id: index };
});
console.log(bigUserList);
// yield it take : "Wait a minute...take this...we'll continue later";
function processUser(users) {
    return users.map(function (u) {
        console.log(u);
        return u.id;
    });
}
function processUserYield(users) {
    var _i, users_1, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _i = 0, users_1 = users;
                _a.label = 1;
            case 1:
                if (!(_i < users_1.length)) return [3 /*break*/, 4];
                user = users_1[_i];
                return [4 /*yield*/, user.id];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}
var gen = processUserYield(bigUserList);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
// step-by-step is very import i handle the generate function
