const express = require('express');
const fs = require('fs');
const app = express();
const {Product} = require('./models/Product');
const {v4: uuid} = require('uuidv4');
const { v4 } = require('uuid');
const port = 4000;
const {database} = require('./config/db');
app.use(express.json());

app.get('/cart',(req,res)=>{
    try{
        Product.find().then((result)=>{
            return res.status(200).json({
                message:"Data retrieved successfully",
                result
            })
        }).catch((err)=>{
            return res.status(500).json({
                message:"Something went wrong",
                error:err.msg
            })
        })
    }
    catch(err){
        return res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    } 
})

app.post("/cart/add",(req,res)=>{
    try{
        
        // const product_id = v4();
        const {product_name, product_price, product_description, product_image} = req.body;
        if(product_name == '' && error == '' ){
            error = 'Missing Product Name'
            res.status(400).json({
                message: error
            })
        }
        if(product_price == '' && error == ''){
            error = 'Missing product price';
            res.status(400).json({
                message: error
            })
        }
        const productObj = {
            product_name,
            product_price,
            product_description,
            product_image
        }
        const product = new Product(productObj);
        product.save().then((result)=>{
            return res.status(200).json({
                message:"Data saved successfully",
                result
            })
        })
        .catch((err)=>{ 
            return res.status(500).json({
                message:"Something went wrong",
                error:err.message
            })
        })
        
    }    
    catch(err){
        return res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    } 

})

app.delete("/cart/delete/:id",(req,res)=>{
    try{
        const{id} = req.params;
        Product.findByIdAndDelete(id).then((result)=>{
            return res.status(200).json({
                message:"Data deleted successfully",
            })
        }).catch((err)=>{
            return res.status(500).json({
                message: "Something went wrong",
                error: err.message 
            })
        })
    }
    catch(err){
        return res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    } 
})

app.put("/cart/update/:id",(req,res)=>{
    try{
        const {id} = req.params;
        let error = '';
        const{product_name, product_price, product_description, product_image} = req.body;
        if(product_name == '' && error == '' ){
            error = 'Missing Product Name'
            res.status(400).json({
                message: error
            })
        }
        if(product_price == '' && error == ''){
            error = 'Missing product price';
            res.status(400).json({
                message: error
            })
        }
        Product.findByIdAndUpdate(id,{product_name,product_price,product_description,product_image})
        .then((result)=>{
            return res.status(200).json({
                message:"Data updated successfully",
            })
        }).catch((err)=>{
            return res.status(500).json({
                message: "Something went wrong",
                error: err.message 
            })
        })
    }
    catch(err){
        return res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    } 
})

database();
app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})