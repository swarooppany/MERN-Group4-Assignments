const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
    // product_id:{
    //     type:String,
    //     required:true
    // },
    product_name:{
        type:String,
        required:true
    },
    product_price:{
        type:Number,
        required:true
    },
    product_description:{
        type:String,
        required:false
    },
    product_image:{
        type:String,
        required:false
    }
},{timestamps:true})

exports.Product = mongoose.model('product',productSchema);