var readlineSync = require("readline-sync");

let num1 = +readlineSync.question("Enter two numbers\n");
let num2 = +readlineSync.question("");

let choice = +readlineSync.question(`Enter 1 for adiition
Enter 2 for subtraction
Enter 3 for multiplication
Enter 4 for division`);


switch (choice) {
    case 1:
        result = addition(num1,num2);
        break;
    case 2:
        result = subtraction(num1,num2);
        break;
    case 3:
        result = multiplication(num1,num2);
        break;
    case 4:
        result = division(num1,num2);
        break;
    default:
        console.log("Invalid Entry");
        break;
}

console.log(result);

function addition(a,b){
    return a+b;
}

function subtraction(a,b){
    return a-b;
}

function multiplication(a,b){
    return a*b;
}

function division(a,b){
    return a/b;
}