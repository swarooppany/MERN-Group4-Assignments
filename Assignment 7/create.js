const readlineSync = require("readline-sync");
const fs = require('fs');
let total_price = 0;

function shoppingItem(id,name,quantity,price){
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
}

exports.addItem = () =>{
    let nItems = readlineSync.questionInt("Enter the no. of items : ");
    let itemArr = JSON.parse(fs.readFileSync("item.json"));
    for(let i = 0; i<nItems; i++){
        const id = readlineSync.question(`Enter the item id : `);
        const name = readlineSync.question(`Enter the item name : `);
        const quantity = readlineSync.questionInt(`Enter the quantity of this item : `);
        const price = readlineSync.questionInt(`Enter the price of this item : `);
        const item = new shoppingItem(id,name,quantity,price);
        itemArr = [...itemArr,item];
    }
    for(let j=0;j<itemArr.length; j++){
        total_price += itemArr[j].price * itemArr[j].quantity;
    }
    console.log(`Current total price is : `+total_price);
    fs.writeFile("item.json",JSON.stringify(itemArr),(err)=>{
        if(err)
            console.log(`Something went wrong!!!`);
        else
            console.log(`Item(s) saved successfully!!!`);    
    })
} 