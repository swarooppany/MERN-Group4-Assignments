// let arr1 = [2,3,-4,-5,3.5,-2.5];
const Average = (arr1) =>{
    let count = 0;
    let sum = 0;
    for(let i = 0; i<arr1.length; i++){
        if(arr1[i]<0){
            sum = sum+arr1[i];
            count++; 
        }
    }
    return(sum/count);
}
let arr1 = [];
let n = Number(prompt(`Enter the length of the array : `));
let x;
for(i=0; i<n; i++){
    x = Number(prompt(`Enter element for index ${i} : `));
    arr1.push(x);
}
console.log(`The array is - ${arr1}`);

const res = Average(arr1); 
console.log(`The required average is ${res}`)
