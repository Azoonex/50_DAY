const url = "https/create/react-app"
const person ={
    name: "John",
    age : 35,
    about : "program"
}

const newArray = Object.keys(person)
newArray.map(i => console.log(i))


const person2 = Object.create(person)

// Factory function
type St = string
function FactoryAddress(street:St,city:St,address:St){
    this.street = street;
    this.city = city;
    this.address = address;
}

console.log(new FactoryAddress("127.0.0.1", "127.0.0.1", "127.0.0.1"));


const person1 = {
    name: "John",
    age : 35,
    about : "program"
};

const person3= {
    name: "reza",
    age : 25,
    about : "program"
};

interface typeObj {
    name: string;
    age: number;
    about: string;
}

function toEqual(obj1:typeObj,obj2:typeObj){
    if(obj1 && obj2){
        for(let key in obj1){
            for(let key2 in obj2){
                if(obj1[key2] === obj2[key2]){
                    console.log(obj1[key2] === obj2[key2]);
                }
            }
        }
        return false;
    }
}

console.log(toEqual(person1,person3));


const number:(number)[] = [4,5,6,1,2,3];
number.unshift(5);

const spliceNumber = number.join('/');
const newArrays = spliceNumber.split("/").map(i => Number(i));

// number.splice(2,0,'a','b')
console.log(newArrays);

// console.log(number)

//indexOf
//lastIndexOf
//find
//include
//pop / push
//unshift / shift
//

// number.length = 0;

function arrRange(a:number,b:number){
        let myArray : number[] = [];
        for(let i=a = 0; i <= b; i++){
            myArray.push(i);
        }
        return myArray;
}

console.log(arrRange(3,1))


function includes(arr:number[],searchElement : number){
    let includesArray = arr.indexOf(searchElement);
    if(includesArray !== -1){
        return true
    }
    return false;
}

console.log(includes([2,1,31,2,1,2],55))

function except(arr:number[],removeElement : number){
        return arr.length > 0 ? arr.filter(n => n !== removeElement) : false;
}

console.log(except([121,21,1,3,42,2,56,7,1,1,1,1],1))

//create tab

// function tabs => function tab => arr[]

function createTab (arr:number[],tabActive:string){
    let tabActives = tabActive;
    arr.map(i => i)
//     i => <i onclick={s=> setActive => s} key={i}>
//     {i.tab}
//     </i>
}


// get starting function


// let fun = function (){
//
//
//     console.log('reza',arguments)
// }


// setter and getter object function / try catch new error

let city = {
    name: "shiraz",
    plack : 33,
     street(){
        console.log(this.name)
    },
     setStreet (va:number){
        this.plack = va
    }

}

city.setStreet(55)


console.log(city.plack)

function sum (...arr: number[][]){
    console.log(arr[0].map(i => i))
    let result =  arr[0].reduce((a, b) => a + b);
    console.log('result'+ ' ' +result)
}


sum([1,2,4,4])