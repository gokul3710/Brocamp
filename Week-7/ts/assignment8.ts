import read from 'readline-sync'

let limit : number = +read.question('Enter a limit : ')
let nums : number = Math.floor((limit+1)/2)
console.log(`Sum of the numbers are : ${(nums)*(nums)}`);
