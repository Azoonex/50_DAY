function content<T, U>(xs: T, u: U) {
    return Object.assign(xs, u);
}

const mergeObject = content(
    {
        name: "mmade",
        hibbites: "male",
    },
    {
        age: 33,
    }
);

function cehckEndString(str: string) {
    if (str.substring(str.length - 6, str.length) === "Script") {
        return true;
    }
    return false;

    // 7 - 6 1,7
}
console.log(cehckEndString("amirabas"));
// solve the new solution 65

function checknameCity(str: string) {
    if (str.length <= 3) return false;
    else if (str.substring(0, 3) === "Los" || str.substring(0, 3) === "Now") {
        return true;
    }
    return false;
}

console.log(checknameCity("Now"));

// solve the solution 66

function checkP(str: string) {
    if (str.length <= 1) return false;
    let firstcharacter = str.substr(0, 1);
    let lastCharacter = str.substr(str.length - 1);

    if (firstcharacter === "p" || lastCharacter === "p") return true;
    return str;
}

console.log(checkP("php"))

// solve the solution 67

function newString(str:string,n:number){
    let first = str.substring(0,n);
    let last = str.substring(str.length - n)
    return first + last
}

console.log(newString('amirabas',2))

// solve the soluation 67 compute compute compute compute compute compute computes

function compute(arr : number[]){
    let sum = 0;

    // for(let i =0;i < arr.length ; i++ ){
    //     sum += arr[i]
    // }

    // arr.forEach(i => {
    //     sum += i
    // })

   sum = arr.reduce((x,y) => {
         return  x + y
    },0)

    return sum
    
}

console.log(compute([33,44,55]))


// rotate array
function rotateArray(arr: string[]){
    if(arr.length < 3) return false;
    return arr.re
}



// store 1
// there was boy named john who was so lazy,he could't even bother to change his clothes/ one day he saw that the apple tree in their yar was full of frutis on day he saw that the apple tree in their yard was full of fruits / He wanted to eat some apples but he was too lazy to climb the terr and take the fruits climb clim the tree and take the fruits so he lay dow underneath the tree and waited so he lay down underneath the tree and waited for the fruits to fall off.john waited and waited untilhe was very hungry but the apples never fell.laziness can get you nowhere.if you want something you, need to work hard for it.