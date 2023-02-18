import read from 'readline-sync';

let limit: number ,array1: number[] = [],array2: number[]=[];

limit = +read.question("Enter the limit of array : ");
console.log("enter the values of array1");

for(let i=0;i<limit;i++){
    array1[i]= +read.question("");
}

console.log("enter the values of array2");

for(let i=0;i<limit;i++){
    array2[i]= +read.question("");
}

for(let i=0;i<limit;i++){
    array1[i]=array1[i]+array2[i];
    array2[i]=array1[i]-array2[i];
    array1[i]=array1[i]-array2[i];
}

console.log(`Values of array 1 is ${array1}
values of array 2 is ${array2}`);