var value = [1, 341233, 134, 123, 23, 12, 1, 34, 1, 1, 3];
var rawData = [
    { id: 1, name: "Ali", age: "27", isActive: "true" },
    { id: 2, name: "Sara", age: "31", isActive: "false" },
    { id: 3, name: "Reza", age: "19", isActive: "true" },
];
function editData(array) {
    return array.map(function (item) { return ({
        id: item.id,
        name: item.name,
        age: Number(item.age),
        isActive: item.isActive === "true" ? true : false
    }); });
}
console.log(editData(rawData));
