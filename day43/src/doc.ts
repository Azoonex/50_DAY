// let object = {test :1}

// console.log(object["test"])

function findUniqueNumber(arr: Array<number>) {
  const count = arr.reduce((acc: Record<number, number>, num: number) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(count).find((key) => count[key] === 1);
}

const numbers = [5, 5, 10];
console.log(findUniqueNumber(numbers));
