const User = require('../models/User');

exports.addAdmin = async(req,res)=>{

    try {

        const user = await User.findById(req.params.id);

        if(!user){
            return res.status(404).json({
                message: "User not found",
                success: false
            })
        }
        if(user.admin){
            return res.status(400).json({
                message: "Admin already exists"
            });
        }



        user.admin = true;
        await user.save();

        res.status(201).json({
            message: "this user in now admin",
            success: true,
            user
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
}