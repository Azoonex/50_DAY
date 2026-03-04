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
