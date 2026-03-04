class Vehicle {
  public driver: string | null = null;

  set updateDriver(name: string) {
    this.driver = name;
  }

  get userDriver() {
    return this.driver;
  }
}

const vehicle = new Vehicle();
vehicle.updateDriver = "test";

console.log(vehicle.userDriver);

const obj = { link: "", item: 2 } ast;

type ObjInstance = typeof obj;

let value: ObjInstance = {
  item: 2,
  link: "d",
};
