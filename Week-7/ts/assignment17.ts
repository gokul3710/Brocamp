import read from 'readline-sync';

let num1 : number = +read.question("Enter two numbers\n");
let num2: number = +read.question("");

let choice : number = +read.question(`Enter 1 for adiition
Enter 2 for subtraction
Enter 3 for multiplication
Enter 4 for division`);
let result : number = 0;


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


function addition(a:number,b:number){
    return a+b;
}

function subtraction(a:number,b:number){
    return a-b;
}

function multiplication(a:number,b:number){
    return a*b;
}

function division(a:number,b:number){
    return a/b;
}

console.log(result);
