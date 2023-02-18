import read from 'readline-sync';

let income : number = +read.question("Enter your Annual income in lakhs : ");
let tax: number = 0;

if(income<=2.5){
    console.log("No Tax");
}else if(income>2.5 && income <= 5){
    tax = 5*income/100
}else if(income > 5 && income <= 10){
    tax = 20*income/100;
}else if(income > 10 && income < 50){
    tax = 30*income/100
}

if(tax){
    console.log(`Your tax amount is : ${tax} lakhs`);
}