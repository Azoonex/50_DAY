function Logger(constructor: Function) {
  console.log("constructor.name", constructor.name);
}

function TimeStamp(constructor: Function) {
  constructor.prototype.createdAt = new Date();
}

@Logger
@TimeStamp
export class Setup {
  createdAt!: Date;
  start() {}
}

function LogeMethod(
  target: any,
  propertyName: string,
  description: PropertyDescriptor,
) {
  const original = description.value;

  description.value = function (...args: any[]) {
    console.log("method called", propertyName, args);
    return original.apply(this, args);
  };
}

function StringOnly(target: any, propertyName: string) {
  let value: string;

  Object.defineProperty(target, propertyName, {
    get: () => value,
    set: (newValue) => {
      if (typeof newValue !== "string") {
        throw new Error(propertyName + "must be string");
      }
      value = newValue;
    },
  });
}

export class Factory {
  @StringOnly
  name: string = "";
  @LogeMethod
  add(a: number, b: number) {
    return a + b;
  }
}
