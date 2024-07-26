enum Size {
    small = "sm",
    medium = "md",
    large = "lg",
}

let newSize: Size = Size.medium;

console.log(newSize);

function checkNumber(num: number, options = "amirabas"): string {
    if (num) {
        return "amirabas";
    }
    if (num === undefined) {
        return options;
    }

    return "default value";
}

checkNumber(22);

function proccedItems(item: string | number): number {
    if (typeof item === "string") {
        console.log("amir reza");
        return 1;
    }
    if (typeof item === "number") {
        console.log("amirabas");
        return 2;
    }
    return 2;
}

// type whide = {
//     uiSize: () => void
// }

// type hight = {
//     uxSize: () => void
// }

// let fun: whide & hight = {
//     uiSize(){

//     },
//     uxSize() {

//     },
// }

// let human : 20 | 30 = 30

// data types

const wrold =
    "we'll cover them in general and in the next chapter we'll talk about  each of them in detial";

//Number

let n = 111;

console.log("names" / 2);

let names = "john";

console.log(`hello ${names} !`);

type Age = string | null;

const ali: Age = "22";

("object type not work to do that we can use the if statement and the ");

("the if () statement evaluates the expressions int he parentess ad converts the result tot a boolean ");

if (2233) {
    console.log("not found")
} else if (2 > 1){
    console.log('mmade')
} else{
    console.log('not found')
}

let result = (22 > 33)  ? console.log('value 1') : console.log("value 2")

let mes = (22 > 33) ? "hello man" : (33 < 22) ? "hello boy" : 22 > 33 ? "hello new" : "hello"

const api = ['data','items','caractrer',1,2,3,4,1,44,66,55,5,6,7,8]

const resposve = api.find(i => i === 'data')
const res2 = api.find(i => {
    if(i === 'amir' ){
        return '1'
    } else {
        return '-1'
    }
})


const res3 = api.filter(i => i > 0)
const setApi = new Set(api)


console.log(resposve,res2,res3)
console.log(setApi)

const items = api.entries()

console.log(items)

// add word
// be have do say go can get would  get can go say do make know know will think think want look use find give  tell work may should call try ask need feel become feel need ask try call should may work tell give find use ask need feel becom leave put mean keep let mean keep let begin seem seem help talk help seem seem begin let keep mean put leave become feel need ask start might might might show hear play run move likelike live believe show bring bring bring bring happen functionhappen happen must must must must must must mutst write provide provider sit stand lose stand lose pay meet include continue continue continue continue set include include continu continue set include meet pay lose stand sit sit stand watch understand understand understand watch  follow stop create speak read allow read speak create stop follow watch understand lead change learn set continue speak read allow  add spend spend grow open walk win offer remember love consider appear consider consider appear 
// remember 
// offer 
// consider 
// appear 
// buy
// wait wait buy serve die send expect build stay fall cut reach kill remain remain remain kill reach cut fall stay build expect send die serve wait buy remain kill reach cut fall stay build expect send die serve wait but



