const { exit } = require("process");
const readlineSync = require("readline-sync");
const {addItem} = require(`./create`);
const {updateItem} = require(`./update`);
const {removeItem} = require(`./remove`);
console.log(`Press 1 - Add\n2 - Update Item Quantiy\n3 - Remove item`);
const operation = readlineSync.question(`Enter the operation to perform : `);

let id;

switch(operation){
    case '1':
        addItem();
        break;
    case '2':
        id = readlineSync.question(`Enter the item id to update : `);
        updateItem(id);
        break;
    case '3':
        id = readlineSync.question(`Enter the item id to remove : `);
        removeItem(id);
        break;
    default:
        console.log(`Invalid Entry`);        
}

