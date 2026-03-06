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
class Car extends Vehicle {
}
const vehicle = new Vehicle();
vehicle.updateDriver = "test";
const CarInstance = new Car();
console.log(vehicle.userDriver);
console.log(vehicle.driver);
const obj = { link: "", item: 2 };
let value = {
    item: 2,
    link: "d",
};
class Trip {
    constructor(person) {
        this.person = person;
    }
    get personSize() {
        return this.person;
    }
}
const trip = new Trip(22);
console.log(trip.personSize);
class TripCountry extends Trip {
    constructor(person) {
        super(person);
        this.person = person;
    }
}
;
const tripCountry = new TripCountry(33);
