export interface IBorrowable {
  borrow(userId: string): void;
  returnItem(): void;
  isBorrowed: boolean;
}
