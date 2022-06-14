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

function calculateTax(income: number) {
  if (income < 50_000) return income * 0.2;
  return income * 1.3;
}
