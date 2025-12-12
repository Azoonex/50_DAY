var url = "https/create/react-app";
var person = {
    name: "John",
    age: 35,
    about: "program"
};
var newArray = Object.keys(person);
newArray.map(function (i) { return console.log(i); });
var person2 = Object.create(person);
function FactoryAddress(street, city, address) {
    this.street = street;
    this.city = city;
    this.address = address;
}
console.log(new FactoryAddress("127.0.0.1", "127.0.0.1", "127.0.0.1"));
var person1 = {
    name: "John",
    age: 35,
    about: "program"
};
var person3 = {
    name: "reza",
    age: 25,
    about: "program"
};
function toEqual(obj1, obj2) {
    if (obj1 && obj2) {
        for (var key in obj1) {
            for (var key2 in obj2) {
                if (obj1[key2] === obj2[key2]) {
                    console.log(obj1[key2] === obj2[key2]);
                }
            }
        }
        return false;
    }
}
console.log(toEqual(person1, person3));
var number = [4, 5, 6, 1, 2, 3];
number.unshift(5);
var spliceNumber = number.join('/');
var newArrays = spliceNumber.split("/").map(function (i) { return Number(i); });
// number.splice(2,0,'a','b')
console.log(newArrays);
// console.log(number)
//indexOf
//lastIndexOf
//find
//include
//pop / push
//unshift / shift
//
// number.length = 0;
function arrRange(a, b) {
    var myArray = [];
    for (var i = a = 0; i <= b; i++) {
        myArray.push(i);
    }
    return myArray;
}
console.log(arrRange(3, 1));
function includes(arr, searchElement) {
    var includesArray = arr.indexOf(searchElement);
    if (includesArray !== -1) {
        return true;
    }
    return false;
}
console.log(includes([2, 1, 31, 2, 1, 2], 55));
function except(arr, removeElement) {
    return arr.length > 0 ? arr.filter(function (n) { return n !== removeElement; }) : false;
}
console.log(except([121, 21, 1, 3, 42, 2, 56, 7, 1, 1, 1, 1], 1));
//create tab
// function tabs => function tab => arr[]
function createTab(arr, tabActive) {
    var tabActives = tabActive;
    arr.map(function (i) { return i; });
    //     i => <i onclick={s=> setActive => s} key={i}>
    //     {i.tab}
    //     </i>
}
// get starting function
// let fun = function (){
//
//
//     console.log('reza',arguments)
// }
// setter and getter object function / try catch new error
var city = {
    name: "shiraz",
    plack: 33,
    street: function () {
        console.log(this.name);
    },
    setStreet: function (va) {
        this.plack = va;
    }
};
city.setStreet(55);
console.log(city.plack);
function sum() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    console.log(arr[0].map(function (i) { return i; }));
    var result = arr[0].reduce(function (a, b) { return a + b; });
    console.log('result' + ' ' + result);
}
sum([1, 2, 4, 4]);
