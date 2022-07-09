// let arr1 = [-5,6,4,3,2,-12,18];
let arr1 = [];
let n = Number(prompt(`Enter the length of the array : `));
let x;
for(i=0; i<n; i++){
    x = Number(prompt(`Enter element for index ${i} : `));
    arr1.push(x);
}
console.log(`The array is - ${arr1}`);

let sum = 0;
for(let i=0; i<arr1.length; i++){
    if(arr1[i]>0 && arr1[i]%2 === 0 && arr1[i]%3 === 0){
        console.log(arr1[i]);
        sum = sum+arr1[i];
    }
}
console.log('The required result is '+sum);