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
numbers4.forEach(n => n.) // auto method detected after declaration of type

