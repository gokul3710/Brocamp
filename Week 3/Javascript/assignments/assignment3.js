var readlineSync = require('readline-sync');

let P = readlineSync.question('Enter the Principal Amount : ');
let r = readlineSync.question('Enter the Interest Rate : ');
let n = readlineSync.question('Enter the Number of Years : ');

let SI = (parseInt(P)*parseInt(r)*parseInt(n))/100;

console.log("Simple Interest is :",SI);
