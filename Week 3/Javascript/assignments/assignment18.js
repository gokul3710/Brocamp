var readlineSync = require("readline-sync");

let test = +readlineSync.question("Enter your written test mark : ")
let lab = +readlineSync.question("Enter your lab mark : ")
let assignment = +readlineSync.question("Enter your assignment mark :")

let grade =  (test*70)/100 + (lab*20)/100 + (assignment*10)/100;

console.log(`You overall grade is : ${grade}`);
