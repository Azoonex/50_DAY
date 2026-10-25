import { Item } from "./module/Item";

export class Library<T extends Item> {
  private item: T[] = [];
  addItem(item: T): void {
    this.item.push(item);
  }

  findById(id: number): T | undefined {
    return this.item.find((i) => i.id === id);
  }

  listAll(): void {
    this.item.forEach((i) => console.log(i.getInfo()));
  }
}
