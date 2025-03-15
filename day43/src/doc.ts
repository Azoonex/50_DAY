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
const students = ["Ali", "Reza", "Sara", "Ali", "Reza", "Ali"];

function repeat_Name(arr: Array<string>) {
  let all_student: null | Record<string, number> = null;
  if (arr.length > 0) {
    all_student = arr.reduce((acc: Record<string, number>, current) => {
      acc[current] = (acc[current] || 0) + 1;
      return acc;
    }, {});
  }
  return all_student;
}

console.log(repeat_Name(students));
