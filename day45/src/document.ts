function countDown(num: number) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);

  num--;
  countDown(num);
}

function sumUpTo(n: number) {
  if (n === 1) return 1;

  // console.log(n + sumUpTo(n - 1))

  return n + sumUpTo(n - 1);
}

// console.log(sumUpTo(3));

function reverseString(str: string) {
  let method = [];

  // method one

  const stringToArray = str.split("");

  method[0] = stringToArray.reverse();

  // method two
}

function reverseString2(str: string): any {
  if (str == "") return "";

  return reverseString2(str.substr(1)) + str.charAt(0);
}
// reverseString2("str");

function pageNation(size: number) {
  const array: Array<number | string> = [];
  const current_page = 3;

  for (let x = 0; x < size; x++) {
    let firstSize = x <= 2;
    let centerSize = size / current_page;
    if (firstSize) {
      array.push(x);
    } else if (current_page - 3 && x == 4) {
      array.push("...");
    }
  }

  return array;
}

// console.log(pageNation(30));

// else if (size === x + 1) {
//       array.push(x, x + 1);
//     }

function fibonacci(num: number): any {
  if (num < 2) {
    return num;
  }

  // 6 - 1 5 + 4
  //

  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(6));

function factorial(num: number): any {
  if (num < 2) return 1;

  return num * factorial(num - 1);
}

console.log(factorial(5));

function power(base: number, exponent: number):any {
  if (exponent == 0) return 1;

  return base * power(base, exponent - 1);
}

function printTree(node) {
  console.log(node.name);
  node.children.forEach(child => printTree(child));
}

<<<<<<< HEAD
console.log(printTree())
=======
console.log(power(2, 3));
>>>>>>> a030fd7f09b9904cee36783dee4d6aef5362d58c
