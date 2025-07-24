// check the async await

async function todo(todo?: string) {
  return todo;
}

console.log(
  todo().then((v) => {
    console.log(v);
  })
);

// fellate array 44

function fellateArrayRecursion(array: number[]) {
  const result: number[] = [];
  for (let va of array) {
    if (Array.isArray(va)) result = result.concat(fellateArrayRecursion(va));
    else result.push(va);
  }
  return result
}

console.log(fellateArrayRecursion([1,2,3,[1,2,3],[1,2]]))