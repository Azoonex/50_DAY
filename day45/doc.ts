// let items = "item1,item2,item3";

// // console.log(items.search("item2"),items.lastIndexOf(","));

// // let new_items = items.substring(items.search("item2"),items.lastIndexOf(","));
// // let split_value = items.split(",")
// // console.log(split_value)
// // console.log(items.)
// // console.log(new_items)

// // check the number up
// // 12345
// // 5
// // JavaScript Basic: Exercise-118 with Solution
// function checkNumber(count: number, num: number) {
//   let counter = count.toString().split("");

//   for (let x = 0; x < counter.length - 1; x++) {
//     if (parseInt(counter[x]) >= parseInt(counter[x + 1])) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(checkNumber(123451, 4));

// const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

// function findMaxNumber(arr: number[]): number {
//   let item = [];
//   let items = arr.reduce((max, current) => {
//     arr[max] === current ? item.push(max) : undefined;
//   }, arr[0]);
//   console.log(item);
// }

// // console.log(findMaxNumber([3, 9, 2, 5, 12, 7]));

// const items = [
//   { id: 1, name: "Apple", price: 100 },
//   { id: 2, name: "Banana", price: 50 },
//   { id: 3, name: "Orange", price: 70 },
// ];

// function arraytoobject(arr: number[]) {
//   return arr.reduce((acc, current) => {
//     acc[current.id] = current;
//     return acc;
//   }, {});
// }

// console.log(arraytoobject(items));
// Exercise-130 with Solution

// function findDigitEven(num: number) {
//   return num
//     .toString()
//     .split("")
//     .map(Number)
//     .filter((item) => item % 2 === 0);
// }
// let num = 1235545
// console.log(num.toFixed(3));

class Person {
  constructor(
    public id: number,
    public age: number,
    readonly service: string,
    private balance: number
  ) {}

  getUser(num: number) {
    if (num > 0) {
      return "Yes";
    }
  }

  // getter and setter
  get logBalance(): number {
    return this.balance;
  }

  // fixe_todo
  set setBalance(num: number) {
    if (num < 0) throw new Error("Invalid value");
    this.balance = num;
  }
}

let PersonBank = new Person(1, 2, "programer", 2);
// fixed todo
PersonBank.setBalance = 2;
PersonBank.getUser(1);

console.log(PersonBank.getUser(2));
console.log(PersonBank.logBalance);

class SeatAssignment {
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();

seats.A1 = "abas";
seats.A2 = "tehran";

// static

class Ride {
  private static activeRide: number = 0;
  static get print() {
    return Ride.activeRide;
  }

  static set setRider(num: number) {
    Ride.activeRide += num;
  }
}

const activeRiders = new Ride();

Ride.setRider = 2;

console.log(Ride.print);

// inheritance ts

class PersonNew {
  constructor(private name: string, private status: boolean) {}

  getFullName(value: string): string {
    return `${this.name} ${value}`;
  }
}

class Employee extends Person {
  constructor(name: string, status: boolean) {
    super(name, status);
  }
}
