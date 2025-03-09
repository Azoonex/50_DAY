// function sort array for digit


function lenghtSortArray(array:Array<number>){
    let sortDigit:Array<Array<number>> = [];

    for(let x =0;array.length > x; x++){
       if(array[x + 1]){
        let sort = [array[array[0],x + 1]]
        sortDigit.push(sort)
       }
    }
    return sortDigit.length
}

console.log(lenghtSortArray([1,2,4,5,7,81]))

