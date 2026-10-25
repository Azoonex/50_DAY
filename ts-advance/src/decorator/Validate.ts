export function Validate(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const original = descriptor.value;

  descriptor.value = function (...args: any) {
    for (let arg of args) {
      if (arg === null || arg === undefined || arg === "") {
        throw new Error(
          `Validation failed in method ${propertyKey} : empty argument`,
        );
      }
    }
    return original.apply(this, args);
  };
}
