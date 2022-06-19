"use strict";
let numbers = [1, 2, '3'];
let numbers2 = [1, 2, 3];
let numbers3 = [];
let numbers4 = [];
numbers4.forEach((n) => n.toExponential);
let user = [69, '69'];
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(1000);
let employee = {
    id: 1,
    name: '',
    retire: (date) => {
        console.log(date);
    },
};
let employee1 = {
    id: 1,
    name: '',
    retire: (date) => {
        console.log(date);
    },
};
const kgToLbs = (weight) => {
    if (typeof weight === 'number')
        return weight * 2.2046226218;
    return parseInt(weight) * 2.2046226218;
};
kgToLbs('100');
kgToLbs(100);
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 99;
function processEvents() {
    while (true) {
    }
}
processEvents();
console.log('hey');
//# sourceMappingURL=index.js.map