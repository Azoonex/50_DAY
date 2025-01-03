var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var students = [
    { id: 1, name: "ali", score: 19 },
    { id: 2, name: "reza", score: 20 },
    { id: 3, name: "hasan", score: 15 },
    { id: 4, name: "amir", score: 10 },
];
// Average-ScoreAllStudents
function averageScore(arr) {
    var totalled = arr.reduce(function (a, b) { var _a; return a + ((_a = b.score) !== null && _a !== void 0 ? _a : 0); }, 0) / arr.length;
    return arr.length > 0 ? totalled / arr.length : 0;
}
// add new student
function newStudent(student) {
    if (student) {
        students.push(student);
        return "student added successfully ";
    }
    else {
        return "student no found invalid !";
    }
}
newStudent({ name: "mohamed", id: 22, score: 12 });
// remove student
function removeStudent(id) {
    var initialStudent = students.length;
    students = students.filter(function (i) { return i.id !== id; });
    return initialStudent > students.length ? "student is remove" : "not found student";
}
// update score this is not work
function updateScore(id, newScore) {
    var seUpdateFind = false;
    students = students.map(function (i) {
        if (i.id === id) {
            seUpdateFind = true;
            return __assign(__assign({}, i), { score: newScore });
        }
        return i;
    });
    return seUpdateFind ? "Score updated successfully" : "student not found !";
}
// return the all student is score !Question
function returnAllStudent() {
    return students.map(function (_a) {
        var name = _a.name, score = _a.score;
        return ({ name: name, score: score });
    });
}
console.log(returnAllStudent());
function topScore() {
    if (students.length === 0)
        return null;
    return students.reduce(function (topScore, currentScore) {
        var _a, _b;
        return ((_a = currentScore.score) !== null && _a !== void 0 ? _a : 0) > ((_b = topScore.score) !== null && _b !== void 0 ? _b : 0) ? currentScore : topScore;
    }, students[0]);
}
console.log(topScore());
