const {getIceCream, getAllFlavours, hasFlavour} = require("./Storage/iceCreamFreezer")
getAllFlavours().then(console.log).catch(console.log)
getIceCream("vanilla").then(console.log).catch(console.log)