const value = [1, 2, 3, 41, 2, 14, 10];

let newValue = value.map((i) => i);

const enum Size {
  sm = 1,
  lg = 2,
}

const circle: Size = Size.sm;

console.log(circle);

// union types / aliases type / intersection type / nullable type

type drag = {
  drag: () => void;
};

type resize = {
  resize: () => void;
};

const action: drag & resize = {
  drag: () => {},
  resize: () => {},
};

// nullish coalescing operator

let speed: number | null = null;

let ride = {
  ride: speed ?? 30,
};

function checkNumber(link: number | string | null): number {
  if (link !== undefined) return 33;
  return 0;
}

const input = <HTMLInputElement>document.getElementById("input");

// unknown type unknown unknown unknown unknown unknown types

function checkDocument(document: unknown) {
  if (typeof document === "string") {
    return document.length;
  }
  return "Hold";
}
