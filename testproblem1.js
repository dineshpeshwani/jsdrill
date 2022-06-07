const inventory = require('./cars');
const getCarById = require('./problem1');

console.log(getCarById(inventory, 33));
console.log(getCarById(inventory, 321456));
console.log(getCarById(inventory, undefined));
console.log(getCarById(inventory, null));
console.log(getCarById(33));