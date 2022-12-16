var readlineSync = require('readline-sync');

var limit,array1=[],array2=[];

limit =parseInt(readlineSync.question("Enter the limit of array : "));
console.log("enter the values of array1");

for(let i=0;i<limit;i++){
    array1[i]=parseInt(readlineSync.question(""));
}

console.log("enter the values of array2");

for(let i=0;i<limit;i++){
    array2[i]=parseInt(readlineSync.question(""));
}

for(let i=0;i<limit;i++){
    array1[i]=array1[i]+array2[i];
    array2[i]=array1[i]-array2[i];
    array1[i]=array1[i]-array2[i];
}

console.log(`Values of array 1 is ${array1}
values of array 2 is ${array2}`);
