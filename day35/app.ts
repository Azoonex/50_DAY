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


type whide = {
    uiSize: () => void
}

type hight = {
    uxSize: () => void
}

let fun: whide & hight = {
    uiSize(){

    },
    uxSize() {
        
    },
}

let human : 20 | 30 = 30