console.log(Math.PI);

// Calculate the area of circle

class Circle {
  private PI = Math.PI;

  area(radios: number) {
    return this.PI * radios * radios;
  }
};

const circle = new Circle();

console.log(circle.area(22))
console.log(Math.E);
console.log(Math.round(3.9999999));

console.log(Math.floor(324.23423233))
console.log(Math.ceil(323));

console.log(Math.trunc(33.3333333333333))

console.log(Math.pow(3,2))
3**2;


console.log(Math.sqrt(120));

