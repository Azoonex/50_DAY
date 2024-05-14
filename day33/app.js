var Years = ["2", "amirabas", "weekind"];
if (Years[2].length === 7) {
    console.log("nice ok");
}
else {
    console.log("error");
}
var fruits = ["banana", "apple", "peach"];
console.log(Object.keys(fruits)); // increasring / exteds
fruits.forEach(function (i, o) {
    console.log(o + 1 + ":", i);
});
console.log(fruits.reverse());
var newFruits = fruits.keys();
for (var _i = 0, newFruits_1 = newFruits; _i < newFruits_1.length; _i++) {
    var key = newFruits_1[_i];
    console.log("".concat(key, " : ").concat(fruits[key]));
}
var nums = [-1, 0, 1, 2, -1, -4];
for (var i = 0; i < nums.length; i++) {
    console.log(nums[i] + 3);
}
