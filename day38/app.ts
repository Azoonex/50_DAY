// waht is clean code ?

function notFound() {
    return false
}

// fetch server components
async function fetchData() {
    let res = await fetch(`https://localhost.com/api/v1/components`);
    const data = res.ok ? await res.json() : null;


    if (!data || data?.status === 0) {
        return notFound()
    } return true

}


// nice fetching data 
// get url

let paramse = 'https://doctor/api/v1/components'

let formmatedUrl = paramse.substring(0, paramse.length - 1)
formmatedUrl = formmatedUrl.substring(formmatedUrl.lastIndexOf('/') + 1)

// solation 42

function checkThreeNumber(x: number, y: number, z: number) {
    if (y > x && z > y) {
        return 'strict mode';
    } else if (z > y) {
        return 'Soft mode';
    } return 'undefinde'

}

console.log(checkThreeNumber(22, 33, 54))

// soaltion 43

function lessby20_others(x: number, y: number, z: number) {
    const isXEligible = x >= 20 && (x < y || x < z);
    const isYEligible = y >= 20 && (y < x || y < z);
    const isZEligible = z >= 20 && (z < x || z < y);

    return isXEligible || isYEligible || isZEligible;
}

console.log(lessby20_others(33, 44, 55))

