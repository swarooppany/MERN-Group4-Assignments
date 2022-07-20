const readlineSync = require("readline-sync");
let arr = [];
let n = readlineSync.questionInt("Enter the length of the array : ");
for(let i=0; i<n; i++){
    arr[i] = readlineSync.questionFloat(`Enter element for index ${i} :`);
    
}



