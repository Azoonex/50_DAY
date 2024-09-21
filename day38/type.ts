// function content<T, U>(xs: T, u: U) {
//     return Object.assign(xs, u);
// }

// const mergeObject = content(
//     {
//         name: "mmade",
//         hibbites: "male",
//     },
//     {
//         age: 33,
//     }
// );

// function cehckEndString(str: string) {
//     if (str.substring(str.length - 6, str.length) === "Script") {
//         return true;
//     }
//     return false;

//     // 7 - 6 1,7
// }
// console.log(cehckEndString("amirabas"));
// // solve the new solution 65

// function checknameCity(str: string) {
//     if (str.length <= 3) return false;
//     else if (str.substring(0, 3) === "Los" || str.substring(0, 3) === "Now") {
//         return true;
//     }
//     return false;
// }

// console.log(checknameCity("Now"));

// // solve the solution 66

// function checkP(str: string) {
//     if (str.length <= 1) return false;
//     let firstcharacter = str.substr(0, 1);
//     let lastCharacter = str.substr(str.length - 1);

//     if (firstcharacter === "p" || lastCharacter === "p") return true;
//     return str;
// }

// console.log(checkP("php"));

// // solve the solution 67

// function newString(str: string, n: number) {
//     let first = str.substring(0, n);
//     let last = str.substring(str.length - n);
//     return first + last;
// }

// console.log(newString("amirabas", 2));

// // solve the soluation 67 compute compute compute compute compute compute computes

// function compute(arr: number[]) {
//     let sum = 0;

//     // for(let i =0;i < arr.length ; i++ ){
//     //     sum += arr[i]
//     // }

//     // arr.forEach(i => {
//     //     sum += i
//     // })

//     sum = arr.reduce((x, y) => {
//         return x + y;
//     }, 0);

//     return sum;
// }

// console.log(compute([33, 44, 55]));

// // rotate array
// // function rotateArray(arr: string[],rotate : boolean){
// //     if(rotate) arr.unshift(arr.pop())

// // }
// //

// function checkArry(str: number[]) {
//     let posend = str.length - 1;

//     if (str.length <= 1) return false;

//     if (str[0] === 1 || str[posend] === 1) {
//         return "this is ok";
//     } else return false;
// }

// console.log(checkArry([1, 3, 5, 3, 3, 1]));

// function middleArry(arr1: number[], arr2: number[]) {
//     let middleArry = Math.floor(arr1.length / 2);
//     let middleArry2 = Math.floor(arr2.length / 2);

//     return arr1[middleArry] + arr2[middleArry2];
// }

// console.log(
//     middleArry([1, 3, 5, 6, 3, 2, 4, 5, 3], [1, 3, 5, 6, 3, 2, 4, 5, 3])
// );
// // class object oraneted programing

// class ampoinment {
//     readonly id: number;
//     public name: string;
//     protected employees: string[] = [];

//     constructor(n: string) {
//         this.name = n;
//     }

//     addempoees(add: string) {
//         this.employees.push(add);
//     }
//     prientemployees() {
//         console.log(this.employees);
//     }
// }

// class itDeparment extends ampoinment {
//     public allTeame: string[] =[];
//     constructor(name: string[]) {
//         super("content");
//     }

//     addEmploes(n: string) {
//         this.allTeame.push(n);
//     }

//     changeNameEmploes(name : string){
//         this.employees.push[name]
//     }
// }

// const it = new itDeparment(['amirabas'])
// it.addEmploes('reza')

// console.log(it)

// const arrcitve = new ampoinment("contecting");
// arrcitve.addempoees("max");
// console.log(arrcitve);



// console.log('amir')

// type arrs = number[];

// function findLarge_small(arr: arrs) {
//     let first = arr[0];
//     let last = arr[arr.length - 1];

//     if (first > last) {
//         return Array.from({ length: 3 })
//             .map((i = first, index) => [i])
//             .flat();
//     } else if (first < last) {
//         return Array.from({ length: 3 })
//             .map((i = last, index) => [i])
//             .flat();
//     }
// }

// console.log(findLarge_small([2, 2, 4, 5, 6, 7, 83, 3, 85]));

// // solve the new solution 74

// function createArraMidlle(arr1: arrs, arr2: arrs) {
    
//     let firstmdiddle = arr1[Math.floor(arr1.length - 1) / 2];
//     let lastmiddle = arr2[Math.round(arr2.length - 1) / 2];
//     return [firstmdiddle,lastmiddle]
// }

// console.log(createArraMidlle([1,3,4],[4,6,7]))


function checkIntegerArray (myArray: number[]){
    if(myArray.length > 2) return false;
    let include = myArray.includes(1 && 2)

    return include
}

console.log(checkIntegerArray([20,2]))

// solve the solution 77

function checkArryint(arr: number[]){
    if(arr.length > 2) return false;
    let Successe = arr.includes(30 && 40);
    return Successe
}

console.log(checkArryint([20, 40]));
