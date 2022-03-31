const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    quantity:{
        type: Number,
    },
    orderDate:{
        type: Date,
        default: Date.now,
    },
    price:{
        type: Number,
    },
    totalAmount:{
        type: Number,
    }
})

module.exports = mongoose.model('Order', orderSchema);