const readlineSync = require("readline-sync");
const fs = require('fs');
let total_price = 0;

function shoppingItem(id,name,quantity,price){
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
}

exports.updateItem  = (id)=>{
    let itemArr = JSON.parse(fs.readFileSync("item.json"));
    let name;
    let price;
    for(let i=0; i<itemArr.length; i++){
        if(itemArr[i].id == id){
            name = itemArr[i].name;
            price = itemArr[i].price;
            break;
        }
    }
    itemArr = itemArr.filter(item=>item.id != id);
    const quantity = readlineSync.questionInt(`Enter the new quantity of this item : `);
    const item = new shoppingItem(id,name,quantity,price);
    itemArr = [...itemArr,item];
    for(let j=0;j<itemArr.length; j++){
        total_price += itemArr[j].price * itemArr[j].quantity;
    }
    console.log(`Current total price is : `+total_price);
    fs.writeFile("item.json",JSON.stringify(itemArr),(err)=>{
        if(err)
            console.log(`Something went wrong!!!`);
        else
            console.log(`Item quantity with ID - ${id} updated successfully!!!`);    
    })
}