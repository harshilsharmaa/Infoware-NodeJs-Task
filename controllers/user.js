const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.register = async(req, res)=>{

    try {

        const {name, email, password, mobile} = req.body;

        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const userData = {
            name,
            email,
            password,
            mobile,
        }

        const newUser = new User(userData);
        await newUser.save();


        const token = jwt.sign({_id: newUser._id}, process.env.JWT_SECRET, {expiresIn: '7d'});

        res.cookie('token', token, {}).status(201).json({
            message: "User registered successfully",
            success: true,
            newUser
        });

        
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }

}

exports.login = async(req, res)=>{
    try {
        
        const {email, password} = req.body;

        const user = await User.findOne({email}).select("+password");
        if(!user){
            return res.status(400).json({
                message: "User does not exist"
            });
        }
        const isMatch = await user.matchPassword(password);
        if(!isMatch){
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }


        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});


        res.cookie('token', token, {}).status(200).json({
            message: "User logged in successfully",
            success: true,
            token,
            user
        })


    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
}

exports.myProfile = async(req,res)=>{
    try {
        const user = await User.findById(req.user.id);
        res.status(200).json({
            message: "My profile",
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

exports.updateProfile = async(req,res)=>{
    try {

        const user = await User.findById(req.user.id);

        if(req.body.name){
            user.name = req.body.name;
        }
        if(req.body.mobile){
            user.mobile = req.body.mobile;
        }

        // Update profile photo 
        if(req.body.profilePhoto){
            user.profilePhoto = req.body.profilePhoto;
        }

        await user.save();

        res.status(200).json({
            message: "User updated successfully",
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

exports.deleteProfile = async(req,res)=>{
    try {

        const user = await User.findById(req.user.id);

        await user.remove();



        res.status(200).cookie("token", null, {expires:new Date(Date.now()), httpOnly:true}).json({
            message: "User deleted successfully",
            success: true
        });


        
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
}


exports.logout = async(req,res)=>{
    try {
        
        res.status(200).cookie("token", null, {expires:new Date(Date.now()), httpOnly:true}).json({
            message: "Logout successful",
            success: true
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
}