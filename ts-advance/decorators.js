"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(constructor) {
    console.log("Component Decorator called");
    constructor.prototype.uniqId = 2;
    constructor.prototype.insertInDom = function () {
        console.log("inserting the component in the dom");
    };
}
function Pipe(constructor) {
    console.log("Pipe decorator Called");
    constructor.prototype.pipe = true;
}
var Person = /** @class */ (function () {
    function Person() {
    }
    Person = __decorate([
        Component,
        Pipe
    ], Person);
    return Person;
}());
function Log(target, methodName, descriptor) {
    var original = descriptor.value;
    escriptor.value = function () {
        console.log("New Implementation");
    };
}
var PersonItems = /** @class */ (function () {
    function PersonItems() {
    }
    PersonItems.prototype.say = function (message) {
        console.log("Person says" + message);
    };
    __decorate([
        Log
    ], PersonItems.prototype, "say", null);
    return PersonItems;
}());
