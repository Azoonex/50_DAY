// function content<T, U>(xs: T, u: U) {
//     return Object.assign(xs, u);
// }
function countAndDescrib(element) {
    var diescription = 'Hello im programer !';
    if (element.length === 1)
        diescription = 'Go no value';
    else if (element.length > 0)
        diescription = 'it 1 Eelment';
    if (element.length > 0)
        return [element, diescription];
}
console.log(countAndDescrib(['22dasf', ['dasdf']]));
