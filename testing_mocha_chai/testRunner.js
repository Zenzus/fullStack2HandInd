const calc = require("./calc.js");
const PORT = 666;



calc.calcServer(PORT,()=> console.log("server started"))