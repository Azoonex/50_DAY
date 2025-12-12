//class this / constructor / constructor
// public and private / readonly
//
var Bookcase = /** @class */ (function () {
    function Bookcase() {
        this.bookcasedata = [
            {
                id: 1,
                name: "next",
                exiting: true,
            },
            {
                id: 2,
                name: "javascript",
                exiting: false,
            },
            {
                id: 3,
                name: "typescirpt",
                exiting: false,
            },
            {
                id: 4,
                name: "react",
                exiting: true,
            },
        ];
    }
    Bookcase.prototype.checkaccessBook = function () {
        return this.bookcasedata.map(function (i) { return ({
            name: i.name,
            access: i.exiting,
        }); });
    };
    // finde / remove / add
    Bookcase.prototype.funAdd = function (book) {
        this.bookcasedata.push(book);
    };
    Bookcase.prototype.funFinde = function (name) {
        var findBook = this.bookcasedata.filter(function (i) { return i.name === name; });
        if (findBook.length === 0) {
            return "not found";
        }
        return findBook;
    };
    Bookcase.prototype.funRemove = function (id) {
        this.bookcasedata = this.bookcasedata.filter(function (i) { return i.id !== id; });
    };
    return Bookcase;
}());
var bookcasInstance = new Bookcase();
console.log(bookcasInstance.funFinde('react'));
// chat
// 4. کلاس بدون Type مناسب:
// تعریف ساختار کتاب (id, name, exiting) به صورت مستقیم در متدها ظاهر شده است. بهتر است یک type یا interface برای کتاب تعریف کنید.
// بهبود پیشنهادی:
// typescript
// Copy code
// interface Book {
//     id: number;
//     name: string;
//     exiting: boolean;
// }
// class Bookcase {
//     private bookcasedata: Book[] = [
//         { id: 1, name: "react", exiting: true },
//         { id: 2, name: "javascript", exiting: false },
//         { id: 3, name: "typescript", exiting: false },
//         { id: 4, name: "react", exiting: true },
//     ];
//     // سایر متدها...
// }
// 5. اضافه کردن پیام موفقیت/خطا:
// متدهایی مانند funAdd و funRemove خروجی خاصی ندارند. بهتر است در صورت موفقیت یا خطا، پیامی نمایش داده شود.
// مثال برای funRemove:
// typescript
// Copy code
// funRemove(id: number) {
//     const initialLength = this.bookcasedata.length;
//     this.bookcasedata = this.bookcasedata.filter((i) => i.id !== id);
//     if (this.bookcasedata.length < initialLength) {
//         console.log(`کتاب با شناسه ${id} با موفقیت حذف شد.`);
//     } else {
//         console.log(`کتاب با شناسه ${id} یافت نشد.`);
//     }
// }
// نسخه نهایی کلاس پس از اصلاح:
// typescript
// Copy code
// interface Book {
//     id: number;
//     name: string;
//     exiting: boolean;
// }
// class Bookcase {
//     private bookcasedata: Book[] = [
//         { id: 1, name: "react", exiting: true },
//         { id: 2, name: "javascript", exiting: false },
//         { id: 3, name: "typescript", exiting: false },
//         { id: 4, name: "react", exiting: true },
//     ];
//     checkaccessBook() {
//         return this.bookcasedata.map((i) => ({
//             name: i.name,
//             access: i.exiting,
//         }));
//     }
//     funAdd(book: Book) {
//         this.bookcasedata.push(book);
//         console.log(`کتاب "${book.name}" با موفقیت اضافه شد.`);
//     }
//     funFinde(name: string) {
//         const foundBooks = this.bookcasedata.filter((i) => i.name === name);
//         if (foundBooks.length === 0) {
//             console.log(`هیچ کتابی با نام "${name}" یافت نشد.`);
//         }
//         return foundBooks;
//     }
//     funRemove(id: number) {
//         const initialLength = this.bookcasedata.length;
//         this.bookcasedata = this.bookcasedata.filter((i) => i.id !== id);
//         if (this.bookcasedata.length < initialLength) {
//             console.log(`کتاب با شناسه ${id} با موفقیت حذف شد.`);
//         } else {
//             console.log(`کتاب با شناسه ${id} یافت نشد.`);
//         }
//     }
// }
