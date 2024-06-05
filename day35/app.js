function recrsiveFactorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * recrsiveFactorial(n - 1);
}
console.log(recrsiveFactorial(0));
console.log(recrsiveFactorial(1));
console.log(recrsiveFactorial(5));
