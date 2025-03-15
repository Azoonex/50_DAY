const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
const product = numbers.reduce((accumulator, currentValue) => {
  return accumulator * currentValue;
});
const maxNumber = numbers.reduce((accumulator, currentValue) => {
  return Math.max(accumulator, currentValue);
});
const word = ["tehran","shiraz"];
const newWorld = word.reduce((accumulator,currentValue)=>{
  return accumulator + "+" + currentValue 
})

console.log(newWorld)


const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = fruits.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});
console.log(count);