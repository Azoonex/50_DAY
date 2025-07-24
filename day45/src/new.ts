// check the async await

async function todo(todo?:string){
    return todo
}

console.log(todo().then((v)=>{console.log(v)}))
