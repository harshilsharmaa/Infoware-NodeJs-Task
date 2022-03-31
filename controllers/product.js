const Product = require('../models/Product');
const Order = require('../models/Order');
const User = require('../models/User');

exports.allProducts = async(req,res)=>{

    try {

        const products = await Product.find({});

        res.status(200).json({
            message: "All products",
            success: true,
            products
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
}

exports.addProduct = async(req,res)=>{
    try {

        const {name,price,color,size} = req.body;

        const newProductData= {
            name,
            price,
            color,
            size,
        }

        if(req.body.available){
            newProductData.available = req.body.available;
        }

        const newProduct = await Product.create(newProductData);


        res.status(201).json({
            message: "Product added successfully",
            success: true,
            newProduct
        })
        
        
    } catch (error) {
        res.status(200).json({
            message: error.message,
            success: false
        })
    }
}

exports.addExistingProduct = async(req,res)=>{
    try {

        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({
                message: "Product not found",
                success: false
            })
        }

        const quantity = req.body.quantity;

        product.available = (product.available + quantity);
        await product.save();

        res.status(201).json({
            message: "Product availablity updated successfully",
            success: true,
            product
        })
        
        
    } catch (error) {
        res.status(200).json({
            message: error.message,
            success: false
        })
    }
}


exports.buyProduct = async(req,res)=>{
    try {

        const quantity = req.body.quantity;

        const productId = req.params.id;
       
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({
                message: "Product not found",
                success: false
            })
        }

        if(product.available === 0){
            return res.status(404).json({
                message: "Product not available",
                success: false
            })
        }

        if(product.available < quantity){
            return res.status(404).json({
                message: `Only ${product.available} available`,
                success: false
            })
        }     

        const user = await User.findById(req.user.id);

        const newOrderData = {
            user: user._id,
            product: product._id,
            price: product.price,
            totalAmount: product.price * quantity,
            quantity
        }

        const newOrder = await Order.create(newOrderData);

        await user.myOrders.push(newOrder._id);

        await user.save();

        product.available = (product.available - quantity);

        await product.save();

        res.status(201).json({
            message: "Product bought successfully",
            success: true,
        })
        
    } catch (error) {
        res.status(200).json({
            message: error.message,
            success: false
        })
    }
}