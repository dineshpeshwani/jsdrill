const inventory = require('./cars');
const lastCar = require('./problem2');

console.log(lastCar(inventory, 50));
console.log(lastCar(inventory, 321456));
console.log(lastCar(inventory, undefined));
console.log(lastCar(inventory, null));
console.log(lastCar(33));