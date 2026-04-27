const bil = ["age", "name"];
const newBil = bil.reduce((acc, curr) => {
  acc.push(curr.slice(0, 1));
  return acc;
}, [] as string[]);
console.log(newBil);
