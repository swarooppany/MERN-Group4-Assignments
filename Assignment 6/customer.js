const readlineSync = require("readline-sync");
let customerList=[];
function Customer(name, email, phoneNumber, purchases) {
    this.name = name,
    this.email=email,
    this.phoneNumber= phoneNumber,
    this.purchaseCount = purchases,
    this.purchaseHistory =[],
    this.totalPurchaseAmount
}
function addPurchase( purchaseDate ,itemList){
     let purchaseObj ={
        date: purchaseDate,
        items: itemList
     }
     return purchaseObj;
     
}

function addItems(itemName, itemPrice)
{
     item = {
       Name:itemName,
       price:itemPrice
      }
    return item;
}

for(let i=0; i<5; i++){
    let name = readlineSync.question(`Enter name of customer-${i+1} : `);
    let phone = readlineSync.question(`Enter phone number of customer-${i+1} : `);
    let email = readlineSync.question(`Enter email of customer-${i+1} : `);
    let purchases = readlineSync.question(`Enter no. of purchases for customer-${i+1} : `);
    purchases = Number(purchases);
    customerList[i] = new Customer(name,email,phone,purchases);
    console.log(`Customer Name: ${name}
    Phone Number: ${phone}
    E-mail address: ${email}
    No. of purchases: ${purchases}`);
    var total_price = 0;
    for(j=0; j<purchases; j++){
        var itemList = [];
        let purchaseDate = readlineSync.question(`Enter the purcahse date of purchase-${j+1} of customer-${i+1} : `);
        let items = readlineSync.question(`Enter no. of items of purchase-${j+1} of customer-${i+1} : `);
        items = Number(items);
        console.log(`Purchase-${j}
        Purchase Date : ${purchaseDate}
        No. of items : ${items}`);
        for(let k=0; k<items; k++){
            let itemName = readlineSync.question(`Enter item-${k+1} name : `);
            let itemPrice = readlineSync.question(`Enter item-${k+1} price : `);
            itemPrice = Number(itemPrice);
            let item = addItems(itemName,itemPrice);
            total_price += itemPrice;
            console.log(`${itemName} : ${itemPrice}`)
            itemList.push(item);
        }
        let purchase = addPurchase(purchaseDate,itemList);
        customerList[i].purchaseHistory.push(purchase);            
    }
    customerList[i].totalPurchaseAmount = total_price;
    console.log(`Total Amount is - ${customerList[i].totalPurchaseAmount}`);             
}

for(let l=0; l<customerList.length; l++){
    if(customerList[l].purchaseCount > 5){
        console.log(`Customer-${l+1} has more than 5 purchases!`);
    }
}