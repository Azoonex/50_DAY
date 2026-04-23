// Write a JavaScript program to add two positive integers without carrying.
// this work the 2 positive

function addPositive(n1: number, n2: number) {
    let result = 0;
    let x = 1;

    while (n1 > 0 && n2 > 0) {
        result += x * ((n1 + n2) % 10);
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
        x *= 10;
    }

    return result;
}

// console.log(addPositive(113,123))

// Write a JavaScript program to find the longest string from a given array of strings. 83

function findeLongest(array: string[]) {
    let max = array[0].length;
    array.map((i) => max = Math.max(max, i.length));
    let result = array.filter((i) => i.length == max);

    return result;
}

console.log(findeLongest(["22", "sdklfjksdjf", "22"]));

// solve the soluation 83 prefecte

