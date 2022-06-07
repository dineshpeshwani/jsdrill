const inventory = require('./cars');
const sortCarModel = require('./problem3');

console.log(sortCarModel(inventory));
console.log(sortCarModel(undefined));
console.log(sortCarModel(null));
console.log(sortCarModel());