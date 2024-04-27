// function error (mes:string):never {
//     throw new Error(mes);
// }


// function fall () {
//     return error("smothing failed")
// }

// fall()


let myArray : Array<number> = [3,0,2]
let myArray2 : number[] = [3,0,2]
let myArray3 : [number,string] = [3,'amirabas']

myArray.some(res => {
   return res === 3
})