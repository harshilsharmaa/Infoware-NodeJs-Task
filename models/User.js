const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    mobile:{
        type: Number,
        required: true,
        unique: true
    },
    profilePhoto:{
        public_id: String,
        url: String
    },
    myOrders:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }],
    admin:{
        type: Boolean,
        default: false
    }
}) 


userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
})


userSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('User', userSchema);