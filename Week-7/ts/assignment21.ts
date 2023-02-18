import read from 'readline-sync';

let limit: number, array1: number[] = [], array2: number[] = [];

limit = +read.question("Enter the limit of array : ");
console.log("enter the values of array");

for (let i: number = 0; i < limit; i++) {
    array1[i] = +read.question("");
}

for (let i: number = 0; i < limit - 1; i++) {
    array2[i] = array1[i] * array1[i + 1];
}

console.log(`The values after multiplication is  : ${array2}`);