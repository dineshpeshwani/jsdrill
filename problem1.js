function getCarById (inventory, id)
{
        if(!inventory || !id) return `Improper Argument passed!!`;
        for(let i=0; i< inventory.length; i++)
        {
            if(inventory[i].id === id)
              return `car ${id} is a ${inventory[i].car_year} ${inventory[i].car_make}`;
        }
        return `No Car matching the given id`;
}

module.exports = getCarById;