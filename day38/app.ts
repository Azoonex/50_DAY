// waht is clean code ?

function notFound (){
    return false
}

// fetch server components
async function fetchData() {
    let res = await fetch(`https://localhost.com/api/v1/components`);
    const data = res.ok ? await res.json() : null;


    if(!data || data?.status === 0){
        return notFound()
    } return true

}


// nice fetching data 

