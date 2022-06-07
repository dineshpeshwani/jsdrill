function BMWAndAudi(inventory)
{ 
    if(!inventory) return `Improper Argument passed!!`;
    for(let i=0; i<inventory.length; i++)
    {
        if(inventory[i].car_make == "Audi" || inventory[i].car_make == "BMW")
        {        
            console.log(`${JSON.stringify(inventory[i])}`);
        }
    }
}
module.exports = BMWAndAudi;