import read from 'readline-sync'


console.log("Interest Calculator");
let P: number = +read.question('Enter the Principal Amount : ')
let R: number = +read.question('Enter the Interest Rate : ')
let n: number = +read.question('Enter the No of Years : ')
let SI: number = (P*R*n)/100
console.log(`Simple Interest is : ${SI}`);
