import { Item } from "./Item";

export class Magazine extends Item {
  issueNumber: number;
  constructor(id: number, title: string, issueNumber: number) {
    super(id, title, "Magazine");
    this.issueNumber = issueNumber;
  }

  getInfo(): string {
    return `Magazine ${this.title} (Issue ${this.issueNumber})`;
  }
}
