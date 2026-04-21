const person = new Map();

person.set(1, "ali");
console.log(person.has(1));
person.delete(1);
const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Nima" },
];

const map = new Map(users.map((user) => [user.id, user.name]));

console.log(map);
const carsBrand = [
  { brand: "BMW", color: "red" },
  { brand: "Audi", color: "black" },
  { brand: "BMW", color: "red" },
  { brand: "Kia", color: "red" },
];

const colorCount = new Map<string, number>();

carsBrand.forEach(({ color }) => {
  const current = colorCount.get(color) || 0;

  colorCount.set(color, current + 1);
});


console.log(colorCount);

const usersNew = [
  { id: 10, name: "Amin" },
  { id: 11, name: "Reza" }
];


const formatUser = new Map<number,string[]>();

usersNew.forEach((value)=>{
  if(!formatUser.has(value.id)){
    formatUser.set(value.id,[value.name])
  } else{
    
    const newValue = formatUser.get(value.id)
    formatUser.set(value.id,)
  }
})