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
const getCustomer = (id) => {
    return id === 0 ? null : { birthday: new Date() };
};
let customer = getCustomer(2);
let speed = undefined;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
('not used that much');
('Instead of use any-type, use unknown type');
let phone = document.getElementById('phone');
phone.value;
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this.balance += amount;
    }
}
let account = new Account(1, 'Pannus', 0);
account.deposit(100);
console.table(account);
//# sourceMappingURL=index.js.map