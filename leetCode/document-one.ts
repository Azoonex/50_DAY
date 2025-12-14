class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class AuthService {
  private token: string;
  readonly name: string;

  constructor(token: string, name: string) {
    this.token = token;
    this.name = name;
  }

  public getToken() {
    return this.token;
  }

  public logout() {
    this.token = "";
  }

  public changeName() {
    this.name = "dfjk";
  }
}

const token = new AuthService("randomToken", "name");

console.log(token.logout());

// Public
// Private
// readonly
// protected

// method

// setters and getters

class FormFiled {
  private _value: string = "";

  constructor(_value: string) {
    this._value = _value;
  }

  get value() {
    return this._value;
  }

  set value(val: string) {
    if (val.length > 10) {
      throw new Error("Too long");
    }
    this._value = val;
  }
}

const filed = new FormFiled("amirabas");

console.log((filed.value = "34"));

//  Create the value of NOR of two given booleans

function logicNor(x: boolean, y: boolean) {
  // method 1
  // const norX = Number(x);
  // const norY = Number(y);

  // return Boolean(norX * norY);
  // method two

  return !x && !y;
}

console.log(logicNor(true, true));
