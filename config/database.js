const mongoose = require('mongoose');


exports.connectDatabase = ()=>{
    
    mongoose.connect('mongodb://localhost:27017/intertask1').then(() => {
        console.log('MongoDB connected');
    }).catch(err => {
        console.log(err);
    })
}
