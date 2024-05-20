// https://www.youtube.com/playlist?list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP
function fibonacci(n) {
    var fib = [0, 1];
    for (var i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));
console.log(fibonacci(12));
