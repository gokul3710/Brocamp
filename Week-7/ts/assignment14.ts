import read from 'readline-sync';

let limit: number = +read.question("Enter the limit of the arrays : ")
let array1: number[][] = []
let array2: number[][] = []
let array3: number[][] = []

console.log("Enter the values of array 1");


for (let i: number = 0; i < limit; i++) {
    let array: number[] = []
    for (let j : number = 0; j < limit; j++) {
        array[j] = +read.question('')        
    } 
    array1.push(array)
}

console.log("Enter the values of array 2");


for (let i: number = 0; i < limit; i++) {
    let array: number[] = []
    for (let j : number = 0; j < limit; j++) {
        array[j] = +read.question('')        
    } 
    array2.push(array)
}

for (let i : number= 0; i < limit; i++) {
    let array : number[] = []
    for (let j = 0; j < limit; j++) {
        array[j] = array1[i][j] + array2[i][j]
    }
    array3.push(array)  
}

for(let sum of array3){
    console.log(...sum);  
}

