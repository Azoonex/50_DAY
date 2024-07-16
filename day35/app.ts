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
    confirm.log('not found')
}

let result = (22 > 33)  ? console.log('value 1') : console.log("value 2")

let mes = (22 > 33) ? "hello man" : (33 < 22) ? "hello boy" : 22 > 33 ? "hello new" : "hello"


