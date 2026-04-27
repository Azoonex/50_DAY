const cacheStore = new Map<string, any>();

export function Cache(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const cacheKey = propertyKey + JSON.stringify(args);

    if (cacheStore.has(cacheKey)) {
      console.log(`Cache hit → ${propertyKey}`);
      return cacheStore.get(cacheKey);
    }

    const result = original.apply(this, args);
    cacheStore.set(cacheKey, result);

    return result;
  };

  return descriptor;
}
