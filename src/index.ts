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

// Parameter Properties, it makes code shorter and more readable as we no longer need to repeat the same constructor.

//Getters and setters understand by watching the video.

//Index Signatures watched the video

//Static Members

// class Ride {
//   private static _activeRiders: number = 0;

//   start() {
//     Ride._activeRiders++;
//   }
//   stop() {
//     Ride._activeRiders--;
//   }

//   static get activeRiders() {
//     return Ride._activeRiders;
//   }
// }

// let ride1 = new Ride();
// ride1.start();

// let ride2 = new Ride();
// ride2.stop();

// console.log(Ride.activeRiders);
// console.log(Ride.activeRiders);

// Inheritance, when you inheritance  something from another class or object.(properties or methods)

//Method overriding, it is used to override the methods in the class and  the methods in the object properties.

// Polymorphism is when you don't change the class

// Private vs Protected Members, protected members are accessible through class properties as they are inheritance where as private methods are only accessible in their own class properties.

// Abstract classes and methods ..

// Interfaces

// abstract class Calender {
//   constructor(public name: string) {}

//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

interface Calender {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalendar extends Calender {
  sync(): void;
}

class GoogleCalendar implements Calender {
  constructor(public name: string) {}

  addEvent(): void {
    throw new Error('Method not implemented.');
  }
  removeEvent(): void {
    throw new Error('Method not implemented.');
  }
}

// FOLDER 6, generic classes

class KeyValuePair<TKey, TValue> {
  constructor(public key: TKey, public value: TValue) {}
}

let pair = new KeyValuePair(69, '69');
pair.key.toFixed


