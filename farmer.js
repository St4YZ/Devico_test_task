const myJson = require ("./animals.json")
/* const pigs = myJson.pigs *= 4
const cows = myJson.cows *= 4
const chickens = myJson.chickens *= 2
const totalLegs = pigs+cows+chickens;
console.log(totalLegs) */

const totalLegs = (myJson.chickens*2)+(myJson.cows*4)+(myJson.pigs*4)
console.log(totalLegs)