import { Library } from "./Library";
import { Book } from "./module/Book";
import { Magazine } from "./module/Magazine";

const library = new Library();

const b1 = new Book(1, "clean Code", "Rab s martin");
const m2 = new Magazine(2, "nation geographic", 202);

library.addItem(b1);
library.addItem(m2);

library.listAll();

b1.borrow("user123");

console.log(b1.isBorrowed);

b1.returnItem();
