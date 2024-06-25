// https://www.youtube.com/playlist?list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP

// function fibonacci(n: number): number[] {
//     const fib = [0, 1];
//     for (let i = 2; i < n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2];
//     }
//     return fib;
// }

// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(7));
// console.log(fibonacci(12));

// // function 2

// function factorial(n: number): number {
//     let b = 1;
//     for (let i = 2; i <= n; i++) {
//         b = b * i;
//     }
//     return b;
// }

// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(4));
// console.log(factorial(5));

// Prime number ---------------------

// function isPrime(prime: number): boolean {
//     if (prime < 2) {
//         return false;
//     }

//     let sqrtPrime: number = Math.sqrt(prime);
//     for (let i = 2; i <= sqrtPrime; i++) {
//         if (prime % i === 0) {
//             return false; // Not a prime number
//         }
//     }

//     return true; // Prime number
// }

// console.log(isPrime(1));
// console.log(isPrime(5));
// console.log(isPrime(4));

// Power of Two ----------------------

// my

// function isPowser(n:number):boolean {
//     if((n % 2) === 0 || n === 1){
//         return true
//     }
//     return false
// }

// you

// function isPowser(n: number) {
//     if (n < 1) {
//         return false;
//     }
//     while (n > 1) {
//         if (n % 2 !== 0) {
//             return false;
//         }
//         n = n / 2;
//         console.log(n)
//     }
//     return true;
// }

// console.log(isPowser(1));
// console.log(isPowser(2));
// console.log(isPowser(5));

// const numbers = [45, 4, 9, 16, 25];
// let allOver18 = numbers.every(myFunction);

// function myFunction(value, index, array) {
//     return value > 18;
// }

// Math.floor(Math.random() * 100);

const myProducts = [
    {id: 1, name: "phone", price:3000000},
    {id: 2, name: "labtop", price:2000000},
    {id: 3, name: "pencile", price:4000000},
    {id: 4, name: "book", price:3500000},
    {id: 5, name: "car", price:9000000},
    {id: 6, name: "palding", price:11000000},
    {id: 7, name: "show", price:2000000},
    {id: 8, name: "galsses", price:755000000},
    {id: 9, name: "airpade", price:7000},
];

// let pagnation = 0
// let counterEnd = 5;

let pagnation = 0;
const itemsPerPage = 5;

function displayProducts() {
    let counterStart = pagnation * itemsPerPage;
    let counterEnd = counterStart + itemsPerPage;

    const newProduct = myProducts.slice(counterStart, counterEnd);
    console.log(newProduct);
}
pagnation++
pagnation++ 
console.log(displayProducts())
