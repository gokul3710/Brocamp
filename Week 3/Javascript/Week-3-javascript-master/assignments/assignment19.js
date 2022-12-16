var readlineSync = require("readline-sync");

let income = +readlineSync.question("Enter your Annual income in lakhs : ");
let tax;

if(income<=2.5){
    console.log("No Tax");
}else if(income>2.5 && income <= 5){
    tax = 5*income/100
    console.log(`Your tax amount is : ${tax} lakhs`);
}else if(income > 5 && income <= 10){
    tax = 20*income/100;
    console.log(`Your tax amount is : ${tax} lakhs`);
}else if(income > 10 && income < 50){
    tax = 30*income/100
    console.log(`Your tax amount is : ${tax} lakhs`);
}