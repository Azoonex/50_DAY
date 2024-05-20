// https://www.youtube.com/playlist?list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP

function fibonacci(n: number): number[] {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));
console.log(fibonacci(12));

// function 2

function factorial(n: number): number {
    let b = 1;
    for (let i = 2; i <= n; i++) {
        b = b * i;
    }
    return b;
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(5));
