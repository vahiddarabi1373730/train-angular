// // Partial<Type>
// // making all properties of a given type optional
//
// interface Todo {
//   title: string;
//   description: string;
// }
//
// function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
//   return { ...todo, ...fieldsToUpdate };
// }
//
// const todo1 = {
//   title: 'organize desk',
//   description: 'clear clutter',
// };
//
// const todo2 = updateTodo(todo1, {
//   description: 'throw out trash',
// });
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// // Required<Type>
//
// interface Props {
//   a?: number;
//   b?: string;
// }
//
// const obj: Props = { a: 5 };
//
// const obj2: Required<Props> = { a: 5 };
// // Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Readonly<Type>
// // Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.
//
// interface TodoReadOnly {
//   title: string;
//   description: string;
// }
//
// const todoReadOnly: Readonly<TodoReadOnly> = {
//   title: 'test',
//   description: 'test',
// };
// todoReadOnly.title = 'mamado';
// // Cannot assign to 'title' because it is a read-only property.
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// // Record<Keys, Type>
// // Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.
//
// type CatName = 'miffy' | 'boris' | 'mordred';
//
// interface CatInfo {
//   age: number;
//   breed: string;
// }
//
// const cats: Record<CatName, CatInfo> = {
//   miffy: { age: 10, breed: 'miffy' },
//   boris: { age: 12, breed: 'boris' },
//   mordred: { age: 13, breed: 'mordred' },
// };
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Pick<Type, Keys>
// // Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type
//
// interface TodoPickInterface {
//   title: string;
//   description: string;
//   completed: boolean;
// }
//
// type TodoPreview = Pick<TodoPickInterface, 'title'>;
//
// const todo: TodoPreview = { title: 'mamdoo' };
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Omit<Type, Keys>
// // Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals). The opposite of Pick
//
// interface TodoOmitInterface {
//   title: string;
//   description: string;
//   completed: boolean;
// }
//
// type TodoOmitPreview = Omit<TodoOmitInterface, 'description'>;
//
// const todoOmit: TodoOmitPreview = { title: 'vahid', completed: true };
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Exclude<UnionType, ExcludedMembers>
// // create a new type by excluding members of U from T
// // type T0 = Exclude<"a" | "b" | "c", "a">;
// // type T0 = "b" | "c";
//
// type T0 = Exclude<'a' | 'b' | 'c', 'a'>;
// const Todo0: T0 = 'c';
// type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>; //  'c'
// const Todo: T1 = 'c';
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Extract<Type, Union>;
// // create a new type by extracting the members of T that are assignable to U
//
// type E0 = Extract<'a' | 'b' | 'c', 'b' | 'a'>;
// const eExample: E0 = 'a'; //"b" | "a"
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// // NonNullable<Type>
// // remove null and undefined from a union type.
// // حق assign کردن null یا undefined را نداریم
// type N0 = NonNullable<string | number | undefined>;
// const nExample: N0 = null; // خطا میدهد چون نباید undefined یا null باشد
// const n1Example: N0 = 'vahid';
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// // Parameters<Type>
// // extracts the parameter types of a function type T.
//
// type P0 = (name: string) => void;
// type P1 = Parameters<P0>;
// const pExample: P1 = ['vahid'];
//
// type P2 = (name: string, age: number) => void;
// type P3 = Parameters<P2>;
// const p1Example: P3 = ['vahid', 12];
//
// type P4 = (name: string, age?: number) => void;
// type P5 = Parameters<P4>;
// // چون age اختیاری است
// const p2Example: P5 = ['vahid'];
//
// type P6<T> = (arg: T) => T;
// type P7 = Parameters<P6<string[]>>;
// const p3Example: P7 = [['vahid', 'hamed']];
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // ReturnType<Type>
// // یک type میگیرد
//
// type R0 = (name: string) => string;
// type R1 = ReturnType<R0>; // T1 is equivalent to string
// const rExample: R1 = '12';
//
// // چون باید از توع string باشد
// const rExample1: R1 = 12;
//
// type R2<T> = (arg: T) => T;
// type R3 = ReturnType<R2<number>>; // T5 is equivalent to number
// const rExample2: R3 = 12;
//
// // چون باید از توع number باشد
// const rExample3: R3 = 'vahid';
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // InstanceType<Type>
// // extract the instance type of a constructor function T
// class MyClass {
//   public name: string;
//
//   constructor(name: string) {
//     this.name = name;
//   }
// }
//
// type I0 = InstanceType<typeof MyClass>;
// const iExample: I0 = new MyClass('vahid');
// console.log(iExample.name);
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // keyof type operator
// type t1 = { x: 12; y: 12 };
// type k1 = keyof t1;
// const e1: k1 = 'x';
//
// // If the type has a string or number index signature, keyof will return those types instead
// type t2 = { [key: number]: unknown };
// type k2 = keyof t2;
// const e2: k2 = 12;
// const e3: k2 = '12'; // Type string is not assignable to type number
//
// type keyofT3 = { [key: string]: unknown };
// type keyofT4 = keyof keyofT3;
// const e4: keyofT4 = '12';
// const e5: keyofT4 = 2333;
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // type typeof
//
// let hello = 'hello';
// let hello1: typeof hello;
// hello1 = 12; //number is not assignable to type string
//
// function f() {
//   return { x: 10, y: 3 };
// }
//
// type P = ReturnType<f>; // f refers to a value, but is being used as a type here. Did you mean typeof f?
// type P11 = ReturnType<typeof f>;
//
// const ffReturnType = () => {
//   return 'test';
// };
// type fffReturnType = ReturnType<typeof ffReturnType>;
// const ffffExample: fffReturnType = 'hamed';
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Mapped Types
//
// type OnlyBooleanAndHorse = {
//   [key: string]: boolean;
// };
//
// const conforms: OnlyBooleanAndHorse = {
//   hasName: true,
//   hasFamily: false,
// };
//
// type Features = {
//   darkMode: () => void;
//   lightMode: () => void;
//   naturalMode: () => void;
// };
//
// type OptionsFlags<T> = {
//   [property in keyof T]: boolean;
// };
//
// type FeaturesOptions = OptionsFlags<Features>;
// const sample: FeaturesOptions = {
//   darkMode: true,
//   lightMode: false,
//   naturalMode: true,
// };

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Indexed Access Types

// type P = { age: number; name: string; isCorrect: boolean };
// type P1 = P['age'];
// const example: P1 = 12;
// type P2 = P['name'];
// const example2: P2 = 'vahid';
// type P3 = P['name' | 'age'];
// const example3: P3 = 'vahid';
// const example4: P3 = 12;
// type P4 = P[keyof P];
// const example5: P4 = true;
// const example6: P4 = 12;
// const example7: P4 = 'vahid';
//
// type AliveOrName = 'age' | 'name';
// type I3 = P[AliveOrName]; //P[در اینجا باید یا age دهیم یا name یا isCorrect][در واقع اینجا باید type قرار دهیم]
//
// const MyArray = [
//   { name: "Alice", age: 15 },
//   { name: "Bob", age: 23 },
//   { name: "Eve", age: 38 },
// ];
//
// //
// type Person1 = typeof MyArray[number];
// const e8:Person1={name: 'ali',age:3}
//
// //
// type Person2 = typeof MyArray[number]['age'];
// const e9:Person2=12

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Conditional Types
///Example1
// interface Animal {
//   live: () => void;
// }
//
// interface Dog extends Animal {
//   woof: () => void;
// }
//
// type T = Dog extends Animal ? number : string;
// const t1: T = 12;

///Example2
interface IdLabel {
  id: number;
}

interface NameLabel {
  name: string;
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw 'unimplemented';
}

let a = createLabel('vahid');
let b = createLabel(1.2);
