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
// Prime number
function isPrime(prime) {
    if (prime < 2) {
        return false;
    }
    var sqrtPrime = Math.sqrt(prime);
    for (var i = 2; i <= sqrtPrime; i++) {
        if (prime % i === 0) {
            return false; // Not a prime number
        }
    }
    return true; // Prime number
}
console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));
