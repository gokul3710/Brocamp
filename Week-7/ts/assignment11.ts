import read from 'readline-sync';

let limit = +read.question("Enter the limit of the array : ")
let array = new Array(limit)
let count = 0
for (let i = 0; i < limit; i++) {
    array[i] = +read.question('')
    if(array[i]%2 == 0){
        count++
    }
}

console.log(`The number of even numbers in the array is ${count}`);


