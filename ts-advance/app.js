var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
function Component(constructor) {
    constructor.prototype.uniqId = Date.now();
    constructor.prototype.insertInDom = function () {
        console.log("inserting in Component in the Dom");
    };
}
var ProfileComponent = function () {
    var _classDecorators = [Component];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ProfileComponent = _classThis = /** @class */ (function () {
        function ProfileComponent_1() {
        }
        return ProfileComponent_1;
    }());
    __setFunctionName(_classThis, "ProfileComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ProfileComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProfileComponent = _classThis;
}();
// console.log("Hello")
function identity(arg) {
    return arg;
}
var num = identity(4);
function getLengthT(item) {
    return item.v;
}
function getItem(item) {
    return item;
}
// function padLeft(padding: number | string, input: string): string {
//   if (typeof padding == "number") {
//     return "".repeat(padding) + input;
//   }
//   return padding + input;
// }
// console.log(padLeft(213, "sfd"));
// function Logger(constructor: Function) {
//   console.log("Class Created", constructor.name);
// }
// @Logger
var User = /** @class */ (function () {
    function User() {
        this.name = "Amir";
    }
    return User;
}());
// Hello world
var person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
};
// Create Source Object
var person2 = { firstName: "Anne", lastName: "Smith" };
// Assign Source to Target
var newAssign = Object.assign(person1, person2);
console.log(newAssign);
var user = {
    accessibility: "yes",
    getAccess: function () {
        return this.accessibility;
    },
};
console.log(user.getAccess());
console.log(this);
var users = {
    name: "Amir",
    getName: function () {
        console.log(this.name);
    },
};
console.log("00000--------------------00000");
// pure function is the just dependency of parameter ,is n't change any objects or variables that existed before is was called. same input , same output;
function safe(v, h) {
    console.log(v + h);
}
var a = 10;
var b = a;
b = 20;
console.log(a === 10, b === 20);
// number; string; boolean; null; undefined; symbol; bigint;
// Reference type Object array function data map / set
var obj1 = { name: "Ali" };
var obj2 = obj1;
obj2.name = "Reza";
console.log(obj1);
// چون هر دو به یه آدرس تو حافظه اشاره می‌کنن
var a2 = { x: 1 };
var b2 = { x: 1 };
a2 === b2; // false ❌ چون آدرس‌ها فرق دارن
// prototypes
function Person(name) {
    this.name = name;
}
var name1 = new Person("Ali");
var name2 = new Person("Reza");
Person.prototype.sayHi = function () {
    console.log("Hi" + this.name);
};
console.log(name1);
var userItem = {
    name: "Ali",
};
function sayHi() {
    console.log(this.name);
}
console.log(sayHi());
console.log(sayHi.call(userItem));
console.log(sayHi.apply(user));
var boundFun = sayHi.bind(getItem);
console.log(boundFun());
var numbers = ["1", "2", "3"];
console.log(numbers.map(parseInt));
