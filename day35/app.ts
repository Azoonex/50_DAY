enum Size {
    small = "sm",
    medium = "md",
    large = "lg",
}

let newSize: Size = Size.medium;

console.log(newSize);

function checkNumber(num: number,options= "amirabas"): string {
    if (num) {
        return "amirabas";
    }
    if (num === undefined) {
        return options;
    }
    
    return "default value";
}

checkNumber(22)
