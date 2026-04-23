console.log('reza');

const array = [3,2,1]
function changePosition (arr:Array<number>) {
    for (let i = arr.length - 1; i >= 0; i--) {
        const temp = arr[i];
        console.log(temp)
    }
}

changePosition(array);