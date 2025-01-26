function cl(any) {
    return console.log(any);
}
var book_case = [
    { id: 1, name: "be_to" },
];
function createBook(book) {
    if (book.id !== undefined && book.name !== undefined) {
        book_case.push(book);
    }
    return "name or id is invalid";
}
function removeBook(id) {
    var findId = book_case.find(function (i) { return i.id === id; });
    if (findId) {
        book_case = book_case.filter(function (i) { return i.id !== id; });
        return "book with id ".concat(findId.id, " it is deleted");
    }
    else {
        return "status code 404";
    }
}
function returnArray(id) {
    var findBook = book_case.find(function (i) { return i.id === id; });
    if (id && findBook) {
        return findBook;
    }
    else {
        return "not found the book is id";
    }
}
cl(returnArray(1));
