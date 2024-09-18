function content<T,U>(xs:T,u:U){
    return Object.assign(xs,u)
}

const mergeObject = content({
    name : "mmade",
    hibbites : "male"
},{
    age : 33
})

function cehckEndString(str:string){
    if(str.length <= 6) return false;

    let Scr = "Script"
    
    return str.slice(-6) === Scr


    
}
console.log(cehckEndString("javaScript"))
// solve the new solution 65

