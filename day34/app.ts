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

function isPowser(n: number) {
    if (n < 1) {
        return false;
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n / 2;
        console.log(n)
    }
    return true;
}

console.log(isPowser(1));
console.log(isPowser(2));
console.log(isPowser(5));


try {
    adddlert("Welcome guest!");
} catch (err) {
    document.getElementById("demo").innerHTML = err.message;
}