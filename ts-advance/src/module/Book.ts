import { IBorrowable } from "../interface/IBorrowable";
import { Item } from "./Item";

export class Book extends Item implements IBorrowable {
  public author: string;
  public isBorrowed = false;
  constructor(id: number, title: string, author: string) {
    super(id, title, "Book");
    this.author = author;
  }

  borrow(userId: string): void {
    if (this.isBorrowed) throw new Error("Book already borrowed");

    this.isBorrowed = true;

    console.log(`book is borrow by user ${userId}`);
  }

  returnItem(): void {
    this.isBorrowed = false;
  }

  getInfo(): string {
    return `Book: ${this.title} by ${this.author}`;
  }
}
