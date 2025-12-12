// Remove duplicate values from js array
// that may or may not contain duplicates

// let names = ["mike","mike","mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];

const person = {
        name : "John",
    age : 29
}
// brake notation
person["name"] = "amir";

console.log(person);


// Increment
// Arithmetic / Arithmetic / Arithmetic / assignment / comparison / comparison / comparison
let x = 10;

x %= 6
console.log(x++)

// strict Equality (type + value) === / Lose Equality ==
// Logical operator
// falsy (false) => undefined / null / 0 / false / '' / NaN
// Anything that is not falsy => truthy
// const userColor = undefined;
// const defaultColor = undefined

// Read / Write / Execute
// operators precedence
// swap value
let a = "red";
let b = "blue"

b = a;
a = b;

console.log(a);

// english
// ATTic / Basement / garage /
//Attic / Basement /
// 6 / 12 good morning
// 24 / 16 / good afternoon
let hour = 4;

if(hour >= 6 && hour < 12){
    console.log('good morning')
} else if (hour > 16 && hour < 23){
    console.log('good afternoon')
} else {
    console.log('good everything')
}

// for loop

// for(let i = 0; i < 5; i++){
//     console.log(`hello number ${i}`)
// }

let i =20;
// while(i < 6){
//     console.log(`hello number while ${i}`)
//     i++
// }

// do while

do{
    console.log(`hello number while ${i}`)
    i++
} while (i <= 4);

while(hour < 12){
    console.log(`hello number while ${hour}`)
    hour += 1;
}

// for in loop
const aboutPerson = {
    name: "John",
    age : 29,
    status : "pending",
    skill : "admin"
}
// bracket notation
for(let key in aboutPerson){
    console.log(key,aboutPerson[key]);
}

// for in loop for Abject
// for of loop for Array

function maxNumber(a:number,b:number){
   if(!isNaN(a) && !isNaN(b)){
       return a > b ? a : b
   }
   return "this is invalid"
}

console.log(maxNumber(5,33))


function isLandscape(width:number,height: number){
    return (width > height);
}

console.log(isLandscape(22,33))


function carSpeed(speed:number){
    const speedLimit = 70;
    let point:null | number = null;
    if(speed <= speedLimit){
        return "ok"
    } else {
        point = (speed - speedLimit) / 5
    }
    if(point > 12){
        return "this suspended"
    }
    return point;
}

console.log(carSpeed(100));

function showNumber(num:number){
    for(let i = 0;i < num;i++){
        const mes = (i % 2 === 0) ? "Even" : "Odd";
        console.log(i + "-" + mes)
    }
}

showNumber(10);

function countTruthy(num:any[]){
        let truthyCount  :null | number= null;
       for(let value of num){
           value  &&  ++truthyCount
       }
    return truthyCount;
}

console.log(countTruthy([null,"",false,1,2,31,1,31]))

const movie = {
    title : "game",
    dateCreate : 2002,
    rating : 5,
    director : "b"
}

function showProperty(obj:any{}){
    for(let key in  obj){
       if(typeof obj[key] === "string")
           return key + obj[key]
    }
}

showProperty(movie);

function sum (num:number){
    let sum = 0;

    for(let i=0; i<num;i++)
        if(i % 3 === 0 || i % 5 === 0 )
            sum++

    return sum
}

console.log(sum(10))


function calculateAverage(arr: number[]){
    let sum= 0;
    let findalScor:null | number = null;

    if(arr.length !== 0){
      for(let value of arr){
          sum += value
      }
    findalScor= sum / arr.length
    }
   if(findalScor >= 59){
       return "F"
   } else if (findalScor >= 60 && findalScor <= 69 ){
       return "D"
   } else if (findalScor >= 70 && findalScor <= 79 ){
       return "C"
   }else if (findalScor >= 80 && findalScor <= 89 ){
       return "B"
   }else if (findalScor >= 90 && findalScor <= 100 ){
       return "A"
   }

}

console.log("the average sum " + calculateAverage([80,80,80,80]))


function  showStar (star:number){
    let stars = 0;
    for(let i = 0; i < star; i++){
            ++stars
            console.log(stars);
    }
}
showStar(2)

function factorize(num:number){
    for(let factor = 2;factor<num;i++){
        let isPrime = true;
        if(number % 2 === 0){
            isPrime = false;
            break
        }
        if(isPrime) console.log(number)
    }
}


function showPrimes(limit:number){
    for(let number =2;i<limit;i++)
        factorize(number)
}

showPrimes(5);
// factorize



// method for object