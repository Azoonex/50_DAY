// type ageBrother = {id:number;age:number;name: string}

// type abas = {
//     name : ageBrother["name"];
//     age: ageBrother["age"]
// }

// const person: abas = { age: 24, name: "amirabas" };

// console.log(person);

interface pet {
    name: string
}

let pet : pet;

let dog  = {name : "AlsonBeker",owner:"rudd weatherwax"}

pet = dog


interface Pet {
    name : string
}

function Greet(pet:Pet){
    console.log("hello world" + pet.name)
}

Greet(dog);




// Conditional type
// Conditional type
// conditional type
// condination type
// condination type

// At the heart of most useful program,we have to make decisions based
// decisions
// but givern the fact that values cang be easily introspected besad
// describnle the raltion betwin
// taht looks little like several provide / inferre / 
// initalizing / initializing / initailizing
// initializing / determining / return / made / expressions /above
// above / consider / common / provided / candidate / ideally /ideally / we may want zoo to be inferred as animall[] / we may want / we way want zoo to be infreed as an anima / but because /because / explicitly provide the type when no / candidete / explicity provide the type when no one type is a super / snake rhino / Elephoant / direction / also / cases / cases / cases in typescript / this is kown as contextual typeing . contextul / occurs / contenxtual / when expression / expression / implied/ implied by its location / infer  === result / infer / assignment / when it dide so / when it dide so/ when it dide so / when it dide so/ is was able to infer the type of the mouse Evet / Compatibiliy / compatibility / comp ea e amin reza abas / reza / sara / neda amir / abas / amir  /reza / elhame elhame elhame / elhame / abas / compatiility / based / based / based / on strucurel / strucural subtyping  / structural / structural / structural / typeing is way of relating typeing / consider the following code / contrast / contrast / nominal / contreast / nominal / nominal / consider / consider / the foollowing code / Comparing / Comparing / while primitive  / relatively /given 




let x = (a:number ) => 0
let y = (b:number) => 0

y = x;
x = y;


let items = [1,2,3];

items.forEach((items,index,array)=> console.log(items,index,array));


