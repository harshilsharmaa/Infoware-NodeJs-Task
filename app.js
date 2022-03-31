const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

const {connectDatabase} = require('./config/database');

connectDatabase();

// Using Middleware
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());


// Import routes
const user = require('./routes/user');
const admin = require('./routes/admin');
const product = require('./routes/product');
const order = require('./routes/order');

// // Using routes
app.use('/api/v1/user', user);
app.use('/api/v1/admin', admin);
app.use('/api/v1/product', product);
app.use('/api/v1/order', order);

module.exports = app;
