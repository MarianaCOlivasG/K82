const express = require("express");
require("dotenv").config();

const app = express();

app.listen( 3000, '0.0.0.0', () => {
    console.log(`Hola ${ process.env.MI_NOMBRE } ${ process.env.MI_APELLIDO }`);
})

// node index.js
// Git 
// rama main 
// push main 
// docker -> imagen