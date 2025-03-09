// function sort array for digit

function lenghtSortArray(array: Array<number>) {
  let sortDigit: Array<Array<number>> = [];

  for (let x = 0; array.length > x; x++) {
    if (array[x + 1]) {
      let sort = [array[(array[0], x + 1)]];
      sortDigit.push(sort);
    }
  }
  return sortDigit.length;
}

console.log(lenghtSortArray([1, 2, 4, 5, 7, 81]));

// Dot Product of Two 3D Vectors
type number_type = number[];

function twoGiven(arr1: number_type, arr2: number_type) {
  let vectors: number_type = [0];
  // for(let value of arr1 ){
  //     vectors.push(arr1[])
  // }
  arr1.reduce((_, current, index) => {
    if (current && index) {
      vectors.push(arr1[index] + arr2[index]);
    }
  });

  let sumArray = 0;
  if (vectors.length) {
    sumArray = vectors.reduce(function(a, s) {
        return a += s;
    }, 0);
  }


  console.log(sumArray)

}

twoGiven([1, 3, 14, 1, 4], [2, 1, 41, 4, 1]);
