const readlineSync = require("readline-sync");
const fs = require('fs');
let total_price = 0;

function shoppingItem(id,name,quantity,price){
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
}

exports.removeItem  = (id)=>{
    let itemArr = JSON.parse(fs.readFileSync("item.json"));
    itemArr = itemArr.filter(item=>item.id != id);
    for(let j=0;j<itemArr.length; j++){
        total_price += itemArr[j].price * itemArr[j].quantity;
    }
    console.log(`Current total price is : `+total_price);
    fs.writeFile("item.json",JSON.stringify(itemArr),(err)=>{
        if(err)
            console.log(`Something went wrong!!!`);
        else
            console.log(`Item with ID ${id} removed successfully!!!`);    
    })
}