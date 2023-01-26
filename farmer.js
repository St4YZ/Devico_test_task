const animal = require ("./animals.json")

function animals()
{
    return animal.pigs * 4 + animal.cows * 4 + animal.chickens * 2;
}
console.log(animals())