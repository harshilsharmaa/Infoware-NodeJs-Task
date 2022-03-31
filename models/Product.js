const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    color:{
        type: String,
    },
    size:{
        type: String,
    },
    price:{
        type: Number,
    },
    image:{
        public_id: String,
        url: String
    },
    available:{
        type:Number,
        default: 5
    }
})

module.exports = mongoose.model('Product', productSchema);