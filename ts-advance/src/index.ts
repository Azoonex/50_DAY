import { Generate } from "./tools/tool.index";

class Vehicle {
  public driver: string | null = null;

  set updateDriver(name: string) {
    this.driver = name;
  }

  get userDriver() {
    return this.driver;
  }
}

class Car extends Vehicle {}

const vehicle = new Vehicle();
vehicle.updateDriver = "test";

const CarInstance = new Car();

console.log(vehicle.userDriver);

console.log(vehicle.driver);
const obj = { link: "", item: 2 };

type ObjInstance = typeof obj;

let value: ObjInstance = {
  item: 2,
  link: "d",
};

class Trip {
  constructor(protected person: number) {}

  get personSize() {
    return this.person;
  }
}

const trip = new Trip(22)
console.log(trip.personSize)


class TripCountry extends Trip{
constructor(public person:number){
  super(person)
}
};


const tripCountry = new TripCountry(33)

const generate = new Generate();

console.log(generate.address)
console.log(generate.makeRandom(3,true))