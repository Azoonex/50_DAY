function cl(any:any){
    return console.log(any)
}

// TYPE BOOK CASE

type type_bookcase = {
    id : number,
    name: string,
    status? : boolean,
    discount? : boolean,
}

let book_case:type_bookcase[] = [
    {id : 1,name : "be_to"},
]

function createBook (book: type_bookcase) {
    if(book.id !== undefined && book.name !== undefined) {
        book_case.push(book)
    }
    return "name or id is invalid"
}

function removeBook (id:number) {
    let findId = book_case.find(i => i.id === id)
    if(findId) {
        book_case =  book_case.filter(i => i.id !== id)
        return `book with id ${findId.id} it is deleted`
    }else {
        return `status code 404`
    }
}

function returnArray (id: number) {
    let findBook = book_case.find(i => i.id === id)
        if(id && findBook){
           return findBook
        }else {
            return "not found the book is id"
        }
}

cl(returnArray(1))