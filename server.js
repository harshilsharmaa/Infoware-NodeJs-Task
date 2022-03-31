const express = require('express');
const dotenv = require('dotenv');
const app = require('./app.js');

if(process.env.NODE_ENV !== 'production'){
    dotenv.config({path: './config/config.env'});
}



const PORT = 4000 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running in ${PORT} `);
})


