const express = require('express');
const fs = require('fs');
const app = express();
const port = 4000;
app.get('/cart/data',(req,res)=>{
    const content = JSON.parse(fs.readFileSync("cart.json"));
    let total_price = 0;
    for(let i =0; i<content.length;i++){
        total_price += content[i].price * content[i].quantity; 
    }
    res.status(200).json({
        message:"Retrieved Data",
        data:content,
        'Total_price':total_price
    })
})

app.get('/cart/search/:id',(req,res)=>{
    id = req.params.id;
    const content = JSON.parse(fs.readFileSync("cart.json"));
    const matcheddata = content.filter(item=>item.id==id);
    res.status(200).json({
        message:"Retrieved Data",
        data:matcheddata,
    })
})

app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})
 