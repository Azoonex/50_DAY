"use strict";
class Employee {
}
let emp = new Employee();
// console.log(emp.age);
// emp.empCode = 123;
// emp.empName = "Swati";
class Employees {
    empName;
    empCode;
    constructor(name, code) {
        this.empName = name;
        this.empCode = code;
    }
}
// subClass
class SaleEmployee extends Employees {
    department;
    constructor(name, code, department) {
        super(name, code);
        this.department = department;
    }
}
let instanceEm = new SaleEmployee("John Smith", 123, "Sales");
// instanceEm.empCode;
class Circle {
    static pi = 3.14;
    pi = 3;
}
// let circleObj = new Circle();
// console.log(circleObj.pi);
class Circles {
    static pi = 3.14;
    static calculateArea(radius) {
        return this.pi * radius * radius;
    }
    calculateCircumference(radius) {
        return 2 * Circle.pi * radius;
    }
}
Circles.calculateArea(5); // returns 78.5
let circleObj = new Circles();
let obj = circleObj.calculateCircumference(5); // returns 31.4000000
console.log(obj);
//circleObj.calculateArea(); &lt;-- cannot call this
// In the above example, the Circle class includes static method calculateArea and non-static method calculateCircumference. As you can see, the static field pi can be accessed in the static method using this.pi and in the non-static (instance) method using Circle.pi.
