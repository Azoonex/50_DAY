// function find_missingNumber(arr: number[]): number {
//   if (!arr.length) return 1;
//   let n = arr.length + 1;
//   let expectedSum = (n * (n + 1)) / 2;
//   console.log(arr);
//   let actualSum = arr.reduce((acc, current) => acc + current, 0);
//   console.log(actualSum, expectedSum);
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
// class Person {
//   constructor(
//     public id: number,
//     public age: number,
//     readonly service: string,
//     private balance: number
//   ) {}
//   getUser(num: number) {
//     if (num > 0) {
//       return "Yes";
//     }
//   }
//   // getter and setter
//   get logBalance(): number {
//     return this.balance;
//   }
//   // fixe_todo
//   set setBalance(num: number) {
//     if (num < 0) throw new Error("Invalid value");
//     this.balance = num;
//   }
// }
// let PersonBank = new Person(1, 2, "programer", 2);
// // fixed todo
// PersonBank.setBalance = 2;
// PersonBank.getUser(1);
// console.log(PersonBank.getUser(2));
// console.log(PersonBank.logBalance);
// class SeatAssignment {
//   [seatNumber: string]: string;
// }
// let seats = new SeatAssignment();
// seats.A1 = "abas";
// seats.A2 = "tehran";
// // static
// class Ride {
//   private static activeRide: number = 0;
//   static get print() {
//     return Ride.activeRide;
//   }
//   static set setRider(num: number) {
//     Ride.activeRide += num;
//   }
// }
// const activeRiders = new Ride();
// Ride.setRider = 2;
// console.log(Ride.print);
// inheritance ts
// class PersonNew {
//   constructor(private name: string, private status: boolean) {}
//   getFullName(value: string): string {
//     return `${this.name} ${value}`;
//   }
// }
// class Employee extends Person {
//   constructor(name: string, status: boolean) {
//     super(name, status);
//   }
// }
// Exercise-131 with Solution
// function prefix_sums(arr: Array<number>) {
//   if (!arr.length) return false;
//   let newArray: number[] = [];
//   for (let x = 0; x < arr.length; x++) {
//     newArray[x] = 0;
//     for (let i = 0; x < i + 1; i++) {
//       newArray[x] += arr[i];
//     }
//   }
//   return newArray;
// }
// console.log(prefix_sums([1, 3, 4, 1, 2]));
// const obj = { foo: "bar", baz: 42 };
// console.log(Object.entries(obj));
// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };
// const create = { g1: 4, z: 5 };
// const returnTarget = Object.assign(target,source,create)
// const person = {
//   isHuman: false,
//   printIntroduction: function () {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   },
// };
// const we = Object.create(person)
// we.isHuman = false
// console.log(person)
// title case
// function TitleCase(str:string){
//   let newString = str.split(" ");
//   let setString:string[]= [];
//   newString.forEach(item =>{
//     let letterWorld = item.slice(0,1).toUpperCase()
//     setString.push(letterWorld + item.slice(1).toLowerCase())
//   })
//   return setString.join(" ")
// }
// console.log(TitleCase("amir reza Abas"))
// reverse string
// function reverseString (str:string){
//   // return str.split("").reverse().join("")
//   const newString = str.split("");
//   let arrayString:string[] = []
//   for(let x = newString.length - 1; x >= 0 ; x--){
//     arrayString.push(newString[x])
//   }
//   return arrayString.join("")
// }
// console.log(reverseString("tehran"))
// console.log("items".length)
// count vowels
// function countVowels(str: string) {
//   const Alphabet = ["a", "b", "c", "i", "y"];
//   const newArray = str.split("");
//   let findVowels: string[] = [];
//   for (let x = 0; newArray.length > x; x++) {
//     if (Alphabet[x] && Alphabet[x] === newArray[x]) {
//       findVowels.push("yes");
//     }
//   }
//   return findVowels.length
// }
// console.log(countVowels("abas"));
// function removeDuplicate (arr:number[]){
//   // one solution
//   let one = arr.filter((value,index)=> arr.indexOf(value) === index);
//   // two solution
//   let two = [...new Set(arr)]
//   // three solution
//   let unique:number[] = [];
//   arr.forEach(element=>{
//     if(!unique.includes(element)){
//       unique.push(element)
//     }
//   })
//   // fore solution
//   arr.reduce((prevous,curren)=>{
//     if(prevous.index(prevous) < 0) prevous.push(curren)
//     return prevous
//   })
// }
// function findMissingAlpha(arr: string[]) {
//   let allAlpha = "abcdefghijklmnopqrstuywxyz";
//   let findIndexAlpha = allAlpha.indexOf(arr[0]);
//   let missingAlpha: Array<string> = [];
//   for (let i = 0; i < arr.length; i++) {
//     findIndexAlpha += 1;
//     console.log(findIndexAlpha);
//     if (allAlpha[findIndexAlpha + 1] !== arr[i]) {
//       missingAlpha.push(allAlpha[findIndexAlpha + 1]);
//     }
//   }
//   return missingAlpha;
// }
// console.log(findMissingAlpha(["a", "b","c", "d"]));
// function allCharacterUnique(str: string) {
//   const charCount = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (charCount[char]) {
//       return false;
//     }
//     charCount[char] = true;
//   }
//   return charCount;
// }
// method 2
// export function allCharacterUnique(str: string) {
//   const charSet = new Set();
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (charSet.has(char)) {
//       return false;
//     }
//     charSet.add(char);
//   }
//   return Array.from(charSet);
// }
// console.log(allCharacterUnique("amir"));
// function checkDuplicate(str:string){
//   const checkStr:{[key : string]:boolean} = {};
//   for(let i =0;i < str.length;i++){
//     if(checkStr[str[i]]){
//       return false
//     }
//     checkStr[str[i]] = true
//   }
//   return checkStr
// }
function checkDuplicate(str) {
    var checkStr = {};
    for (var i = 0; i < str.length; i++) {
        if (checkStr[str[i]]) {
            return false;
        }
        checkStr[str[i]] = true;
    }
    return checkStr;
}
function findFirstRepeatCharacters(str) {
    var saveCharacter = {};
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        saveCharacter[char] = (saveCharacter[char] || 0) + 1;
        console.log(saveCharacter);
    }
    var obj = Object.keys(saveCharacter);
    return Math.max.apply(Math, obj);
}
console.log(findFirstRepeatCharacters("hello"));
