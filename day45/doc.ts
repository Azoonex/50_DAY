let items = "item1,item2,item3";

// console.log(items.search("item2"),items.lastIndexOf(","));

// let new_items = items.substring(items.search("item2"),items.lastIndexOf(","));
// let split_value = items.split(",")
// console.log(split_value)
// console.log(items.)
// console.log(new_items)

// check the number up
// 12345
// 5
// JavaScript Basic: Exercise-118 with Solution
function checkNumber(count: number, num: number) {
  let counter = count.toString().split("");

  for (let x = 0; x < counter.length - 1; x++) {
    if (parseInt(counter[x]) >= parseInt(counter[x + 1])) {
      return false;
    }
  }
  return true;
}

console.log(checkNumber(123451, 4));
