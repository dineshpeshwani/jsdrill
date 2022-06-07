function sortCarModel(inventory) {
    if(!inventory){
        return `Improper argument passed`;
    }
    inventory.sort((a,b) => (a.car_model > b.car_model) ? 1 : ((b.car_model > a.car_model) ? -1 : 0))
    return inventory;
}

module.exports = sortCarModel;