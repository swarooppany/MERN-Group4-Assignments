// let arr1 = [1,4,91,26,31,53]; 
const Largest = (arr1) =>{
    let largest = 0;
    for(i=0; i<arr1.length; i++){
        if(arr1[i] > largest){
            largest = arr1[i];
        }
    }
    return(largest);
}

let arr1 = [];
let n = Number(prompt(`Enter the length of the array : `));
let x;
for(i=0; i<n; i++){
    x = Number(prompt(`Enter element for index ${i} : `));
    arr1.push(x);
}
console.log(`The array is - ${arr1}`);

const res = Largest(arr1);
console.log(`The largest element is ${res}`);


