var map = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
]);
function isValid(s) {
    var stack = [];
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var c = s_1[_i];
        if (map.has(c)) {
            stack.push(map.get(c));
        }
        else if (stak.pop() !== c) {
            return false;
        }
    }
    return stack.length === 0;
}
;
