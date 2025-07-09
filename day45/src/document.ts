// function chunk(array: Array<number>, size: number) {
//   let firstIndex = 0;
//   const resultArray: Array<Array<number>> = [];
//   for (let x = 0; x < array.length; x++) {
//     let newArray = array.slice(firstIndex, size);
//     (firstIndex += 2), (size += 2);
//     if (newArray && newArray.length > 0) resultArray.push(newArray);
//   }
//   return resultArray;
// }

// console.log(chunk([1, 3, 41, 2, 9, 5, 4, 7, 8, 9], 2));

function compact<T>(array: Array<T>) {
  let result: Array<T> = [];

  array.map((item) => {
    if (!!item === true) {
      result.push(item);
    }
  });
  return result;
}

console.log(compact([1,2,3,"",false,0,10," ","create"]));
