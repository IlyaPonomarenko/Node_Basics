const {read} = require("./library/utilities")
const filePath ="./test.js"
read(filePath).then(console.log).catch(console.log)