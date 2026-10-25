export abstract class Item {
  constructor(
    private _id: number,
    private _title: string,
    protected _category: string,
  ) {}

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  abstract getInfo(): string;
}

