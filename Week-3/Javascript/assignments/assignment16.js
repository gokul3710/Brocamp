var readlineSync = require("readline-sync");

let value = parseInt(readlineSync.question("Enter a number : "));
let isPrime;
if(value <= 1){
    console.log("Invalid Entry");
}

for(let i=2;i<=value/2;i++){
    if( value%i == 0){
        console.log("Entered number is not a prime.");
        isPrime = false
        break;
    }
    else{
        isPrime = true;
    }
}

if(isPrime){
    console.log("The entered number is a prime.");
}