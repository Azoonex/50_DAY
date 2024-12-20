// function checkEquleArray(arr: number[], arr2: number[]) {
//   let checkEqule: boolean[] = [];
//   let i = 0;
//   if (arr.length == arr2.length) {
//     do {
//       if (arr[i] === arr2[i]) {
//         checkEqule.push(true);
//       } else {
//         checkEqule.push(false);
//       }
//       i += 1;
//     } while (i < arr.length);
//   } else {
//     return "Agrument not Equle length !";
//   } 
//   let result = checkEqule.filter((i) => !!i);
//   if(result.length){
//     return ['fix this']
//   }
// }
// checkEquleArray([1, 2, 41], [1, 2, 4]);
// let chat = "chat".charAt(11)
//
// console.log(chat)
//
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12,-6);
//
// // console.log(part)
// // omit / paramerter
//
// // Substring
//
// let strsSub = "Apple, Banana, Kiwi";
// let parts = strsSub.substr(-5);
//
// console.log(  parts)
//
// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat( text2);
//
// let mes1 = "Hello|orld!";
// let mes2 = text1.trimStart();
//
// let mes3 = mes1.split('|')
//
// let myArray =[1,3,5,1]
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(myArray.length)
// let newArray = myArray.toString();
// fruits.sshift()
//
// console.log(fruits)
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChidlren = myGirls.concat(myBoys);
console.log(myChidlren);
