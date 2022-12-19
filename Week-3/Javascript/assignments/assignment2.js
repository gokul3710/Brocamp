var readlineSync = require('readline-sync');

let num1 = readlineSync.question("Enter two numbers\n");
let num2 = readlineSync.question("");

let sum = parseInt(num1) + parseInt(num2) ;

console.log("Sum of the numbers is :",sum);