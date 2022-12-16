var readlineSync = require("readline-sync");

var limit,array1 = [],array2=[];

limit = Number(readlineSync.question("Enter the limit of array : "));
console.log("enter the values of array");

for (let i = 0; i < limit; i++) {
  array1[i] = Number(readlineSync.question(""));
}

for(i=0;i<limit-1;i++){
    array2[i]= array1[i]*array1[i+1];
}

console.log(`The values after multiplication is  : ${array2}`);
