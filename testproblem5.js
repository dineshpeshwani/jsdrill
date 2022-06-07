const inventory = require('./cars');
const olderCars = require('./problem5');

console.log(olderCars(inventory));
console.log(olderCars(null));
console.log(olderCars(undefined));
console.log(olderCars());


