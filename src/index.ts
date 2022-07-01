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

// Nullish Coalescing Operator

let speed: number | undefined = undefined;
let ride = {
  //falsy (undefined, null, '', 0, NaN, false)
  speed: speed ?? 30, //If speed is not undefined or null use that "speed" value, otherwise use 30
};

// Never Type

('not used that much');

//The Unknown Type

('Instead of use any-type, use unknown type');

// Type Assertions

let phone = <HTMLInputElement>document.getElementById('phone');

phone.value;

//inter to OOP

// Creating Classes

class Account {
  id: number;
  owner: string;
  balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }
  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Invalid amount');
    this.balance += amount;
  }
}
// Creating a new Object

let account = new Account(1, 'Pannus', 0);
account.deposit(100);

console.table(account);

// Read-only and Optional properties

[
  'Just add "readonly" inside the object front of the key and just add ? for make it optional',
];


//Access control keywords, it has keys like 'private', 'public and protected