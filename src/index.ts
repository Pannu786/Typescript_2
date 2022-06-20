// let sales = 123_456_789;
// let course = 'Typescript';
// let is_published = true;
// let level;

// Js Style
let numbers = [1, 2, '3'];

//Ts Way
let numbers2 = [1, 2, 3];

let numbers3 = []; // this not right in TS as it will infer as any

let numbers4: number[] = []; // this is right in TS as it will infer as number[]
numbers4.forEach((n) => n.toExponential); // auto method detected after declaration of type

// Tuples

let user: [number, string] = [69, '69'];

//enums

const enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;
console.log(mySize);

// Functions

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

calculateTax(1000);

// object

let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: '',
  retire: (date: Date) => {
    console.log(date);
  },
};

// Type Aliases

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee1: Employee = {
  id: 1,
  name: '',
  retire: (date: Date) => {
    console.log(date);
  },
};

// Union Types

const kgToLbs = (weight: number | string): number => {
  if (typeof weight === 'number') return weight * 2.2046226218;
  return parseInt(weight) * 2.2046226218;
};

kgToLbs('100');
kgToLbs(100);

// Intersection Types

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},

  resize: () => {},
};

//Literal Types
type Quantity = 50 | 99; // using union types here to represent 50 or 99(which is a Literal Type)
let quantity: Quantity = 99;

type Metric = 'kg' | 'g' | 'mg';

// Never Type(nullable)

function processEvents() {
  while (true) {
    // do something
  }
}

processEvents();
console.log('hey');

// Optional Chaining

type Customer = {
  birthday: Date;
};

const getCustomer = (id: number): Customer | null | undefined => {
  return id === 0 ? null : { birthday: new Date() };
};

let customer = getCustomer(2);
console.log(customer?.birthday);

// Nullish Coalescing Operator

let speed: number | undefined = undefined;
let ride = {
  //falsy (undefined, null, '', 0, NaN, false)
  speed: speed ?? 30, //If speed is not undefined or null use that "speed" value, otherwise use 30
}; 
