const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const port=process.env.PORT || 4001  
const app=express();
const products=require('./products');
const register = require('./routes/register')
const login = require('./routes/login')
const productsRoute= require('./routes/products')

require('dotenv').config();

app.use(express.json());
app.use(cors())
app.use('/api/register', register);
app.use('/api/login', login);  
app.use('/api/products', productsRoute)
app.get("/",(req,res)=>{ 
    res.send("API : Success");
});
app.get("/products",(req,res)=>{
    res.send(products);
});
const uri=process.env.DB_URI;
app.listen(port,console.log(`Server started at port  ${port}`));

mongoose.connect(uri, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=> console.log("MongoDb connection successful"))
.catch((err)=>console.log("Conection failed", err.message));