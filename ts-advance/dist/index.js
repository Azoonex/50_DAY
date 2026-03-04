"use strict";
class Vehicle {
    constructor() {
        this.driver = null;
    }
    set updateDriver(name) {
        this.driver = name;
    }
    get userDriver() {
        return this.driver;
    }
}
const vehicle = new Vehicle();
vehicle.updateDriver = "test";
console.log(vehicle.userDriver);
const obj = { link: "", item: 2 }, ast;
let value = {
    item: 2,
    link: "d",
};
