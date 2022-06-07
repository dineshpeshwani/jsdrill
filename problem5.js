let num=0;
function olderCars(inventory)
{   
    if(!inventory) return `Improper Argument passed!!`;
    for(let i=0; i<inventory.length; i++){
        if(inventory[i].car_year < 2000){
            num = num+1;
        }
    }
    return `No. of cars older than year 2000 are ${num}`;
}
module.exports = olderCars;