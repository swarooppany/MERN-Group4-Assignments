let count=0;
let sum = 2;

const PrimeCheck = (num) =>{
    for( i=2; i<=Math.sqrt(num); i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
 
let n = 3;
while(count<9){
    if(PrimeCheck(n)){
        //console.log(n);
        sum = sum+n;
        count++
    }
    n++;
}

console.log(`The sum of first 10 prime numbers is : `+sum);
