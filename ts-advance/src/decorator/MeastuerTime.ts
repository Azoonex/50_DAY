export function MeasureTime(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const original = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const start = Date.now();
    const result = original.apply(this, args);
    const end = Date.now();
    console.log(`Method "${propertyKey}" took ${end - start}ms`);
    return result;
  };

  return descriptor;
}
