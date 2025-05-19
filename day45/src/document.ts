class Person<T, K> {
  constructor(public key: T, private value: K) {}
  static ArrayUtils<T>(value: T) {
    return [value];
  }
}

const newPerson = new Person<string, number>("quantity", 22);

// generic function interface

interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetching<T>(url: string): Result<T> {
  if (url == "all") {
    return { data: null, error: null };
  }
  return { data: null, error: null };
}

interface Products {
  title: string;
}

interface Category {
  name: string;
}

const allData = fetching<Products>("url");

allData.data?.title;

// limit generic type

function create<T extends string | boolean>(size: T) {
  return size;
}

const createCircle = create("32");

// lesson 63 inherit class

// exercise 63

// keyof

// exercise 64



