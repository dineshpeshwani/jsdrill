function lastCar (inventory, id)
{
    if(!inventory || !id) return `Improper Argument passed!!`;
    for(let i=0; i<inventory.length; i++)
    {
        if(id == 50)
        {
            return `Last car is a ${inventory[i].car_make} ${inventory[i].car_model}`;
        }
        else
        {
            return `id does not match with last Car`;
        } 
    }
}

module.exports = lastCar;