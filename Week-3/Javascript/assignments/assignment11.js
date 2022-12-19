"use strict"
var readlineSync = require('readline-sync');

var limit,array=[],count=0;

limit =parseInt(readlineSync.question("Enter the limit of array : "));
console.log("enter the values of array");

for(let i=0;i<limit;i++){
    array[i]=parseInt(readlineSync.question(""));
}

for(let i=0;i<limit;i++){
    if(array[i]%2 == 0 && array[i]>0){
        count++;
    }
}


console.log(`Number of even numbers in the array is ${count}`);
