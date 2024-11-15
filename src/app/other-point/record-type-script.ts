// define an object type with dynamic keys and values. It's particularly useful when you don't know the exact keys beforehand or when you want to create a flexible object structur
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // 'name' | 'age'

type PersonRecord = Record<PersonKeys, string>;

const personRecord: PersonRecord = {
  name: 'Alice',
  age: '30',
};
