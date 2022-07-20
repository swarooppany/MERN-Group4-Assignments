const express = require('express');
const fs = require('fs');
const app = express();
const {Product} = require('./Product');
const {v4: uuid} = require('uuidv4');
const { v4 } = require('uuid');
const port = 4000;

app.use(express.json());

app.get('/cart',(req,res)=>{
    try{
        const filearray = fs.readdirSync(__dirname);
        let data = [];
        let message = '';
        if(filearray.includes('cart.json')){
            data = JSON.parse(fs.readFileSync('cart.json'))
        }
        if(data.length > 0){
            message = "Here are your products";
        }
        else{
            message = "No products added in the cart"
        }
        return res.status(200).json({
            message:message,
            data
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
        const filearray = fs.readdirSync(__dirname);
        let data = [];
        let error = '';
        if(filearray.includes('cart.json')){
            data = JSON.parse(fs.readFileSync('cart.json'))
        }
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
        const product = new Product(v4(),product_name,product_price,product_description,product_image);
        data = [...data,product];
        fs.writeFile('cart.json',JSON.stringify(data),(err)=>{
            if(err){
                res.status(500).json({
                    message: "Something went wrong",
                    erorr: err
                })
            }
            res.status(200).json({
                message: "Successfully Added",
                data: data
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
        const {id} = req.params;
        let data = JSON.parse(fs.readFileSync('cart.json'));
        const newdata = data.filter(item=>item.product_id != id);
        fs.writeFile('cart.json',JSON.stringify(newdata),(err)=>{
            if(err){
                return res.status(500).json({
                    message:"Something went wrong",
                    error: err
                })
            }
            return res.status(200).json({
                message: "item deleted successfully",
                data: newdata
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

app.put("/cart/update/:product_id",(req,res)=>{
    try{
        const {product_id} = req.params;
        let data = JSON.parse(fs.readFileSync('cart.json'));
        let newdata = data.filter(item=>item.product_id != product_id);
        const{product_name, product_price, product_description, product_image} = req.body;
        const product = new Product(product_id,product_name,product_price,product_description,product_image);
        newdata = [...newdata,product];
        fs.writeFile('cart.json',JSON.stringify(newdata),(err)=>{
            if(err){
                res.status(500).json({
                    message: "Something went wrong",
                    erorr: err
                })
            }
            res.status(200).json({
                message: "Successfully Updated",
                data: newdata
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


app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})